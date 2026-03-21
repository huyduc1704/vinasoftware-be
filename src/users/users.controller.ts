import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiOperation({ summary: 'Lấy danh sách tài khoản ADMIN (Nhân viên)' })
  @Roles('ADMIN')
  @Get('admins')
  findAllAdmins() {
    return this.usersService.findAllAdmins();
  }

  @ApiOperation({ summary: 'Lấy danh sách tài khoản KHÁCH (Customer)' })
  @Roles('ADMIN')
  @Get('guests')
  findAllGuests() {
    return this.usersService.findAllGuests();
  }

  @ApiOperation({ summary: 'Lấy chi tiết tài khoản' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Cập nhật tài khoản (Kích hoạt/Khóa)' })
  @Roles('ADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Xóa tài khoản' })
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
