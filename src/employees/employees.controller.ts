import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GetEmployeesFilterDto } from './dto/get-employees-filter.dto';

@ApiTags('Quản lý nhân sự')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @ApiOperation({ summary: 'Lấy thông tin và tìm kiếm nhân viên các cấp' })
  @Get()
  getAllEmployees(@Query() filterDto: GetEmployeesFilterDto) {
    return this.employeesService.getAllEmployees(filterDto);
  }

  @ApiOperation({ summary: 'Thông tin chi tiết của 1 nhân viên' })
  @ApiParam({ name: 'id', description: 'ID của nhân sự' })
  @Get(':id')
  getEmployeeById(@Param('id') id: string) {
    return this.employeesService.getEmployeeById(id);
  }

  @ApiOperation({ summary: 'Tìm nhân viên qua Mã nhân viên' })
  @Get('code/:code')
  getEmployeeByCode(@Param('code') code: string) {
    return this.employeesService.getEmployeeByCode(code);
  };

  @ApiOperation({ summary: 'Thêm nhân viên mới' })
  @Post()
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @ApiOperation({ summary: 'Chỉnh sửa thông tin nhân viên' })
  @ApiParam({ name: 'id', description: 'ID của nhân viên' })
  @Patch(':id')
  updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.updateEmployee(id, updateEmployeeDto);
  }

  @ApiOperation({ summary: 'Xóa nhân viên' })
  @ApiParam({ name: 'id', description: 'ID của nhân viên' })
  @Delete(':id')
  deleteEmployee(@Param('id') id: string) {
    return this.employeesService.deleteEmployee(id);
  }


} 
