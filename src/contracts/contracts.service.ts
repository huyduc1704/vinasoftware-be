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
    const { employees, customerData, services, receipts, receiptCode, ...contractData } = createContractDto;

    // Xử lý khách hàng: dùng ID có sẵn, tìm theo số điện thoại hoặc tạo mới
    let resolvedCustomerId = contractData.customerId;

    if (!resolvedCustomerId) {
      if (!customerData) {
        throw new BadRequestException('Vui lòng cung cấp customerId hoặc thông tin khách hàng mới (customerData).');
      }

      // Kiểm tra xem khách hàng đã tồn tại qua số điện thoại chưa
      if (customerData.phone) {
        const existingCustomer = await this.prisma.customer.findFirst({
          where: { phone: customerData.phone }
        });

        if (existingCustomer) {
          // Nếu tìm thấy, cập nhật thông tin mới nhất và dùng ID cũ
          await this.prisma.customer.update({
            where: { id: existingCustomer.id },
            data: customerData
          });
          resolvedCustomerId = existingCustomer.id;
        }
      }

      // Nếu vẫn chưa có ID (không tìm thấy theo phone hoặc không có phone), tạo mới
      if (!resolvedCustomerId) {
        const newCustomer = await this.prisma.customer.create({ data: customerData });
        resolvedCustomerId = newCustomer.id;
      }
    }

    // Fix empty strings for foreign keys & sanitized data
    const createData: any = { ...contractData };
    delete createData.receiptCode; // Đảm bảo tuyệt đối không chui vào bảng Contracts

    if (createData.managerId === '') createData.managerId = null;
    if (createData.deptManagerId === '') createData.deptManagerId = null;
    if (createData.seniorDeptManagerId === '') createData.seniorDeptManagerId = null;
    if (createData.regionCode === '') createData.regionCode = null;

    // Resolving Employee IDs if frontend sends EmployeeCode
    const resolvedEmployees: { employeeId: string; isMain: boolean }[] = [];
    if (employees && employees.length > 0) {
      const allEmps = await this.prisma.employee.findMany({
        where: {
          OR: [
            { id: { in: employees.map(e => e.employeeId) } },
            { employeeCode: { in: employees.map(e => e.employeeId) } }
          ]
        }
      });
      for (const empReq of employees) {
        const found = allEmps.find(e => e.id === empReq.employeeId || e.employeeCode === empReq.employeeId);
        if (found) {
          resolvedEmployees.push({ employeeId: found.id, isMain: empReq.isMain ?? true });
        } else {
          // BÁO LỖI LUÔN NẾU SAI MÃ NHÂN VIÊN
          throw new BadRequestException(`Không tìm thấy nhân viên có mã hoặc ID là: ${empReq.employeeId}`);
        }
      }
    }

    const hasRealData = (s: any) => {
      if (Number(s.totalAmount) > 0 || Number(s.price) > 0) return true;
      if (s.domainInfo && s.domainInfo.domainName) return true;
      if (s.hostingInfo && (s.hostingInfo.duration || s.hostingInfo.storage)) return true;
      return false;
    };
    const filteredServices = services?.filter(hasRealData) || [];

    // TỰ ĐỘNG TÍNH TOÁN TIỀN NẾU FRONTEND KHÔNG GỬI
    let totalValue = Number(createData.totalAmount) || 0;
    if (!totalValue && filteredServices.length > 0) {
      totalValue = filteredServices.reduce((sum, s) => sum + (Number(s.totalAmount) || Number(s.price) || 0), 0);
    }
    let paidValue = Number(createData.paidAmount) || 0;
    if (!paidValue && receipts) {
      paidValue = receipts.reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
    }
    const remainingValue = totalValue - paidValue;

    const contract = await this.prisma.contracts.create({
      data: {
        ...createData,
        totalAmount: totalValue,
        paidAmount: paidValue,
        remainingAmount: remainingValue,
        customerId: resolvedCustomerId,
        signDate: contractData.signDate ? new Date(contractData.signDate) : null,
        submissionDate: contractData.submissionDate ? new Date(contractData.submissionDate) : null,
        createdById: userId,

        // Relational Create: ContractEmployee
        contractEmployees: {
          create: resolvedEmployees.map(emp => ({
            employeeId: emp.employeeId,
            isMain: emp.isMain ?? true,
          })) || [],
        },
        // Relational Crate: Services
        services: filteredServices.length > 0 ? {
          create: filteredServices.map(svc => ({
            id: svc.id,
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

        // Relational Create: Receipts
        receipts: receipts && receipts.length > 0 ? {
          create: receipts.map((ps: any, index: number) => ({
            serviceId: ps.serviceId || null,
            name: ps.name,
            order: ps.order ?? index + 1,
            amount: ps.amount,
            receiptCode: ps.receiptCode || receiptCode || null,
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
        receipts: true,
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
        receipts: true,
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
        receipts: true,
        renewals: true,
        cskhNotes: {
          include: {
            creator: true,
          }
        },
        files: true,
      },
    });

    if (!contract) throw new NotFoundException('Không tìm thấy hợp đồng');

    // Inject receiptCode at contract level (derived from receipts, since it's stored there)
    const receiptCode = (contract as any).receipts?.find((r: any) => r.receiptCode)?.receiptCode || null;
    return { ...contract, receiptCode };
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    // Lọc bỏ các field không thuộc schema Contracts để tránh lỗi Prisma
    const {
      employees,
      customerData,
      services,
      receipts,
      receiptCode, // Destructure để tránh leak vào bảng Contracts
      id: contractId,
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


    // Resolving Employee IDs if frontend sends EmployeeCode
    let resolvedEmployees: { employeeId: string; isMain: boolean }[] | undefined = undefined;
    if (employees && Array.isArray(employees)) {
      const allEmps = await this.prisma.employee.findMany({
        where: {
          OR: [
            { id: { in: employees.map(e => e.employeeId) } },
            { employeeCode: { in: employees.map(e => e.employeeId) } }
          ]
        }
      });
      resolvedEmployees = [];
      for (const empReq of employees) {
        const found = allEmps.find(e => e.id === empReq.employeeId || e.employeeCode === empReq.employeeId);
        if (found) {
          resolvedEmployees.push({ employeeId: found.id, isMain: empReq.isMain ?? true });
        }
      }
    }

    // Filter valid services — same logic as create
    const hasRealData = (s: any) => {
      if (Number(s.totalAmount) > 0 || Number(s.price) > 0) return true;
      if (s.domainInfo && s.domainInfo.domainName) return true;
      if (s.hostingInfo && (s.hostingInfo.duration || s.hostingInfo.storage)) return true;
      return false;
    };
    const filteredServices = services ? services.filter(hasRealData) : undefined;

    // Calculate totals
    let totalValue = Number(dataToUpdate.totalAmount);
    if (filteredServices) {
      totalValue = filteredServices.reduce((sum, s) => sum + (Number(s.totalAmount) || Number(s.price) || 0), 0);
    }
    let paidValue = Number(dataToUpdate.paidAmount);
    if (receipts) {
      paidValue = receipts.reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
    }

    return this.prisma.$transaction(async (tx) => {
      // 1. Update original field of Contract (Total, Vat, Name ....)
      const updatedContract = await tx.contracts.update({
        where: { id },
        data: {
          ...dataToUpdate,
          totalAmount: totalValue || undefined,
          paidAmount: paidValue || undefined,
          remainingAmount: (totalValue !== undefined && paidValue !== undefined) ? (totalValue - paidValue) : undefined,
        },
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

        for (const svc of filteredServices) {
          await tx.service.create({
            data: {
              id: svc.id,
              contractId: id,
              type: svc.type,
              name: svc.name,
              price: svc.price,
              vatRate: svc.vatRate,
              vatAmount: svc.vatAmount,
              total: svc.totalAmount ?? svc.total,
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

      // If FE send receipts array, Delete Old and Create New
      if (receipts && Array.isArray(receipts)) {
        // Lấy lại các đợt thu cũ để bảo lưu (backup) ngày paidDate đề phòng UI không gửi lên
        const oldReceipts = await tx.receipt.findMany({ where: { contractId: id } });

        await tx.receipt.deleteMany({ where: { contractId: id } });

        if (receipts.length > 0) {
          await tx.receipt.createMany({
            data: receipts.map((ps: any, index: number) => {
              const oldR = oldReceipts.find(r => r.name === ps.name);
              const fallbackDate = oldR ? oldR.paidDate : null;

              return {
                contractId: id,
                serviceId: ps.serviceId || oldR?.serviceId || null,
                name: ps.name,
                order: ps.order ?? index + 1,
                amount: ps.amount,
                receiptCode: ps.receiptCode || receiptCode || oldR?.receiptCode || null,
                paidDate: ps.paidDate ? new Date(ps.paidDate) : fallbackDate
              };
            })
          });
        }
      }

      // 4. Update Employees if provided
      if (resolvedEmployees) {
        await tx.contract_Employees.deleteMany({ where: { contractId: id } });
        await tx.contract_Employees.createMany({
          data: resolvedEmployees.map(emp => ({
            contractId: id,
            employeeId: emp.employeeId,
            isMain: emp.isMain,
          }))
        });
      }

      // Return Data Final for Client
      return tx.contracts.findUnique({
        where: { id },
        include: { services: { include: { domainInfo: true, hostingInfo: true } }, receipts: true }
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
