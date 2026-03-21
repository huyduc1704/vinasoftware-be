import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permissions';

/**
 * Decorator yêu cầu người dùng phải có ít nhất một trong các quyền (Permission Codes) được liệt kê.
 * Hỗ trợ Wildcard '*' (VD: 'accounting.*') để so khớp với các quyền có prefix tương ứng.
 * 
 * @example
 * \@RequirePermissions('KETOAN_DM1_VIEW', 'KETOAN_*')
 */
export const RequirePermissions = (...permissions: string[]) => SetMetadata(PERMISSIONS_KEY, permissions);
