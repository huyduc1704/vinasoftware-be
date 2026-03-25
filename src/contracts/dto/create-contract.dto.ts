import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContractType, ServiceType } from "@prisma/client";

// DTO cho DomainInfo & Hosting Info
export class DomainInfoDto {
    @IsString() domainName: string;
    @IsOptional() @IsString() provider?: string;
    @IsOptional() @IsString() expiryDate?: string;
}

export class HostingInfoDto {
    @IsOptional() @IsString() duration?: string;
    @IsOptional() @IsString() storage?: string;
}

// DTO cho Service
export class ContractServiceDto {
    @IsOptional() @IsString() id?: string;
    @IsEnum(ServiceType) type: ServiceType;
    @IsString() name: string;
    @IsOptional() @IsNumber() price?: number;
    @IsOptional() @IsNumber() vatRate?: number;
    @IsOptional() @IsNumber() vatAmount?: number;
    @IsOptional() @IsNumber() totalAmount?: number;

    @IsOptional() @ValidateNested() @Type(() => DomainInfoDto)
    domainInfo?: DomainInfoDto;
    @IsOptional() @ValidateNested() @Type(() => HostingInfoDto)
    hostingInfo?: HostingInfoDto;
}

// DTO chi Receipt
export class ContractReceiptDto {
    @IsOptional() @IsString() serviceId?: string;
    @IsString() name: string;
    @IsOptional() @IsNumber() order?: number;
    @IsOptional() @IsNumber() amount?: number;
    @IsOptional() @IsString() receiptCode?: string;
    @IsOptional() @IsString() paidDate?: string;
}



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

    @ApiProperty({ description: 'Loại hợp đồng', enum: ContractType })
    @IsNotEmpty()
    @IsEnum(ContractType)
    type: ContractType;

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

    @ApiProperty({ description: 'Service lists', type: [ContractServiceDto] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractServiceDto)
    services?: ContractServiceDto[];

    @ApiProperty({ description: 'Receipts', type: [ContractReceiptDto] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractReceiptDto)
    receipts?: ContractReceiptDto[];
}
