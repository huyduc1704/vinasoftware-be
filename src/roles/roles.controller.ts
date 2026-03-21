import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionsDto } from './dto/assign-permissions.dto';
import { AssignRoleToUserDto } from './dto/assign-role-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('/api/roles')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class RolesController {
    constructor(private readonly rolesService: RolesService) { }

    @ApiOperation({ summary: 'Tạo nhóm quyền mới' })
    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto);
    }

    @ApiOperation({ summary: 'Lấy danh sách tất cả nhóm quyền' })
    @Get()
    findAll() {
        return this.rolesService.findAll();
    }

    @ApiOperation({ summary: 'Cập nhật thông tin nhóm quyền' })
    @ApiParam({ name: 'id', description: 'ID của nhóm quyền' })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
        return this.rolesService.update(id, updateRoleDto);
    }

    @ApiOperation({ summary: 'Xóa nhóm quyền' })
    @ApiParam({ name: 'id', description: 'ID của nhóm quyền' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.rolesService.remove(id);
    }

    @ApiOperation({ summary: 'Gán danh sách quyền cho nhóm quyền' })
    @ApiParam({ name: 'id', description: 'ID của nhóm quyền' })
    @Post(':id/permissions')
    assignPermissions(
        @Param('id') id: string,
        @Body() assignPermissionDto: AssignPermissionsDto,
    ) {
        return this.rolesService.assignPermissionsToRole(id, assignPermissionDto.permissionCodes);
    }

    @ApiOperation({ summary: 'Gán nhóm quyền cho người dùng' })
    @ApiParam({ name: 'userId', description: 'ID của người dùng' })
    @Post('users/:userId/assign')
    assignRoleToUser(
        @Param('userId') userId: string,
        @Body() assignRoleToUserDto: AssignRoleToUserDto,
    ) {
        return this.rolesService.assignRoleToUser(userId, assignRoleToUserDto.roleCode);
    }

    @ApiOperation({ summary: 'Xóa nhóm quyền khỏi người dùng' })
    @ApiParam({ name: 'userId', description: 'ID của người dùng' })
    @ApiParam({ name: 'roleCode', description: 'Mã nhóm quyền' })
    @Delete('users/:userId/remove/:roleCode')
    removeRoleFromUser(
        @Param('userId') userId: string,
        @Param('roleCode') roleCode: string,
    ) {
        return this.rolesService.removeRoleFromUser(userId, roleCode);
    }
}