import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegionsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createRegionDto: CreateRegionDto) {
    const existing = await this.prisma.region.findUnique({
      where: { code: createRegionDto.code },
    });
    if (existing) {
      throw new BadRequestException('Mã vùng đã tồn tại');
    }

    return this.prisma.region.create({
      data: createRegionDto,
    });
  }

  findAll() {
    return this.prisma.region.findMany({
      orderBy: { code: 'asc' }
    });
  }

  async findOne(id: string) {
    const region = await this.prisma.region.findUnique({
      where: { id },
    });
    if (!region) throw new NotFoundException('Không tìm thấy vùng');
    return region;
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    const region = await this.prisma.region.findUnique({ where: { id } });
    if (!region) throw new NotFoundException('Không tìm thấy vùng');

    return this.prisma.region.update({
      where: { id },
      data: updateRegionDto,
    });
  }

  async remove(id: string) {
    const region = await this.prisma.region.findUnique({ where: { id } });
    if (!region) throw new NotFoundException('Không tìm thấy vùng');

    // Since Region is now mandatory for Employees, we cannot delete a Region that is currently assigned to an Employee.
    const employeesInRegion = await this.prisma.employee.findFirst({
      where: {
        employeeRegions: {
          some: { regionCode: region.code }
        }
      }
    });

    if (employeesInRegion) {
      throw new BadRequestException('Không thể xoá khu vực này vì đang có nhân viên phụ trách. Vui lòng chuyển nhân viên sang khu vực khác trước.');
    }

    return this.prisma.region.delete({
      where: { id },
    });
  }
}

