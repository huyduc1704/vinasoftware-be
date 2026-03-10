import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsOptional, IsBoolean, IsDateString, IsString } from 'class-validator'

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @ApiProperty({ example: true, description: 'Trang thai hoat dong' })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiProperty({ example: '2025-01-01T00:00:00Z', description: 'Ngày nghỉ việc' })
    @IsOptional()
    @IsDateString()
    leaveDate?: string;
}
