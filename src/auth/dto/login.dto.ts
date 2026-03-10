import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'EMP001', description: 'Employee code or username' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'password123', description: 'User password' })
    @IsNotEmpty()
    @IsString()
    password: string;
}
