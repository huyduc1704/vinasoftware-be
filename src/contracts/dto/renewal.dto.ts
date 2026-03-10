import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRenewalDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    renewalDate: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    note?: string;
}
