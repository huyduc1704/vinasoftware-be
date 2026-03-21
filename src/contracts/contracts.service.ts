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
    const { employees, customerData, services, paymentStages, ...contractData } = createContractDto;

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

    // Fix empty strings for foreign keys
    const createData: any = { ...contractData };
    if (createData.managerId === '') createData.managerId = null;
    if (createData.deptManagerId === '') createData.deptManagerId = null;
    if (createData.seniorDeptManagerId === '') createData.seniorDeptManagerId = null;
    if (createData.regionCode === '') createData.regionCode = null;

    const contract = await this.prisma.contracts.create({
      data: {
        ...createData,
        customerId: resolvedCustomerId,
        signDate: contractData.signDate ? new Date(contractData.signDate) : null,
        submissionDate: contractData.submissionDate ? new Date(contractData.submissionDate) : null,
        createdById: userId,

        // Relational Create: ContractEmployee
        contractEmployees: {
          create: employees?.map(emp => ({
            employeeId: emp.employeeId,
            isMain: emp.isMain ?? true,
          })) || [],
        },
        // Relational Crate: Services
        services: services && services.length > 0 ? {
          create: services.map(svc => ({
            type: svc.type,
            name: svc.name,
            price: svc.price,
            vatRate: svc.vatRate,
            vatAmount: svc.vatAmount,
            total: svc.totalAmount,
            domainInfo: svc.domainInfo ? {
              create: {
                domainName: svc.domainInfo.domainName,
                provider: svc.domainInfo.provider,
                expiryDate: svc.domainInfo.expiryDate ? new Date(svc.domainInfo.expiryDate) : null
              }
            } : undefined,
            hostingInfo: svc.hostingInfo ? {
              create: {
                duration: svc.hostingInfo.duration,
                storage: svc.hostingInfo.storage
              }
            } : undefined,
          }))
        } : undefined,

        // Relational Create: PaymentStages
        paymentStages: paymentStages && paymentStages.length > 0 ? {
          create: paymentStages.map((ps, index) => ({
            name: ps.name,
            order: ps.order ?? index + 1,
            amount: ps.amount,
            paidDate: ps.paidDate ? new Date(ps.paidDate) : null,
          }))
        } : undefined,
      },

      // Response full data after create for FE render
      include: {
        contractEmployees: {
          include: { employee: true }
        },
        services: {
          include: { domainInfo: true, hostingInfo: true }
        },
        paymentStages: true,
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
      whereClause.status = { not: 'CANCELLED' };
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
        services: {
          include: {
            domainInfo: true,
            hostingInfo: true,
          }
        },
        paymentStages: true,
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
        services: {
          include: {
            domainInfo: true,
            hostingInfo: true,
          }
        },
        paymentStages: true,
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
      services,
      paymentStages,
      // @ts-ignore - các field FE gửi lên nhưng không tồn tại trong schema
      employeeId, displayEmpCode, displayEmpName, displayDept, displayRegion,
      ...updateData
    } = updateContractDto as any;

    const dataToUpdate: any = { ...updateData };
    if (updateData.signDate) {
      dataToUpdate.signDate = new Date(updateData.signDate);
    }
    if (updateData.submissionDate) {
      dataToUpdate.submissionDate = new Date(updateData.submissionDate);
    }

    // Sanitize Empty Strings
    if (dataToUpdate.managerId === '') dataToUpdate.managerId = null;
    if (dataToUpdate.deptManagerId === '') dataToUpdate.deptManagerId = null;
    if (dataToUpdate.seniorDeptManagerId === '') dataToUpdate.seniorDeptManagerId = null;
    if (dataToUpdate.regionCode === '') dataToUpdate.regionCode = null;

    // Use Transaction to delete Old for safety Create New


    return this.prisma.$transaction(async (tx) => {
      // 1. Update original field of Contract (Total, Vat, Name ....)
      const updatedContract = await tx.contracts.update({
        where: { id },
        data: dataToUpdate,
      });

      // If FE send services array, Delete Old and Create New
      if (services && Array.isArray(services)) {
        // Find existing services to delete their children first (Domain, Hosting) to prevent FK constraint
        const existingServices = await tx.service.findMany({ where: { contractId: id }, select: { id: true } });
        const serviceIds = existingServices.map(s => s.id);
        
        if (serviceIds.length > 0) {
          await tx.domain.deleteMany({ where: { serviceId: { in: serviceIds } } });
          await tx.hosting.deleteMany({ where: { serviceId: { in: serviceIds } } });
          await tx.service.deleteMany({ where: { id: { in: serviceIds } } });
        }

        for (const svc of services) {
          await tx.service.create({
            data: {
              contractId: id,
              type: svc.type,
              name: svc.name,
              price: svc.price,
              vatRate: svc.vatRate,
              vatAmount: svc.vatAmount,
              total: svc.totalAmount,
              domainInfo: svc.domainInfo ? {
                create: {
                  domainName: svc.domainInfo.domainName,
                  provider: svc.domainInfo.provider,
                  expiryDate: svc.domainInfo.expiryDate ? new
                    Date(svc.domainInfo.expiryDate) : null
                }
              } : undefined,
              hostingInfo: svc.hostingInfo ? {
                create: {
                  duration: svc.hostingInfo.duration,
                  storage: svc.hostingInfo.storage
                }
              } : undefined,
            }
          });
        }
      }

      // If FE send paymentStages array, Delete Old and Create New
      if (paymentStages && Array.isArray(paymentStages)) {
        await tx.paymentStage.deleteMany({ where: { contractId: id } });

        if (paymentStages.length > 0) {
          await tx.paymentStage.createMany({
            data: paymentStages.map((ps, index) => ({
              contractId: id,
              name: ps.name,
              order: ps.order ?? index + 1,
              amount: ps.amount,
              paidDate: ps.paidDate ? new Date(ps.paidDate) : null
            }))
          });
        }
      }

      // Return Data Final for Client
      return tx.contracts.findUnique({
        where: { id },
        include: { services: { include: { domainInfo: true, hostingInfo: true } }, paymentStages: true }
      });
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
      data: { status: 'CANCELLED' },
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
