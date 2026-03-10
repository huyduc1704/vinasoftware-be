import { Injectable, NotFoundException } from '@nestjs/common';
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
    const { employees, ...contractData } = createContractDto;

    const contract = await this.prisma.contracts.create({
      data: {
        ...contractData,
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
    const { employees, ...updateData } = updateContractDto;

    // Parse dates if they are provided in the update payload
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
    // Transaction to safely delete and re-create assignees
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
