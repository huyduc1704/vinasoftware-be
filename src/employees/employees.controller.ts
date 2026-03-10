import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Quản lý nhân sự')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @ApiOperation({ summary: 'Lấy thông tin của nhân viên các cấp' })
  @ApiQuery({ name: 'roleCode', required: false, description: 'Lọc theo Chức danh công việc (roleCode của Employee)' })
  @ApiQuery({ name: 'areaManagerId', required: false, description: 'Lọc theo Trưởng khu vực (Area Manager)' })
  @ApiQuery({ name: 'seniorDeptManagerId', required: false, description: 'Lọc theo Trưởng phòng cấp cao' })
  @ApiQuery({ name: 'deptManagerId', required: false, description: 'Lọc theo Trưởng phòng' })
  @ApiQuery({ name: 'managerId', required: false, description: 'Lọc theo Quản lý trực tiếp' })
  @Get()
  getAllEmployees(
    @Query('roleCode') roleCode?: string,
    @Query('areaManagerId') areaManagerId?: string,
    @Query('seniorDeptManagerId') seniorDeptManagerId?: string,
    @Query('deptManagerId') deptManagerId?: string,
    @Query('managerId') managerId?: string,
  ) {
    return this.employeesService.getAllEmployees(roleCode, areaManagerId, seniorDeptManagerId, deptManagerId, managerId);
  }

  @ApiOperation({ summary: 'Thông tin chi tiết của 1 nhân viên' })
  @ApiParam({ name: 'id', description: 'ID của nhân sự' })
  @Get(':id')
  getEmployeeById(@Param('id') id: string) {
    return this.employeesService.getEmployeeById(id);
  }

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
