import { PrismaClient } from '@prisma/client';
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
        console.log('Running seeder...');
        const roles = [
            { code: 'ADMIN', name: 'Administrator', description: 'Hệ thống Admin' },
            { code: 'TRUONG_KHU_VUC', name: 'Trưởng khu vực', description: 'Quản lý toàn bộ khu vực' },
            { code: 'TRUONG_PHONG_CAP_CAO', name: 'Trưởng phòng cấp cao', description: 'Trưởng phòng cấp cao' },
            { code: 'TRUONG_PHONG', name: 'Trưởng phòng', description: 'Trường phòng' },
            { code: 'QUAN_LY', name: 'Quản lý', description: 'Quản lý' },
            { code: 'NVKD', name: 'Nhân viên kinh doanh', description: 'Nhân viên Sales' },
        ];

        for (const role of roles) {
            const createdRole = await prisma.role.upsert({
                where: { code: role.code },
                update: {},
                create: role,
            });
            console.log(`Upserted Role: ${createdRole.code} - ${createdRole.name}`);
        }

        console.log('Seeding Roles finished.')

        // Create a Role
        let role = await prisma.role.findFirst({ where: { code: 'ADMIN' } });
        if (!role) {
            role = await prisma.role.create({
                data: {
                    code: 'ADMIN',
                    name: 'Administrator',
                    description: 'Hệ thống Admin'
                }
            });
            console.log('Created Role ADMIN');
        }
        //Create other roles


        // Check if employee exists
        const existingEmployee = await prisma.employee.findUnique({
            where: { employeeCode: 'EMP001' }
        });

        // Ensure we have a region to use
        let defaultRegion = await prisma.region.findFirst({ where: { code: 'VNS01' } });
        if (!defaultRegion) {
            defaultRegion = await prisma.region.create({
                data: {
                    code: 'VNS01',
                    name: 'Head Office',
                }
            });
            console.log('Created Region: VNS01');
        }

        if (existingEmployee) {
            console.log('Employee EMP001 already exists.');
        } else {
            const hashedPassword = await bcrypt.hash('password123', 10);
            const employee = await prisma.employee.create({
                data: {
                    employeeCode: 'EMP001',
                    fullName: 'Nguyễn Văn A',
                    email: 'admin@vinasoftware.com',
                    employeeRegions: {
                        create: {
                            regionCode: defaultRegion.code,
                            isMain: true
                        }
                    }
                }
            });

            await prisma.user.create({
                data: {
                    username: 'EMP001',
                    password: hashedPassword,
                    account_type: 'ADMIN',
                    roleId: role.id,
                    employeeId: employee.id
                }
            });
            console.log('Created User EMP001 with password: password123');
        }

        // --- Seed other employees ---
        const fakeEmployees = [
            { code: 'EMP_AM', name: 'Trần Trưởng Vùng', roleCode: 'AREA_MANAGER' },
            { code: 'EMP_SM', name: 'Lê Cấp Cao', roleCode: 'SENIOR_MANAGER' },
            { code: 'EMP_DM', name: 'Phạm Trưởng Phòng', roleCode: 'DEPARTMENT_MANAGER' },
            { code: 'EMP_MGR', name: 'Hoàng Quản Lý', roleCode: 'MANAGER' },
            { code: 'EMP_NV', name: 'Đinh Nhân Viên', roleCode: 'EMPLOYEE' },
            { code: 'EMP_ACC', name: 'Vũ Kế Toán', roleCode: 'ACCOUNTANT' },
        ];

        for (const emp of fakeEmployees) {
            const existing = await prisma.employee.findUnique({ where: { employeeCode: emp.code } });
            if (!existing) {
                await prisma.employee.create({
                    data: {
                        employeeCode: emp.code,
                        fullName: emp.name,
                        roleCode: emp.roleCode,
                        employeeRegions: {
                            create: {
                                regionCode: defaultRegion.code,
                                isMain: true
                            }
                        }
                    }
                });
                console.log(`Created Employee: ${emp.code} - ${emp.name} (${emp.roleCode})`);
            } else {
                // Update roleCode if it already exists but might be missing
                await prisma.employee.update({
                    where: { employeeCode: emp.code },
                    data: { roleCode: emp.roleCode }
                });
            }
        }

        console.log('Seeding completed!');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
        process.exit(0);
    }
}

seed();
