import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllEmployees(
    roleCode?: string,
    areaManagerId?: string,
    seniorDeptManagerId?: string,
    deptManagerId?: string,
    managerId?: string,
  ) {
    const whereCondition: any = {};

    if (roleCode) {
      whereCondition.roleCode = roleCode;
    }

    if (areaManagerId) {
      whereCondition.areaManagerId = areaManagerId;
    }

    if (seniorDeptManagerId) {
      whereCondition.seniorDeptManagerId = seniorDeptManagerId;
    }

    if (deptManagerId) {
      whereCondition.deptManagerId = deptManagerId;
    }

    if (managerId) {
      whereCondition.managerId = managerId;
    }

    return this.prisma.employee.findMany({
      where: whereCondition,
      include: {
        user: { include: { role: { select: { name: true, code: true } } } },
        employeeRegions: { include: { region: true } },
        manager: { select: { fullName: true, employeeCode: true } },
        deptManager: { select: { fullName: true, employeeCode: true } },
        seniorDeptManager: { select: { fullName: true, employeeCode: true } },
        areaManager: { select: { fullName: true, employeeCode: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async getEmployeeById(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        user: { include: { role: true } },
        employeeRegions: { include: { region: true } },
        manager: true,
        deptManager: true,
        seniorDeptManager: true,
        areaManager: true,
      }
    });

    if (!employee) throw new NotFoundException('Khong tim thay nhan vien');

    return employee;
  }

  async createEmployee(data: CreateEmployeeDto) {
    const { employeeCode, password, roleId, regionCode, roleCode, ...restData } = data;

    //check trung employeeCode
    const exist = await this.prisma.employee.findUnique({ where: { employeeCode } });
    if (exist) throw new BadRequestException('Ma nhan vien da ton tai');

    const createData: any = {
      ...restData,
      roleCode: roleCode || null,
      managerId: restData.managerId || null,
      deptManagerId: restData.deptManagerId || null,
      seniorDeptManagerId: restData.seniorDeptManagerId || null,
      areaManagerId: restData.areaManagerId || null,
      employeeCode,
    };

    if (regionCode) {
      const regions = Array.isArray(regionCode) ? regionCode : [regionCode];
      createData.employeeRegions = {
        create: regions.map(rc => ({
          regionCode: rc,
          isMain: true
        }))
      };
    }

    const newEmployee = await this.prisma.employee.create({
      data: createData,
    });

    // Automatically create a user account if login info is provided
    if (password && roleId) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      await this.prisma.user.create({
        data: {
          username: employeeCode,
          password: hashedPassword,
          employeeId: newEmployee.id,
          roleId: roleId,
        }
      });
    }

    return newEmployee;
  }

  async updateEmployee(id: string, data: UpdateEmployeeDto) {
    const employee = await this.prisma.employee.findUnique({ where: { id }, include: { user: true } });
    if (!employee) throw new NotFoundException('Khong tim thay nhan vien');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, roleId, employeeCode, regionCode, roleCode, ...employeeData } = data;

    const formattedData: any = {
      ...employeeData,
      roleCode: roleCode || undefined,
      managerId: employeeData.managerId === '' ? null : employeeData.managerId,
      deptManagerId: employeeData.deptManagerId === '' ? null : employeeData.deptManagerId,
      seniorDeptManagerId: employeeData.seniorDeptManagerId === '' ? null : employeeData.seniorDeptManagerId,
      areaManagerId: employeeData.areaManagerId === '' ? null : employeeData.areaManagerId,
    };

    if (regionCode) {
      const regions = Array.isArray(regionCode) ? regionCode : [regionCode];
      formattedData.employeeRegions = {
        deleteMany: {},
        create: regions.map(rc => ({
          regionCode: rc,
          isMain: true
        }))
      };
    }

    // Update the employee profile
    const updatedEmployee = await this.prisma.employee.update({
      where: { id },
      data: formattedData,
    });

    // Handle user account updates if password or roleId is provided
    if (password || roleId) {
      const userUpdateData: any = {};
      if (password) {
        const salt = await bcrypt.genSalt();
        userUpdateData.password = await bcrypt.hash(password, salt);
      }
      if (roleId) {
        userUpdateData.roleId = roleId;
      }

      if (employee.user) {
        // Update existing user
        await this.prisma.user.update({
          where: { id: employee.user.id },
          data: userUpdateData,
        });
      } else if (password && roleId) {
        // Create new user if they didn't have one
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        await this.prisma.user.create({
          data: {
            username: employee.employeeCode,
            password: hashedPassword,
            employeeId: employee.id,
            roleId: roleId,
          }
        });
      }
    }

    return updatedEmployee;
  }

  async deleteEmployee(id: string) {
    const employee = await this.prisma.employee.findUnique({ where: { id }, include: { user: true } });
    if (!employee) throw new NotFoundException('Khong tim thay nhan vien');

    //Remove FK constraint for self-relations
    await this.prisma.employee.updateMany({
      where: { managerId: id },
      data: { managerId: null },
    });

    await this.prisma.employee.updateMany({
      where: { deptManagerId: id },
      data: { deptManagerId: null },
    });

    await this.prisma.employee.updateMany({
      where: { seniorDeptManagerId: id },
      data: { seniorDeptManagerId: null },
    });

    await this.prisma.employee.updateMany({
      where: { areaManagerId: id },
      data: { areaManagerId: null },
    });

    if (employee.user) {
      await this.prisma.users_Roles.deleteMany({ where: { userId: employee.user.id } });
      await this.prisma.user.delete({ where: { id: employee.user.id } });
    }

    return this.prisma.employee.delete({ where: { id } });
  }

}
