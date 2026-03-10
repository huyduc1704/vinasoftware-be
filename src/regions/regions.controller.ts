import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiBearerAuth, ApiOperation, ApiTags, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Quản lý khu vực')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) { }

  @ApiOperation({ summary: 'Tạo mới khu vực' })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @ApiOperation({ summary: 'Lấy danh sách tất cả khu vực' })
  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @ApiOperation({ summary: 'Tìm thông tin 1 khu vực theo ID' })
  @ApiParam({ name: 'id', description: 'ID của khu vực' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(id);
  }

  @ApiOperation({ summary: 'Chỉnh sửa thông tin khu vực' })
  @ApiParam({ name: 'id', description: 'ID của khu vực' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionsService.update(id, updateRegionDto);
  }

  @ApiOperation({ summary: 'Xóa khu vực' })
  @ApiParam({ name: 'id', description: 'ID của khu vực' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionsService.remove(id);
  }
}

