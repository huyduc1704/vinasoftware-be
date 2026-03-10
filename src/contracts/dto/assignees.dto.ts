import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export class AssigneeItemDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    employeeId: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isMain?: boolean;
}

export class UpdateAssigneesDto {
    @ApiProperty({ type: [AssigneeItemDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AssigneeItemDto)
    employees: AssigneeItemDto[];
}
