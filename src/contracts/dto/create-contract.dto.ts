import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDecimal, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class ContractEmployeeDto {
    @IsString() employeeId: string;
    @IsOptional() isMain?: boolean;
}

export class InlineCustomerDto {
    @ApiProperty({ description: 'Tên khách hàng / Tên công ty' })
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty({ required: false, description: 'Người đại diện' })
    @IsOptional()
    @IsString()
    representative?: string;

    @ApiProperty({ required: false, description: 'Mã số thuế' })
    @IsOptional()
    @IsString()
    taxCode?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    address?: string;
}

export class CreateContractDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    contractCode: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ description: 'WEB, HOSTING, DOMAIN, ADS_FB, ADS_GG,....' })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    receiptCode?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    signDate?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    submissionDate?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    totalAmount?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    vatAmount?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    vatRate?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    paidAmount?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    remainingAmount?: number;

    @ApiProperty({ required: false, type: Object })
    @IsOptional()
    serviceDetails?: any;

    @ApiProperty({ required: false, type: Object })
    @IsOptional()
    paymentStages?: any;

    @ApiProperty({ required: false, description: 'ID khách hàng đã có sẵn. Nếu không có thì truyền customerData để tạo mới.' })
    @IsOptional()
    @IsString()
    customerId?: string;

    @ApiProperty({ required: false, type: InlineCustomerDto, description: 'Thông tin khách hàng mới (dùng khi chưa có customerId)' })
    @IsOptional()
    @ValidateNested()
    @Type(() => InlineCustomerDto)
    customerData?: InlineCustomerDto;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    regionCode?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    managerId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    deptManagerId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    seniorDeptManagerId?: string;

    @ApiProperty({ type: [ContractEmployeeDto], description: 'Danh sách nhân viên phụ trách hợp đồng' })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractEmployeeDto)
    employees?: ContractEmployeeDto[];

}
