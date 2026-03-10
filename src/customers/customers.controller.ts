import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Quản lý khách hàng')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }


  @ApiOperation({ summary: 'Thêm khách hàng mới' })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @ApiOperation({ summary: 'Lấy danh sách khách hàng' })
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @ApiOperation({ summary: 'Lấy thông tin khách hàng theo ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @ApiOperation({ summary: 'Cập nhật thông tin khách hàng' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @ApiOperation({ summary: 'Xóa khách hàng' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
