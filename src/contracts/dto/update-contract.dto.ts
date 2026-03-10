import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateContractDto extends PartialType(CreateContractDto) {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    status?: string;
}
