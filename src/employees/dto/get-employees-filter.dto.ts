import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetEmployeesFilterDto {
    @ApiProperty({ description: 'Trang hiện tại', default: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    page?: number = 1;

    @ApiPropertyOptional({ description: 'Số bản ghi mỗi trang', default: 10 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    limit?: number = 10;

    @ApiPropertyOptional({ description: 'Tìm theo tên, email hoặc mã nhân viên' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ description: 'Tìm theo tên nhân viên' })
    @IsOptional()
    @IsString()
    searchName?: string;

    @ApiPropertyOptional({ description: 'Tìm theo tên quản lý trực tiếp' })
    @IsOptional()
    @IsString()
    managerName?: string;

    @ApiPropertyOptional({ description: 'Tìm theo tên trưởng phòng' })
    @IsOptional()
    @IsString()
    deptManagerName?: string;

    @ApiPropertyOptional({ description: 'Tìm theo tên trưởng phòng cấp cap' })
    @IsOptional()
    @IsString()
    seniorDeptManagerName?: string;


    @ApiPropertyOptional({ description: 'Lọc theo roleCode (Hỗ trợ cách nhau bằng dấu phẩy)' })
    @IsOptional()
    @IsString()
    roleCode?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    managerId?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    deptManagerId?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    seniorDeptManagerId?: string;

}