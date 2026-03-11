import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity {
    @ApiProperty()
    id: string;

    @ApiProperty()
    employeeCode: string;

    @ApiProperty()
    fullName: string;

    @Exclude()
    password: string;

    @ApiProperty({ required: false, nullable: true })
    email: string | null;

    @ApiProperty({ required: false, nullable: true })
    gender: string | null;

    @ApiProperty({ required: false, nullable: true })
    dob: Date | null;

    @ApiProperty({ required: false, nullable: true })
    address: string | null;

    @ApiProperty({ default: 'ADMIN' })
    account_type: string;

    @ApiProperty({ required: false, nullable: true })
    phone: string | null;

    @ApiProperty()
    joinDate: Date;

    @ApiProperty({ required: false, nullable: true })
    leaveDate: Date | null;

    @ApiProperty({ default: true })
    isActive: boolean;

    @ApiProperty({ required: false, nullable: true })
    regionCode: string | null;

    @ApiProperty({ required: false, nullable: true })
    seniorDeptManagerId: string | null;

    @ApiProperty({ required: false, nullable: true })
    deptManagerId: string | null;

    @ApiProperty({ required: false, nullable: true })
    managerId: string | null;

    @ApiProperty()
    roleId: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}
