import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async findAllAdmins() {
    return this.prisma.user.findMany({
      where: {
        OR: [
          { employeeId: { not: null } },
          { account_type: 'ADMIN' }
        ]
      },
      include: {
        employee: true,
        usersRoles: {
          include: { role: true }
        },
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  //Lấy danh sách tài khoản khách (Customer)
  async findAllGuests() {
    return this.prisma.user.findMany({
      where: {
        OR: [
          { customerId: { not: null } },
          { account_type: 'GUEST' }
        ]
      },
      include: {
        customer: true,
        usersRoles: {
          include: { role: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  }
  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        employee: true,
        customer: true,
        usersRoles: {
          include: { role: true }
        }
      }
    });

    if (!user) throw new NotFoundException('Không tìm thấy tài khoản');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
