import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
    constructor(private prisma: PrismaService) { }

    async create(createRoleDto: CreateRoleDto) {
        return this.prisma.role.create({
            data: {
                code: createRoleDto.code,
                name: createRoleDto.name,
                description: createRoleDto.description,
                is_active: createRoleDto.is_active ?? true,
            },
        });
    }

    async findAll() {
        return this.prisma.role.findMany({
            include: {
                rolesPermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
    }

    async update(id: string, updateRoleDto: UpdateRoleDto) {
        return this.prisma.role.update({
            where: { id },
            data: updateRoleDto,
        });
    }

    async remove(id: string) {
        return this.prisma.role.delete({
            where: { id },
        });
    }

    // 5. Gán Permissions cho Role
    async assignPermissionsToRole(roleId: string, permissionCodes: string[]) {
        await this.prisma.roles_Permissions.deleteMany({
            where: { roleId },
        });
        const permissions = await this.prisma.permissions.findMany({
            where: { code: { in: permissionCodes } },
        });
        const rolePermissionData = permissions.map((p) => ({
            roleId: roleId,
            permissionId: p.id,
        }));
        await this.prisma.roles_Permissions.createMany({
            data: rolePermissionData,
        });
        return { message: 'Permissions assigned successfully' };
    }

    // 6. Cấp Role cho 1 User
    async assignRoleToUser(userId: string, roleCode: string) {
        const role = await this.prisma.role.findUnique({
            where: { code: roleCode },
        });
        if (!role) throw new NotFoundException('Role code not found');
        const existing = await this.prisma.users_Roles.findUnique({
            where: {
                userId_roleId: {
                    userId,
                    roleId: role.id,
                },
            },
        });
        if (existing) return { message: 'User already has this role' };
        return this.prisma.users_Roles.create({
            data: {
                userId,
                roleId: role.id,
            },
        });
    }
    // 7. Thu hồi Role của 1 User
    async removeRoleFromUser(userId: string, roleCode: string) {
        const role = await this.prisma.role.findUnique({
            where: { code: roleCode },
        });
        if (!role) throw new NotFoundException('Role code not found');
        return this.prisma.users_Roles.delete({
            where: {
                userId_roleId: {
                    userId,
                    roleId: role.id,
                },
            },
        });
    }
}