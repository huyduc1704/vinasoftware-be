import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateAssigneesDto } from './dto/assignees.dto';
import { CreateRenewalDto } from './dto/renewal.dto';
import { CreateNoteDto } from './dto/note.dto';

@Injectable()
export class ContractsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createContractDto: CreateContractDto, userId: string) {
    if (!userId) throw new UnauthorizedException('Bạn chưa đăng nhập. Vui lòng đăng nhập để tạo hợp đồng.');
    const { employees, customerData, ...contractData } = createContractDto;

    // Xử lý khách hàng: dùng ID có sẵn hoặc tạo mới
    let resolvedCustomerId = contractData.customerId;

    if (!resolvedCustomerId) {
      if (!customerData) {
        throw new BadRequestException('Vui lòng cung cấp customerId hoặc thông tin khách hàng mới (customerData).');
      }
      // Tạo khách hàng mới và lấy ID
      const newCustomer = await this.prisma.customer.create({ data: customerData });
      resolvedCustomerId = newCustomer.id;
    }

    const contract = await this.prisma.contracts.create({
      data: {
        ...contractData,
        customerId: resolvedCustomerId,
        signDate: contractData.signDate ? new Date(contractData.signDate) : null,
        submissionDate: contractData.submissionDate ? new Date(contractData.submissionDate) : null,
        createdById: userId,
        contractEmployees: {
          create: employees?.map(emp => ({
            employeeId: emp.employeeId,
            isMain: emp.isMain ?? true,
          })) || [],
        },
      },
      include: {
        contractEmployees: {
          include: {
            employee: true
          }
        },
      },
    });

    return contract;
  }

  async findAll(type?: string, status?: string, employeeId?: string) {
    const whereClause: any = {};

    if (type) {
      whereClause.type = type;
    }

    if (status) {
      whereClause.status = status;
    } else {
      whereClause.status = { not: 'DELETED' };
    }

    if (employeeId) {
      whereClause.contractEmployees = {
        some: {
          employeeId,
        },
      };
    }

    return this.prisma.contracts.findMany({
      where: whereClause,
      include: {
        customer: true,
        contractEmployees: {
          include: {
            employee: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const contract = await this.prisma.contracts.findUnique({
      where: { id },
      include: {
        customer: true,
        contractEmployees: {
          include: {
            employee: true,
          },
        },
        renewals: true,
        cskhNotes: {
          include: {
            creator: true,
          }
        },
        files: true,
      },
    });

    if (!contract) {
      throw new NotFoundException(`Contract with ID ${id} not found`);
    }

    return contract;
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    // Lọc bỏ các field không thuộc schema Contracts để tránh lỗi Prisma
    const {
      employees,
      customerData,
      // @ts-ignore - các field FE gửi lên nhưng không tồn tại trong schema
      employeeId,
      displayEmpCode,
      displayEmpName,
      displayDept,
      displayRegion,
      ...updateData
    } = updateContractDto as any;

    const dataToUpdate: any = { ...updateData };
    if (updateData.signDate) {
      dataToUpdate.signDate = new Date(updateData.signDate);
    }
    if (updateData.submissionDate) {
      dataToUpdate.submissionDate = new Date(updateData.submissionDate);
    }

    return this.prisma.contracts.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  async updateAssignees(id: string, updateAssigneesDto: UpdateAssigneesDto) {
    return this.prisma.$transaction(async (prisma) => {
      // Delete existing
      await prisma.contract_Employees.deleteMany({
        where: { contractId: id },
      });

      // Update and create new
      return prisma.contracts.update({
        where: { id },
        data: {
          contractEmployees: {
            create: updateAssigneesDto.employees.map(emp => ({
              employeeId: emp.employeeId,
              isMain: emp.isMain ?? true,
            })),
          },
        },
        include: {
          contractEmployees: {
            include: {
              employee: true
            }
          }
        }
      });
    });
  }

  async remove(id: string) {
    return this.prisma.contracts.update({
      where: { id },
      data: { status: 'DELETED' },
    });
  }

  async addRenewal(id: string, createRenewalDto: CreateRenewalDto, userId: string) {
    return this.prisma.contract_Renewals.create({
      data: {
        contractId: id,
        renewalDate: new Date(createRenewalDto.renewalDate),
        note: createRenewalDto.note,
        processedBy: userId,
      },
    });
  }

  async addNote(id: string, createNoteDto: CreateNoteDto, userId: string) {
    return this.prisma.customer_Care_Notes.create({
      data: {
        contractId: id,
        content: createNoteDto.content,
        createdById: userId,
      },
    });
  }
}
