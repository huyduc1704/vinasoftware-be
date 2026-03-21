import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePermissionDto {
    @ApiProperty({ example: 'permission_code', description: 'Mã quyền' })
    @IsNotEmpty()
    @IsString()
    code: string;

    @ApiPropertyOptional({ example: 'permission_name', description: 'Tên quyền' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiPropertyOptional({ example: 'USER_ROLE', description: 'Phân loại module quản lý' })
    @IsOptional()
    @IsString()
    module?: string;
}
