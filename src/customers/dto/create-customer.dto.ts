import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    representative: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    taxCode?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    dob?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    address?: string;
}
