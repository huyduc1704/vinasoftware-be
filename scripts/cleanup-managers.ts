import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

// Function to manually load .env if dotenv is not available
function loadEnv() {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split(/\r?\n/).forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && !key.trim().startsWith('#') && valueParts.length > 0) {
                const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
                process.env[key.trim()] = value;
            }
        });
        console.log('--- ĐÃ NẠP .ENV ---');
    }
}

// Ensure ENV is loaded BEFORE creating PrismaClient
loadEnv();

// Don't pass any constructor arguments to let Prisma use process.env.DATABASE_URL
const prisma = new PrismaClient();

async function main() {
    console.log('--- ĐANG QUÉT DỌN DỮ LIỆU QUẢN LÝ ---');

    // 1. Tìm ID của tất cả "Trưởng khu vực" (những người không được làm Quản lý trực tiếp)
    const areaManagers = await prisma.employee.findMany({
        where: {
            roleCode: 'TRUONG_KHU_VUC'
        },
        select: {
            id: true,
            fullName: true
        }
    });

    const areaManagerIds = areaManagers.map(am => am.id);

    if (areaManagerIds.length === 0) {
        console.log('Không tìm thấy Trưởng khu vực nào. Không cần dọn dẹp.');
        return;
    }

    console.log(`Tìm thấy ${areaManagers.length} Trưởng khu vực.`);

    // 2. Cập nhật tất cả nhân viên đang trỏ managerId vào những ông này
    const result = await prisma.employee.updateMany({
        where: {
            managerId: {
                in: areaManagerIds
            }
        },
        data: {
            managerId: null
        }
    });

    console.log(`--- KẾT QUẢ ---`);
    console.log(`Đã gỡ bỏ ID của Trưởng khu vực khỏi cột "Quản lý trực tiếp" của ${result.count} nhân viên.`);
    console.log('Dữ liệu của bạn đã sạch sẽ!');
}

main()
    .catch((e) => {
        console.error('Lỗi khi dọn dẹp:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
