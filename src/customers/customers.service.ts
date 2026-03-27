import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) { }

  async create(createCustomerDto: CreateCustomerDto) {
    if (createCustomerDto.phone) {
      const existing = await this.prisma.customer.findFirst({
        where: { phone: createCustomerDto.phone },
      });
      if (existing) {
        throw new BadRequestException('Số điện thoại này đã tồn tại trên hệ thống!');
      }
    }
    return this.prisma.customer.create({ data: createCustomerDto });
  }

  // Tìm kiếm theo số điện thoại
  async findByPhone(phone: string) {
    const customer = await this.prisma.customer.findFirst({
      where: { phone },
    });

    if (!customer) {
      throw new NotFoundException('Không tìm thấy khách hàng với số điện thoại này');
    }
    return customer;
  }

  findAll(search?: string) {
    const where = search ? {
      OR: [
        { fullName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ],
    } : {};
    return this.prisma.customer.findMany({
      where: where as Prisma.CustomerWhereInput,
      include: {
        contracts: {
          orderBy: { createdAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: {
        contracts: {
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!customer) {
      throw new NotFoundException('Không tìm thấy khách hàng');
    }
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    await this.findOne(id);

    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    // Kiểm tra xem khách hàng có hợp đồng liên kết không
    const contractCount = await this.prisma.contracts.count({ where: { customerId: id } });
    if (contractCount > 0) {
      throw new BadRequestException(`Không thể xóa khách hàng này vì đang có ${contractCount} hợp đồng liên kết. Vui lòng xóa hoặc chuyển hợp đồng trước.`);
    }

    return this.prisma.customer.delete({ where: { id } });
  }
}
