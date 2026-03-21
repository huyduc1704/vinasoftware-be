import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpsertSettingDto {
    @ApiProperty({ example: 'FOOTER_TITLE', description: 'Từ khóa hệ thống' })
    @IsNotEmpty()
    @IsString()
    key: string;

    @ApiProperty({ example: 'Công ty TNHH Vina Software', description: 'Value' })
    @IsNotEmpty()
    @IsString()
    value: string;

    @ApiPropertyOptional({ example: 'Tiêu đề ở chân trang website', description: 'Mô tả thêm' })
    @IsOptional()
    @IsString()
    description?: string;
}