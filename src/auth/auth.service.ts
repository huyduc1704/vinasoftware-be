import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { jwtConstants } from './constants';
import { Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto, res: Response) {
        const { username, password } = loginDto;

        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { employee: { email: username } }
                ],
                isActive: true,
            },
            include: {
                employee: true,
                role: true
            }
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.generateTokens(user, res);
    }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                employee: true,
                role: {
                    include: {
                        rolesPermissions: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            }
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
    }

    async refreshToken(refreshTokenDto: RefreshTokenDto, res: Response) {
        const { refreshToken } = refreshTokenDto;
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: jwtConstants.refreshSecret,
            });

            const user = await this.prisma.user.findUnique({
                where: { id: payload.sub },
                include: {
                    employee: true,
                    role: true,
                }
            });

            if (!user) {
                throw new UnauthorizedException('User no longer exists');
            }

            return this.generateTokens(user, res);
        } catch (e) {
            throw new UnauthorizedException('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!');
        }
    }

    async changePassword(userId: string, changePasswordDto: ChangePasswordDto) {
        const { oldPassword, newPassword } = changePasswordDto;

        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            throw new BadRequestException('Old password is not correct');
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await this.prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        return { message: 'Password updated successfully' };
    }

    private generateTokens(user: any, res: Response) {
        const payload = { username: user.username, sub: user.id, roleId: user.roleId };

        const accessToken = this.jwtService.sign(payload);

        const refreshToken = this.jwtService.sign(payload, {
            secret: jwtConstants.refreshSecret,
            expiresIn: '7d',
        });

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: 'strict',
        });

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: 'strict',
            path: '/api/auth/refresh-token'
        });

        return {
            message: 'Login success',
            user: {
                id: user.id,
                username: user.username,
                roleCode: user.role.code
            }
        };
    }
}
