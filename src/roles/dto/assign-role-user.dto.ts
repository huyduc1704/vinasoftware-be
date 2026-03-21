import { IsNotEmpty, IsString } from 'class-validator';

export class AssignRoleToUserDto {
  @IsNotEmpty()
  @IsString()
  roleCode: string;
}
