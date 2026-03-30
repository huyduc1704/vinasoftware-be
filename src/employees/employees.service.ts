import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { GetEmployeesFilterDto } from './dto/get-employees-filter.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllEmployees(filterDto: GetEmployeesFilterDto) {
    const {
      page = 1,
      limit = 10,
      search,
      roleCode,
      searchName,
      // ID các cấp quản lý
      managerId,
      deptManagerId,
      seniorDeptManagerId,
      // Tên các cấp quản lý (để search)
      managerName,
      deptManagerName,
      seniorDeptManagerName,
    } = filterDto;

    const skip = (page - 1) * limit;
    const whereCondition: any = {};

    // 1. Tìm kiếm tổng hợp (Search across Name, Code, Email)
    if (search) {
      whereCondition.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { employeeCode: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }

    // 2. Filter theo tên riêng lẻ 
    if (searchName) {
      whereCondition.fullName = { contains: searchName, mode: 'insensitive' };
    }

    // 3. Filter theo Role Code
    if (roleCode) {
      const roles = roleCode.split(',').map(r => r.trim()).filter(Boolean);
      whereCondition.roleCode = roles.length === 1 ? roles[0] : { in: roles };
    }

    // 4. Filter theo ID quản lý
    if (managerId) whereCondition.managerId = managerId;
    if (deptManagerId) whereCondition.deptManagerId = deptManagerId;
    if (seniorDeptManagerId) whereCondition.seniorDeptManagerId = seniorDeptManagerId;

    // 5. Filter theo tên quản lý (Relation search)
    if (managerName) {
      whereCondition.manager = { fullName: { contains: managerName, mode: 'insensitive' } };
    }
    if (deptManagerName) {
      whereCondition.deptManager = { fullName: { contains: deptManagerName, mode: 'insensitive' } };
    }
    if (seniorDeptManagerName) {
      whereCondition.seniorDeptManager = { fullName: { contains: seniorDeptManagerName, mode: 'insensitive' } };
    }

    //Query song song để lấy data và tổng số lượng
    const [data, total] = await Promise.all([
      this.prisma.employee.findMany({
        where: whereCondition,
        skip,
        take: limit,
        include: {
          user: { include: { usersRoles: { include: { role: { select: { name: true, code: true } } } } } },
          employeeRegions: { include: { region: { include: { manager: { select: { fullName: true, employeeCode: true } } } } } },
          manager: { select: { fullName: true, employeeCode: true } },
          deptManager: { select: { fullName: true, employeeCode: true } },
          seniorDeptManager: { select: { fullName: true, employeeCode: true } },
          files: true,
        },
        orderBy: { createdAt: 'desc' }
      }),
      this.prisma.employee.count({ where: whereCondition })
    ]);

    return {
      data,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
        limit
      }
    };
  }

  async getEmployeeById(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        user: { include: { usersRoles: { include: { role: true } } } },
        employeeRegions: { include: { region: { include: { manager: true } } } },
        manager: true,
        deptManager: true,
        seniorDeptManager: true,
        files: true,
      }
    });

    if (!employee) throw new NotFoundException('Khong tim thay nhan vien');

    return employee;
  }

  async getEmployeeByCode(code: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { employeeCode: code },
      include: {
        employeeRegions: { include: { region: true } },
        deptManager: true,
        manager: true,
      }
    });
    if (!employee) throw new NotFoundException('Không tim thấy nhân viên với mã này');
    return employee;
  }

  async createEmployee(data: CreateEmployeeDto) {
    const { employeeCode, password, roleIds, regionCode, roleCode, ...restData } = data;

    //check trung employeeCode
    const exist = await this.prisma.employee.findUnique({ where: { employeeCode } });
    if (exist) throw new BadRequestException('Ma nhan vien da ton tai');

    const createData: any = {
      ...restData,
      roleCode: roleCode || null,
      managerId: restData.managerId || null,
      deptManagerId: restData.deptManagerId || null,
      seniorDeptManagerId: restData.seniorDeptManagerId || null,
      employeeCode,
    };
    delete createData.areaManagerId;

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

    // Sync Region manager if role is TRUONG_KHU_VUC
    if (roleCode === 'TRUONG_KHU_VUC' && regionCode) {
      const regions = Array.isArray(regionCode) ? regionCode : [regionCode];
      await this.prisma.region.updateMany({
        where: { code: { in: regions } },
        data: { managerId: newEmployee.id }
      });
    }

    // Automatically create a user account if login info is provided
    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      await this.prisma.user.create({
        data: {
          username: employeeCode,
          password: hashedPassword,
          employeeId: newEmployee.id,
          usersRoles: {
            create: roleIds?.map(id => ({ roleId: id })) || []
          }
        }
      });
    }

    return newEmployee;
  }

  async updateEmployee(id: string, data: UpdateEmployeeDto) {
    const employee = await this.prisma.employee.findUnique({ where: { id }, include: { user: true } });
    if (!employee) throw new NotFoundException('Khong tim thay nhan vien');

    const { password, roleIds, employeeCode, regionCode, roleCode, ...employeeData } = data;

    const formattedData: any = {
      ...employeeData,
      roleCode: roleCode || undefined,
      managerId: employeeData.managerId === '' ? null : (employeeData.managerId || undefined),
      deptManagerId: employeeData.deptManagerId === '' ? null : employeeData.deptManagerId,
      seniorDeptManagerId: employeeData.seniorDeptManagerId === '' ? null : employeeData.seniorDeptManagerId,
    };
    delete formattedData.areaManagerId;

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

    // [Thăng chức / Giáng chức] Xử lý khi roleCode thay đổi
    if (roleCode && roleCode !== employee.roleCode) {
      // Danh sách các chức danh được coi là "Quản lý" (có quyền có cấp dưới)
      const MANAGER_ROLES = ['TRUONG_KHU_VUC', 'TRUONG_PHONG_CAP_CAO', 'TRUONG_PHONG', 'QUAN_LY', 'AREA_MANAGER', 'SENIOR_MANAGER', 'DEPARTMENT_MANAGER', 'MANAGER'];

      const isBeingDemoted = !MANAGER_ROLES.includes(roleCode);

      if (isBeingDemoted) {
        // GIÁNG CHỨC → Cắt đứt tất cả cấp dưới
        await this.prisma.$transaction([
          this.prisma.employee.updateMany({ where: { managerId: id }, data: { managerId: null } }),
          this.prisma.employee.updateMany({ where: { deptManagerId: id }, data: { deptManagerId: null } }),
          this.prisma.employee.updateMany({ where: { seniorDeptManagerId: id }, data: { seniorDeptManagerId: null } }),
          // Nếu đang là trưởng khu vực, gỡ bỏ khỏi Region
          this.prisma.region.updateMany({ where: { managerId: id }, data: { managerId: null } }),
        ]);
      }
    }

    // Xử lý khi khu vực thay đổi hoặc duy trì role TRUONG_KHU_VUC
    const finalRoleCode = roleCode || employee.roleCode;
    if (finalRoleCode === 'TRUONG_KHU_VUC') {
      if (regionCode) {
        // Nếu có cập nhật khu vực mới
        const newRegions = Array.isArray(regionCode) ? regionCode : [regionCode];
        await this.prisma.$transaction([
          // Gỡ bỏ khỏi các khu vực cũ (nếu đang là manager)
          this.prisma.region.updateMany({
            where: { managerId: id },
            data: { managerId: null }
          }),
          // Gán vào các khu vực mới
          this.prisma.region.updateMany({
            where: { code: { in: newRegions } },
            data: { managerId: id }
          })
        ]);
      } else if (roleCode === 'TRUONG_KHU_VUC' && roleCode !== employee.roleCode) {
        // Nếu thăng chức lên TRUONG_KHU_VUC mà không đổi regionCode (lấy region hiện tại)
        const currentRegions = await this.prisma.employee_Regions.findMany({ where: { employeeId: id } });
        const currentRegionCodes = currentRegions.map(r => r.regionCode);
        await this.prisma.region.updateMany({
          where: { code: { in: currentRegionCodes } },
          data: { managerId: id }
        });
      }
    }

    // Update the employee profile
    const updatedEmployee = await this.prisma.employee.update({
      where: { id },
      data: formattedData,
      include: {
        user: { include: { usersRoles: { include: { role: { select: { name: true, code: true } } } } } },
        employeeRegions: { include: { region: { include: { manager: { select: { fullName: true, employeeCode: true } } } } } },
        manager: { select: { fullName: true, employeeCode: true } },
        deptManager: { select: { fullName: true, employeeCode: true } },
        seniorDeptManager: { select: { fullName: true, employeeCode: true } },
        files: true,
      },
    });

    // Handle user account updates if password or roleIds is provided
    if (password || roleIds) {
      const userUpdateData: any = {};

      if (password) {
        const salt = await bcrypt.genSalt();
        userUpdateData.password = await bcrypt.hash(password, salt);
      }

      if (employee.user) {
        // Update existing user roles
        if (roleIds) {
          // Delete old roles connection
          await this.prisma.users_Roles.deleteMany({ where: { userId: employee.user.id } });
          // Assign new roles
          userUpdateData.usersRoles = {
            create: roleIds.map(id => ({ roleId: id }))
          };
        }

        await this.prisma.user.update({
          where: { id: employee.user.id },
          data: userUpdateData,
        });
      } else if (password) {
        // Create new user if they didn't have one
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        await this.prisma.user.create({
          data: {
            username: employee.employeeCode,
            password: hashedPassword,
            employeeId: employee.id,
            usersRoles: {
              create: roleIds?.map(id => ({ roleId: id })) || []
            }
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

    // Clear Region manager
    await this.prisma.region.updateMany({
      where: { managerId: id },
      data: { managerId: null },
    });

    if (employee.user) {
      await this.prisma.users_Roles.deleteMany({ where: { userId: employee.user.id } });
      await this.prisma.user.delete({ where: { id: employee.user.id } });
    }

    // Xóa dữ liệu liên quan trước khi xóa nhân viên, tránh lỗi fk
    await this.prisma.employee_Regions.deleteMany({ where: { employeeId: id } });
    await this.prisma.contract_Employees.deleteMany({ where: { employeeId: id } });

    return this.prisma.employee.delete({ where: { id } });
  }

}
