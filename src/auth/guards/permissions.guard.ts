import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Nếu endpoint không yêu cầu quyền nào cụ thể thì cho qua
    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    // Nếu không có thông tin user bị từ chối
    if (!user || (!user.permissions && !user.roles)) {
      throw new ForbiddenException('User is not authenticated or missing permissions data');
    }

    const userPermissions: string[] = user.permissions || [];
    const userRoles: string[] = user.roles || [];

    // Ưu tiên 1: ADMIN luôn có mọi quyền
    if (userRoles.includes('ADMIN')) {
      return true;
    }

    // Ưu tiên 2: User có mã '*' (Super Admin Wildcard)
    if (userPermissions.includes('*')) {
      return true;
    }

    // Hàm kiểm tra Wildcard Match
    const hasPermission = (requiredPerm: string) => {
      return userPermissions.some(userPerm => {
        // Khớp 100%
        if (userPerm === requiredPerm) return true;
        
        // Khớp Wildcard. VD user có 'KETOAN_*', required là 'KETOAN_DM1_VIEW'
        if (userPerm.endsWith('*')) {
           const prefix = userPerm.slice(0, -1); // Lấy 'KETOAN_'
           return requiredPerm.startsWith(prefix);
        }

        return false;
      });
    };

    // Kiểm tra xem user có thỏa mãn ít nhất 1 quyền trong mảng yêu cầu (Toán tử OR)
    const isAllowed = requiredPermissions.some(permission => hasPermission(permission));

    if (!isAllowed) {
      throw new ForbiddenException('Bạn không có quyền truy cập chức năng này hợp lệ');
    }

    return true;
  }
}
