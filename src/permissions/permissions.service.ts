import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPermissionDto: CreatePermissionDto) {
    const existing = await this.prisma.permissions.findUnique({
      where: {
        code: createPermissionDto.code
      },
    });

    if (existing) {
      throw new ConflictException('Mã Permission code đã tồn tại');
    }

    return this.prisma.permissions.create({
      data: createPermissionDto
    })
  }

  async findAll() {
    return this.prisma.permissions.findMany({
      orderBy: { module: 'asc' }
    });
  }

  async findOne(id: string) {
    const permission = await this.prisma.permissions.findUnique({
      where: { id },
    });
    if (!permission) throw new NotFoundException('Không tìm thấy Permission');
    return permission;
  }

  async update(id: string, updatePermissionDto: UpdatePermissionDto) {
    await this.findOne(id);
    return this.prisma.permissions.update({
      where: { id },
      data: updatePermissionDto,
    })
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.permissions.delete({
      where: { id },
    })
  }
}
