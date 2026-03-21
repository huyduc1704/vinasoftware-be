import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    let data = request?.cookies?.['access_token'];
                    if (!data) {
                        return ExtractJwt.fromAuthHeaderAsBearerToken()(request);
                    }
                    return data;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET as string,
        });
    }
    async validate(payload: any) {
        // Trả về cả mảng roles và permissions
        return {
            id: payload.sub,
            username: payload.username,
            account_type: payload.account_type,
            roles: payload.roles,
            permissions: payload.permissions
        };
    }
}