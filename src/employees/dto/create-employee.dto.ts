import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, IsDateString, IsOptional } from "class-validator";

export class CreateEmployeeDto {
    @ApiProperty({ example: 'EMP002' })
    @IsNotEmpty()
    @IsString()
    employeeCode: string;

    @ApiProperty({ example: 'MANAGER', description: 'Chức danh của nhân viên' })
    @IsOptional()
    @IsString()
    roleCode?: string;

    @ApiProperty({ example: 'Nguyen Van B' })
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty({ example: '12345678', required: false })
    @IsOptional()
    @IsString()
    password?: string;

    @ApiProperty({ example: 'nhanvien@example.com' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ example: '1995-01-01T00:00:00Z' })
    @IsOptional()
    @IsDateString()
    dob?: string;

    @ApiProperty({ example: '123 Đường Điện Biên Phủ, HCM' })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty({ example: '0901234567' })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ example: '2023-01-01T00:00:00Z' })
    @IsOptional()
    @IsDateString()
    joinDate?: string;

    @ApiProperty({ description: 'ID của Role được gán (Nếu cấp quyền đăng nhập)', required: false })
    @IsOptional()
    @IsString()
    roleId?: string;

    @ApiProperty({ description: 'Mã Khu vực (Vùng)', required: false, type: [String] })
    @IsOptional()
    @IsString({ each: true })
    regionCode?: string | string[];

    @ApiProperty({ description: 'ID cua nguoi quan ly truc tiep' })
    @IsOptional()
    @IsString()
    managerId?: string;

    @ApiProperty({ description: 'ID truong phong', required: false })
    @IsOptional()
    @IsString()
    deptManagerId?: string;

    @ApiProperty({ description: 'ID Truong khu vuc (Area Manager)', required: false })
    @IsOptional()
    @IsString()
    areaManagerId?: string;

    @ApiProperty({ description: 'ID truong phong cap cap', required: false })
    @IsOptional()
    @IsString()
    seniorDeptManagerId?: string;
}