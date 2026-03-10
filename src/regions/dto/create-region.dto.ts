import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRegionDto {
    @ApiProperty({ example: 'HCM', description: 'Mã khu vực (Unique)' })
    @IsNotEmpty()
    @IsString()
    code: string;

    @ApiProperty({ example: 'Hồ Chí Minh', description: 'Tên khu vực' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: '123 Đường ABC, Phường XYZ', description: 'Địa chỉ khu vực' })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty({ example: true, description: 'Trạng thái hoạt động' })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

