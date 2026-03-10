import { Controller, Post, Body, Get, Put, UseGuards, Res, Req, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import * as express from 'express';
@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @ApiOperation({ summary: 'Đăng nhập vào hệ thống' })
    @Post('login')
    async login(
        @Body() loginDto: LoginDto,
        @Res({ passthrough: true }) res: express.Response
    ) {
        return this.authService.login(loginDto, res);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Lấy thông tin user hiện tại và danh sách nhóm quyền của user đang login' })
    @Get('me')
    async getMe(@CurrentUser() user: any) {
        return this.authService.getMe(user.userId);
    }

    @ApiOperation({ summary: 'Cấp lại Access Token mới khi token cũ hết hạn' })
    @Post('refresh-token')
    async refreshToken(
        @Req() req: express.Request,
        @Res({ passthrough: true }) res: express.Response
    ) {
        const tokenFromCookie = req.cookies['refresh_token'];

        if (!tokenFromCookie) {
            throw new UnauthorizedException('Không tìm thấy Refresh Token. Vui lòng đăng nhập lại!');
        }

        return this.authService.refreshToken(tokenFromCookie, res);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Đổi mật khẩu' })
    @Put('change-password')
    async changePassword(
        @CurrentUser() user: any,
        @Body() changePasswordDto: ChangePasswordDto,
    ) {
        return this.authService.changePassword(user.userId, changePasswordDto);
    }

    @ApiOperation({ summary: 'Đăng xuất khỏi hệ thống' })
    @Post('logout')
    async logout(@Res({ passthrough: true }) res: express.Response) {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token', { path: '/api/auth/refresh-token' });

        return { message: 'Đăng xuất thành công' };
    }
}
