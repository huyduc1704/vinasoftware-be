import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseGuards, Req } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { UpdateAssigneesDto } from './dto/assignees.dto';
import { CreateRenewalDto } from './dto/renewal.dto';
import { CreateNoteDto } from './dto/note.dto';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Assuming JwtAuthGuard path based on common structure

@ApiTags('Quản lý hợp đồng')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) { }

  @ApiOperation({ summary: 'Tạo mới hợp đồng (Cá nhân hoặc Share)' })
  @Post()
  create(@Body() createContractDto: CreateContractDto, @Req() req: any) {
    const userId = req.user.id;
    return this.contractsService.create(createContractDto, userId);
  }

  @ApiOperation({ summary: 'Lấy danh sách hợp đồng' })
  @ApiQuery({ name: 'type', required: false, description: 'Lọc theo loại (WEB, HOSTING...)' })
  @ApiQuery({ name: 'status', required: false, description: 'Lọc theo trạng thái (ACTIVE, DELETED...)' })
  @ApiQuery({ name: 'employeeId', required: false, description: 'Lọc theo nhân viên phụ trách' })
  @Get()
  findAll(
    @Query('type') type?: string,
    @Query('status') status?: string,
    @Query('employeeId') employeeId?: string,
  ) {
    return this.contractsService.findAll(type, status, employeeId);
  }

  @ApiOperation({ summary: 'Xem chi tiết 1 hợp đồng' })
  @ApiParam({ name: 'id', description: 'ID hợp đồng' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractsService.findOne(id);
  }

  @ApiOperation({ summary: 'Cập nhật thông tin chung (Tiền, phiếu thu, trạng thái...)' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractDto: UpdateContractDto) {
    return this.contractsService.update(id, updateContractDto);
  }

  @ApiOperation({ summary: 'Quản lý người phụ trách (Assign / Share)' })
  @Put(':id/assignees')
  updateAssignees(@Param('id') id: string, @Body() updateAssigneesDto: UpdateAssigneesDto) {
    return this.contractsService.updateAssignees(id, updateAssigneesDto);
  }

  @ApiOperation({ summary: 'Xóa mềm hợp đồng' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractsService.remove(id);
  }

  @ApiOperation({ summary: 'Thêm lịch sử gia hạn' })
  @Post(':id/renewals')
  addRenewal(@Param('id') id: string, @Body() createRenewalDto: CreateRenewalDto, @Req() req: any) {
    const userId = req.user.id;
    return this.contractsService.addRenewal(id, createRenewalDto, userId);
  }

  @ApiOperation({ summary: 'Thêm ghi chú chăm sóc khách hàng' })
  @Post(':id/notes')
  addNote(@Param('id') id: string, @Body() createNoteDto: CreateNoteDto, @Req() req: any) {
    const userId = req.user.id;
    return this.contractsService.addNote(id, createNoteDto, userId);
  }
}
