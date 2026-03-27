import { PrismaClient, ContractType, ContractStatus } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

async function seed() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        console.error('DATABASE_URL is not set in .env');
        process.exit(1);
    }

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    try {
        console.log('🌱 Running seeder...');

        // ============================================================
        // 1. ROLES
        // ============================================================
        console.log('Seeding Roles...');
        const rolesData = [
            { code: 'ADMIN', name: 'Administrator', description: 'Hệ thống Admin' },
            { code: 'TRUONG_KHU_VUC', name: 'Trưởng khu vực', description: 'Quản lý toàn bộ khu vực' },
            { code: 'TRUONG_PHONG_CAP_CAO', name: 'Trưởng phòng cấp cao', description: 'Trưởng phòng cấp cao' },
            { code: 'TRUONG_PHONG', name: 'Trưởng phòng', description: 'Trưởng phòng' },
            { code: 'QUAN_LY', name: 'Quản lý', description: 'Quản lý' },
            { code: 'NVKD', name: 'Nhân viên kinh doanh', description: 'Nhân viên Sales' },
        ];

        for (const role of rolesData) {
            await prisma.role.upsert({
                where: { code: role.code },
                update: { name: role.name, description: role.description },
                create: role,
            });
        }
        console.log('✅ Roles seeded.');

        const adminRole = await prisma.role.findUnique({ where: { code: 'ADMIN' } });

        // ============================================================
        // 2. PERMISSIONS
        // ============================================================
        console.log('Seeding Permissions...');
        const permissionsList = [
            { code: '*', name: 'Toàn quyền (Super Admin)', module: 'SYSTEM', resource: '*', resource_name: 'Tất cả hệ thống', action: '*' },
            // Kế toán
            { code: 'KETOAN_*', name: 'Tất cả quyền Kế toán', module: 'KẾ TOÁN', resource: '*', resource_name: 'Tất cả Kế toán', action: '*' },
            ...[1, 2, 3, 4, 5, 6].flatMap(i => [
                { code: `KETOAN_DM${i}_VIEW`, name: `Xem danh sách Danh mục cấp ${i}`, module: 'KẾ TOÁN', resource: `DM${i}`, resource_name: `Danh mục cấp ${i}`, action: 'VIEW' },
                { code: `KETOAN_DM${i}_CREATE`, name: `Thêm mới Danh mục cấp ${i}`, module: 'KẾ TOÁN', resource: `DM${i}`, resource_name: `Danh mục cấp ${i}`, action: 'CREATE' },
                { code: `KETOAN_DM${i}_EDIT`, name: `Sửa Danh mục cấp ${i}`, module: 'KẾ TOÁN', resource: `DM${i}`, resource_name: `Danh mục cấp ${i}`, action: 'EDIT' },
                { code: `KETOAN_DM${i}_DELETE`, name: `Xóa Danh mục cấp ${i}`, module: 'KẾ TOÁN', resource: `DM${i}`, resource_name: `Danh mục cấp ${i}`, action: 'DELETE' },
            ]),
            { code: 'KETOAN_ACC_VIEW', name: 'Xem danh sách Kế toán', module: 'KẾ TOÁN', resource: 'ACC', resource_name: 'Mã Kế Toán', action: 'VIEW' },
            { code: 'KETOAN_ACC_CREATE', name: 'Thêm mới Kế toán', module: 'KẾ TOÁN', resource: 'ACC', resource_name: 'Mã Kế Toán', action: 'CREATE' },
            { code: 'KETOAN_ACC_EDIT', name: 'Sửa Kế toán', module: 'KẾ TOÁN', resource: 'ACC', resource_name: 'Mã Kế Toán', action: 'EDIT' },
            { code: 'KETOAN_ACC_DELETE', name: 'Xóa Kế toán', module: 'KẾ TOÁN', resource: 'ACC', resource_name: 'Mã Kế Toán', action: 'DELETE' },
            { code: 'KETOAN_IMP_NVKD_UPLOAD', name: 'Upload danh sách NV Kinh Doanh', module: 'KẾ TOÁN', resource: 'IMP_NVKD', resource_name: 'Danh sách NVKD', action: 'UPLOAD' },
            { code: 'KETOAN_EXPORT_GH_VIEW', name: 'Xem Export tình trạng gia hạn', module: 'KẾ TOÁN', resource: 'EXPORT_GH', resource_name: 'Tình trạng Gia hạn', action: 'VIEW' },
            { code: 'KETOAN_EXPORT_GH_EXPORT', name: 'Xuất tình trạng gia hạn', module: 'KẾ TOÁN', resource: 'EXPORT_GH', resource_name: 'Tình trạng Gia hạn', action: 'EXPORT' },
            // CSKH
            { code: 'CSKH_*', name: 'Tất cả quyền CSKH', module: 'CSKH', resource: '*', resource_name: 'Tất cả CSKH', action: '*' },
            { code: 'CSKH_VIEW', name: 'Xem danh sách CSKH', module: 'CSKH', resource: 'GENERAL', resource_name: 'Danh sách CSKH', action: 'VIEW' },
            { code: 'CSKH_CREATE', name: 'Thêm mới CSKH', module: 'CSKH', resource: 'GENERAL', resource_name: 'Danh sách CSKH', action: 'CREATE' },
            // Media
            { code: 'MEDIA_*', name: 'Tất cả quyền Media', module: 'HÌNH ẢNH - VIDEO', resource: '*', resource_name: 'Tất cả Media', action: '*' },
            { code: 'MEDIA_LOGO_EDIT', name: 'Chỉnh sửa Logo', module: 'HÌNH ẢNH - VIDEO', resource: 'LOGO', resource_name: 'Logo', action: 'EDIT' },
            { code: 'MEDIA_FAVICON_EDIT', name: 'Chỉnh sửa Favicon', module: 'HÌNH ẢNH - VIDEO', resource: 'FAVICON', resource_name: 'Favicon', action: 'EDIT' },
            // Static Page
            { code: 'STATIC_*', name: 'Tất cả quyền Trang Tĩnh', module: 'TRANG TĨNH', resource: '*', resource_name: 'Tất cả Trang Tĩnh', action: '*' },
            { code: 'STATIC_FOOTER_EDIT', name: 'Chỉnh sửa Footer', module: 'TRANG TĨNH', resource: 'FOOTER', resource_name: 'Footer', action: 'EDIT' },
            { code: 'DASHBOARD_VIEW', name: 'Xem biểu đồ Dashboard', module: 'HỆ THỐNG', resource: 'DASHBOARD', resource_name: 'Trang chủ', action: 'VIEW' },
            //Employee Manager
            { code: 'USER_*', name: 'Tất cả quyền Nhân sự', module: 'NHÂN SỰ', resource: '*', resource_name: 'Tất cả Nhân sự', action: '*' },
            { code: 'USER_VIEW', name: 'Xem danh sách Nhân sự', module: 'NHÂN SỰ', resource: 'USER', resource_name: 'Nhân viên', action: 'VIEW' },
            { code: 'USER_ROLE_ASSIGN', name: 'Gán quyền nhân viên', module: 'NHÂN SỰ', resource: 'USER_ROLE', resource_name: 'Phân quyền', action: 'ASSIGN' },
            { code: 'USER_EXPORT', name: 'Xuất Excel Nhân sự', module: 'NHÂN SỰ', resource: 'USER', resource_name: 'Nhân viên', action: 'EXPORT' },
            //Region
            { code: 'REGION_VIEW', name: 'Xem danh sách khu vực', module: 'HỆ THỐNG', resource: 'REGION', resource_name: 'Khu vực', action: 'VIEW' },
            { code: 'REGION_CREATE', name: 'Thêm mới khu vực', module: 'HỆ THỐNG', resource: 'REGION', resource_name: 'Khu vực', action: 'CREATE' },
            { code: 'REGION_EDIT', name: 'Sửa khu vực', module: 'HỆ THỐNG', resource: 'REGION', resource_name: 'Khu vực', action: 'EDIT' },
            { code: 'REGION_DELETE', name: 'Xóa khu vực', module: 'HỆ THỐNG', resource: 'REGION', resource_name: 'Khu vực', action: 'DELETE' },

            // Quản lý Nhóm quyền (Roles)
            { code: 'ROLE_*', name: 'Tất cả quyền Nhóm quyền', module: 'HỆ THỐNG', resource: 'ROLE', resource_name: 'Nhóm quyền', action: '*' },
            { code: 'ROLE_VIEW', name: 'Xem danh sách Nhóm quyền', module: 'HỆ THỐNG', resource: 'ROLE', resource_name: 'Nhóm quyền', action: 'VIEW' },
            { code: 'ROLE_CREATE', name: 'Thêm mới Nhóm quyền', module: 'HỆ THỐNG', resource: 'ROLE', resource_name: 'Nhóm quyền', action: 'CREATE' },
            { code: 'ROLE_EDIT', name: 'Sửa Nhóm quyền', module: 'HỆ THỐNG', resource: 'ROLE', resource_name: 'Nhóm quyền', action: 'EDIT' },
            { code: 'ROLE_DELETE', name: 'Xóa Nhóm quyền', module: 'HỆ THỐNG', resource: 'ROLE', resource_name: 'Nhóm quyền', action: 'DELETE' },

            // Quản lý Khách hàng (Customers)
            { code: 'CUSTOMER_*', name: 'Tất cả quyền Khách hàng', module: 'KHÁCH HÀNG', resource: '*', resource_name: 'Tất cả Khách hàng', action: '*' },
            { code: 'CUSTOMER_VIEW', name: 'Xem danh sách Khách hàng', module: 'KHÁCH HÀNG', resource: 'CUSTOMER', resource_name: 'Khách hàng', action: 'VIEW' },
            { code: 'CUSTOMER_EDIT', name: 'Sửa thông tin Khách hàng', module: 'KHÁCH HÀNG', resource: 'CUSTOMER', resource_name: 'Khách hàng', action: 'EDIT' },
        ];

        for (const perm of permissionsList) {
            await prisma.permissions.upsert({
                where: { code: perm.code },
                update: perm,
                create: perm,
            });
        }

        if (adminRole) {
            const superadminPerm = await prisma.permissions.findUnique({ where: { code: '*' } });
            if (superadminPerm) {
                await prisma.roles_Permissions.upsert({
                    where: { roleId_permissionId: { roleId: adminRole.id, permissionId: superadminPerm.id } },
                    update: {},
                    create: { roleId: adminRole.id, permissionId: superadminPerm.id },
                });
            }
        }
        console.log('✅ Permissions seeded.');

        // ============================================================
        // 3. REGIONS
        // ============================================================
        console.log('Seeding Regions...');
        const regionsData = [
            { code: 'VNS_HCM', name: 'Khu vực TP. Hồ Chí Minh' },
            { code: 'VNS_HN', name: 'Khu vực Hà Nội' },
            { code: 'VNS_DN', name: 'Khu vực Đà Nẵng' },
        ];

        for (const region of regionsData) {
            await prisma.region.upsert({
                where: { code: region.code },
                update: {},
                create: region,
            });
        }
        console.log('✅ Regions seeded.');

        // ============================================================
        // 4. EMPLOYEES (theo đúng hierarchy)
        // ============================================================
        console.log('Seeding Employees...');
        const hashedPassword = await bcrypt.hash('password123', 10);

        // --- Admin Employee (dùng để tạo user Admin) ---
        const adminEmployee = await prisma.employee.upsert({
            where: { employeeCode: 'EMP001' },
            update: {},
            create: {
                employeeCode: 'EMP001',
                fullName: 'Nguyễn Văn Admin',
                email: 'admin@vinasoftware.com',
                roleCode: 'ADMIN',
                employeeRegions: { create: { regionCode: 'VNS_HCM', isMain: true } },
            },
        });

        // Tạo user Admin
        const adminUser = await prisma.user.upsert({
            where: { username: 'EMP001' },
            update: {},
            create: {
                username: 'EMP001',
                password: hashedPassword,
                account_type: 'ADMIN',
                employeeId: adminEmployee.id,
                usersRoles: adminRole ? { create: [{ roleId: adminRole.id }] } : undefined,
            },
        });

        // --- Trưởng khu vực (TKV) ---
        const tkv_hcm = await prisma.employee.upsert({
            where: { employeeCode: 'TKV_HCM' },
            update: {},
            create: {
                employeeCode: 'TKV_HCM',
                fullName: 'Trần Minh Khu Vực HCM',
                roleCode: 'TRUONG_KHU_VUC',
                employeeRegions: { create: { regionCode: 'VNS_HCM', isMain: true } },
            },
        });

        // Gán TKV vào Region
        await prisma.region.update({
            where: { code: 'VNS_HCM' },
            data: { managerId: tkv_hcm.id },
        });

        // --- Trưởng phòng cấp cao (TPCC) ---
        const tpcc_1 = await prisma.employee.upsert({
            where: { employeeCode: 'TPCC_01' },
            update: {},
            create: {
                employeeCode: 'TPCC_01',
                fullName: 'Lê Thị Cấp Cao',
                roleCode: 'TRUONG_PHONG_CAP_CAO',
                employeeRegions: { create: { regionCode: 'VNS_HCM', isMain: true } },
            },
        });

        // --- Trưởng phòng (TP) ---
        const tp_1 = await prisma.employee.upsert({
            where: { employeeCode: 'TP_01' },
            update: {},
            create: {
                employeeCode: 'TP_01',
                fullName: 'Phạm Văn Phòng',
                roleCode: 'TRUONG_PHONG',
                seniorDeptManagerId: tpcc_1.id,
                employeeRegions: { create: { regionCode: 'VNS_HCM', isMain: true } },
            },
        });

        // --- Quản lý (QL) ---
        const ql_1 = await prisma.employee.upsert({
            where: { employeeCode: 'QL_01' },
            update: {},
            create: {
                employeeCode: 'QL_01',
                fullName: 'Hoàng Quản Lý',
                roleCode: 'QUAN_LY',
                seniorDeptManagerId: tpcc_1.id,
                deptManagerId: tp_1.id,
                employeeRegions: { create: { regionCode: 'VNS_HCM', isMain: true } },
            },
        });

        // --- Nhân viên kinh doanh (NVKD) ---
        const nvkd_samples = [
            { code: 'NVKD_01', name: 'Đinh Nhân Viên 1' },
            { code: 'NVKD_02', name: 'Vũ Nhân Viên 2' },
            { code: 'NVKD_03', name: 'Ngô Nhân Viên 3' },
        ];

        for (const nv of nvkd_samples) {
            await prisma.employee.upsert({
                where: { employeeCode: nv.code },
                update: {},
                create: {
                    employeeCode: nv.code,
                    fullName: nv.name,
                    roleCode: 'NVKD',
                    seniorDeptManagerId: tpcc_1.id,
                    deptManagerId: tp_1.id,
                    managerId: ql_1.id,
                    employeeRegions: { create: { regionCode: 'VNS_HCM', isMain: true } },
                },
            });
        }
        console.log('✅ Employees seeded.');

        // ============================================================
        // 5. CUSTOMERS
        // ============================================================
        console.log('Seeding Customers...');
        const customersData = [
            { fullName: 'Công ty TNHH ABC', taxCode: '0123456789', phone: '0901234567', email: 'abc@company.com', representative: 'Nguyễn Giám Đốc' },
            { fullName: 'Công ty CP XYZ', taxCode: '0987654321', phone: '0912345678', email: 'xyz@company.com', representative: 'Trần CEO' },
            { fullName: 'Doanh nghiệp DEF', taxCode: '0111222333', phone: '0923456789', email: 'def@company.com', representative: 'Lê Chủ Tịch' },
        ];

        const customers: any[] = [];
        for (const cust of customersData) {
            let c = await prisma.customer.findFirst({ where: { taxCode: cust.taxCode } });
            if (!c) {
                c = await prisma.customer.create({ data: cust });
            }
            customers.push(c);
        }
        console.log('✅ Customers seeded.');

        // ============================================================
        // 6. CONTRACTS (dùng enum đúng)
        // ============================================================
        console.log('Seeding Contracts...');
        const contractTypes: ContractType[] = ['WEB', 'HOSTING', 'DOMAIN', 'ADS'];
        const contractStatuses: ContractStatus[] = ['ACTIVE', 'COMPLETED', 'PENDING'];
        const now = new Date();

        // Lấy danh sách NVKD đã seed
        const nvkdEmployees = await prisma.employee.findMany({
            where: { roleCode: 'NVKD' },
        });

        let contractCount = 0;
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 2; j++) {
                const signDate = new Date(now.getFullYear(), i, 15);
                if (signDate > now) signDate.setFullYear(now.getFullYear() - 1);

                const total = Math.floor(Math.random() * 45_000_000 + 5_000_000);
                const paid = Math.floor(total * (Math.random() * 0.8 + 0.2));
                const contractCode = `HD_${now.getFullYear()}_${String(i + 1).padStart(2, '0')}${j + 1}`;

                const exists = await prisma.contracts.findUnique({ where: { contractCode } });
                if (exists) continue;

                const customer = customers[Math.floor(Math.random() * customers.length)];
                const type = contractTypes[Math.floor(Math.random() * contractTypes.length)];
                const status = contractStatuses[Math.floor(Math.random() * contractStatuses.length)];
                const assignedEmployee = nvkdEmployees.length > 0
                    ? nvkdEmployees[j % nvkdEmployees.length]
                    : ql_1;

                await prisma.contracts.create({
                    data: {
                        contractCode,
                        title: `Hợp đồng dịch vụ ${type}`,
                        type,
                        status,
                        totalAmount: total,
                        paidAmount: paid,
                        remainingAmount: total - paid,
                        signDate,
                        customerId: customer.id,
                        createdById: adminUser.id,
                        // Snapshot quản lý tại thời điểm ký
                        regionCode: 'VNS_HCM',
                        managerId: ql_1.id,
                        deptManagerId: tp_1.id,
                        seniorDeptManagerId: tpcc_1.id,
                        contractEmployees: {
                            create: { employeeId: assignedEmployee.id, isMain: true },
                        },
                    },
                });
                contractCount++;
            }
        }
        console.log(`✅ ${contractCount} Contracts seeded.`);


        console.log('\n🎉 Seeding completed successfully!');
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
        process.exit(0);
    }
}

seed();
