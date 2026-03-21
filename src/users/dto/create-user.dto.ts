import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user001' })
  username: string;

  @ApiProperty({ example: 'password123', required: false })
  password?: string;

  @ApiProperty({ enum: ['ADMIN', 'GUEST'], default: 'GUEST' })
  account_type?: string;

  @ApiProperty({ default: true })
  isActive?: boolean;

  @ApiProperty({ required: false })
  employeeId?: string;

  @ApiProperty({ required: false })
  customerId?: string;
}
