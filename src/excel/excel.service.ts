import { Injectable, BadRequestException } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import * as ExcelJS from 'exceljs';
import { Response } from 'express';

@Injectable()
export class ExcelService {
    constructor(private prisma: PrismaService) { }

    /*
    * Xuất danh sách nhân viên ra file Excel
    */
    async exportEmployees(res: Response, filter: any) {
        const employees = await this.prisma.employee.findMany({
            where: filter,
            include: {
                employeeRegions: { include: { region: true } }
            },
        });

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Danh sách nhân viên');

        //Header
        worksheet.columns = [
            { header: 'Mã NV', key: 'employeeCode', width: 15 },
            { header: 'Họ tên', key: 'fullName', width: 25 },
            { header: 'Email', key: 'email', width: 25 },
            { header: 'Điện thoại', key: 'phone', width: 15 },
            { header: 'Chức danh', key: 'roleCode', width: 20 },
            { header: 'Khu vực', key: 'regions', width: 20 },
            { header: 'Ngày vào làm', key: 'joinDate', width: 15 },
            { header: 'Trạng thái', key: 'status', width: 15 }
        ];

        worksheet.getRow(1).font = { bold: true };
        worksheet.getRow(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFE0E0E0' }
        };

        //Add data
        employees.forEach(emp => {
            worksheet.addRow({
                employeeCode: emp.employeeCode,
                fullName: emp.fullName,
                email: emp.email || '',
                phone: emp.phone || '',
                roleCode: emp.roleCode || '',
                regions: emp.employeeRegions.map(r => r.region.name).join(', '),
                joinDate: emp.joinDate ? emp.joinDate.toISOString().split('T')[0] : '',
                status: emp.isActive ? 'Đang làm việc' : 'Đã nghỉ việc'
            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=Employees.xlsx');

        await workbook.xlsx.write(res);
        res.end();
    }

    /**
     * Xuất danh sách hợp đồng
     */
    async exportContracts(res: Response, month?: number, year?: number) {
        const currentYear = year || new Date().getFullYear();
        const whereCondition: any = {};

        if (month) {
            const startDate = new Date(currentYear, month - 1, 1);
            const endDate = new Date(currentYear, month, 0, 23, 59, 59);
            whereCondition.submissionDate = { gte: startDate, lte: endDate };
        }

        const contracts = await this.prisma.contracts.findMany({
            where: whereCondition,
            include: {
                customer: true,
                contractEmployees: {
                    include: {
                        employee: true
                    }
                },
                manager: true,
                deptManager: true,
                services: {
                    include: {
                        domainInfo: true,
                        hostingInfo: true
                    }
                },
                receipts: true,
                creator: true,
            }
        });

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet(`Hợp đồng ${month ? 'tháng ' + month : 'năm ' + currentYear}`);

        worksheet.columns = [
            { header: 'STT', key: 'stt', width: 5 },                                 // 1
            { header: 'Số phiếu thu', key: 'receiptCode', width: 15 },               // 2
            { header: 'Mã nhân viên', key: 'employeeCode', width: 15 },              // 3
            { header: 'Tên NVKD', key: 'employeeName', width: 25 },                  // 4
            { header: 'Số hợp đồng', key: 'contractCode', width: 20 },               // 5
            { header: 'Phòng', key: 'deptManagerName', width: 20 },                  // 6
            { header: 'Khu vực', key: 'regionCode', width: 15 },                     // 7
            { header: 'Ngày nộp', key: 'submissionDate', width: 15 },                // 8
            { header: 'Thiết kế web', key: 'webTotal', width: 15 },                  // 9
            { header: 'Lần 1', key: 'pmL1', width: 15 },                             // 10
            { header: 'Lần 2', key: 'pmL2', width: 15 },                             // 11
            { header: 'Bàn giao', key: 'pmDelivery', width: 15 },                    // 12
            { header: 'Nâng cấp web', key: 'webUpgrade', width: 15 },                // 13
            { header: 'Treo 50%', key: 'treo50', width: 15 },                        // 14
            { header: 'Hosting', key: 'hostingAmount', width: 15 },                  // 15
            { header: 'Tên miền', key: 'domainAmount', width: 15 },                  // 16
            { header: 'Tổng giá trị', key: 'totalAmount', width: 15 },               // 17
            { header: 'VAT', key: 'vatAmount', width: 15 },                          // 18
            { header: 'Tổng thanh toán', key: 'totalPayment', width: 15 },           // 19 (Assuming total + VAT)
            { header: 'Đã thu', key: 'paidAmount', width: 15 },                      // 20
            { header: 'Host (Đã thu)', key: 'paidHost', width: 15 },                 // 21
            { header: 'Host VAT (Đã thu)', key: 'paidHostVAT', width: 15 },          // 22
            { header: 'Web (Đã thu)', key: 'paidWeb', width: 15 },                   // 23
            { header: 'Tên miền (Đã thu)', key: 'paidDomain', width: 15 },           // 24
            { header: 'Còn lại', key: 'remainingAmount', width: 15 },                // 25
            { header: 'Bàn giao', key: 'deliveryStatus', width: 15 },                // 26
            { header: 'Chức năng', key: 'features', width: 30 },                     // 27
            { header: 'Ghi chú', key: 'note', width: 30 },                           // 28
            { header: 'Tên khách hàng', key: 'customerName', width: 30 },            // 29
            { header: 'SĐT', key: 'customerPhone', width: 15 },                      // 30
            { header: 'Mail', key: 'customerEmail', width: 25 },                     // 31
            { header: 'MST', key: 'customerTaxCode', width: 15 },                    // 32
            { header: 'Địa chỉ', key: 'customerAddress', width: 30 },                // 33
            { header: 'Ngày sinh', key: 'customerDob', width: 15 },                  // 34
            { header: 'Địa chỉ tên miền', key: 'domainName', width: 25 },            // 35
            { header: 'Đơn vị đăng ký', key: 'domainProvider', width: 20 },          // 36
            { header: 'Ngày hết hạn', key: 'domainExpiry', width: 15 },              // 37
            { header: 'Thời gian (Host)', key: 'hostingDuration', width: 15 },       // 38
            { header: 'Dung lượng (Host)', key: 'hostingStorage', width: 15 },       // 39
        ];

        worksheet.getRow(1).font = { bold: true };
        let rowIndex = 1;

        contracts.forEach(c => {
            rowIndex++;
            // Lấy từ contractEmployees (mới) HOẶC fallback sang manager (cũ)
            const mainEmp = c.contractEmployees?.find(ce => ce.isMain)?.employee || c.manager;

            // Extract Services
            const webService = c.services?.find(s => s.type === 'WEB' && s.name?.includes('Thiết kế'));
            const webUpgradeService = c.services?.find(s => s.type === 'WEB' && s.name?.includes('Nâng cấp'));
            const hostingService = c.services?.find(s => s.type === 'HOSTING');
            const domainService = c.services?.find(s => s.type === 'DOMAIN');

            // Extract Payment Stages (Receipts)
            const pmL1 = c.receipts?.find(p => p.name === 'Lần 1')?.amount || 0;
            const pmL2 = c.receipts?.find(p => p.name === 'Lần 2')?.amount || 0;
            const pmDelivery = c.receipts?.find(p => p.name === 'Bàn giao')?.amount || 0;

            worksheet.addRow({
                stt: rowIndex - 1,
                receiptCode: c.receipts?.map(r => r.receiptCode).filter(Boolean).join(', ') || '',
                employeeCode: mainEmp?.employeeCode || '',
                employeeName: mainEmp?.fullName || '',
                contractCode: c.contractCode,
                deptManagerName: c.deptManager?.fullName || '',
                regionCode: c.regionCode || '',
                submissionDate: c.submissionDate ? c.submissionDate.toISOString().split('T')[0] : '',

                webTotal: webService?.total || 0,
                pmL1: pmL1,
                pmL2: pmL2,
                pmDelivery: pmDelivery,
                webUpgrade: webUpgradeService?.total || 0,
                treo50: 0, // Placeholder
                hostingAmount: hostingService?.total || 0,
                domainAmount: domainService?.total || 0,

                totalAmount: c.totalAmount || 0,
                vatAmount: c.vatAmount || 0,
                totalPayment: Number(c.totalAmount || 0) + Number(c.vatAmount || 0),
                paidAmount: c.paidAmount || 0,

                paidHost: '', // Detailed break downs usually require manual entry or complex logic
                paidHostVAT: '',
                paidWeb: '',
                paidDomain: '',

                remainingAmount: c.remainingAmount || 0,
                deliveryStatus: '', // Placeholder
                features: c.features || '',
                note: c.note || '',

                customerName: c.customer.fullName,
                customerPhone: c.customer.phone || '',
                customerEmail: c.customer.email || '',
                customerTaxCode: c.customer.taxCode || '',
                customerAddress: c.customer.address || '',
                customerDob: c.customer.dob ? c.customer.dob.toISOString().split('T')[0] : '',

                domainName: domainService?.domainInfo?.domainName || '',
                domainProvider: domainService?.domainInfo?.provider || '',
                domainExpiry: domainService?.domainInfo?.expiryDate ? domainService?.domainInfo?.expiryDate.toISOString().split('T')[0] : '',

                hostingDuration: hostingService?.hostingInfo?.duration || '',
                hostingStorage: hostingService?.hostingInfo?.storage || ''
            });
        });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=Contracts_${month}_${currentYear}.xlsx`);

        await workbook.xlsx.write(res);
        res.end();
    }

    /**
     * Nhập nhân viên từ file Excel
     */
    async importEmployees(file: Express.Multer.File, userId: string) {
        const workbook = new ExcelJS.Workbook();
        // Fix Buffer type issue for some environments
        await workbook.xlsx.load(file.buffer as any);
        const worksheet = workbook.getWorksheet(1);

        if (!worksheet) {
            throw new BadRequestException('Không tìm thấy worksheet trong file Excel');
        }

        const employeesToCreate: any[] = [];
        const errors: any[] = [];

        // Bỏ qua header
        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            if (rowNumber === 1) return;

            try {
                const employeeData = {
                    employeeCode: row.getCell(1).text.trim() || undefined,
                    fullName: row.getCell(2).text.trim() || undefined,
                    email: row.getCell(3).text.trim() || undefined,
                    phone: row.getCell(4).text.trim() || undefined,
                    roleCode: row.getCell(5).text.trim() || undefined,
                    isActive: true
                };

                if (!employeeData.employeeCode || !employeeData.fullName) {
                    throw new Error('Thiếu Mã NV hoặc Họ tên');
                }

                employeesToCreate.push(employeeData);
            } catch (err: any) {
                errors.push({ row: rowNumber, message: err.message });
            }
        });

        if (errors.length > 0 && employeesToCreate.length === 0) {
            throw new BadRequestException({ message: 'Dữ liệu Excel không hợp lệ', errors });
        }

        // Bulk create (hoặc loop upsert)
        let successCount = 0;
        for (const emp of employeesToCreate) {
            try {
                await this.prisma.employee.upsert({
                    where: { employeeCode: emp.employeeCode },
                    update: emp,
                    create: emp
                });
                successCount++;
            } catch (err) {
                errors.push({ employeeCode: emp.employeeCode, message: 'Lỗi khi lưu vào DB' });
            }
        }

        // Lưu vào lịch sử import
        await this.prisma.import_History.create({
            data: {
                fileName: file.originalname,
                uploadById: userId,
                module: 'EMPLOYEE',
                totalRows: employeesToCreate.length,
                successRows: successCount,
                failedRows: employeesToCreate.length - successCount,
                status: successCount === employeesToCreate.length ? 'SUCCESS' : 'PARTIAL',
                errorLog: errors.length > 0 ? (JSON.stringify(errors) as any) : undefined,
            }
        });

        return {
            message: 'Kết quả nhập dữ liệu',
            total: employeesToCreate.length,
            success: successCount,
            failed: employeesToCreate.length - successCount,
            errors: errors
        };
    }


    /**
     * Nhập hợp đồng từ file Excel (Flat Data -> DB)
     */
    async importContracts(file: Express.Multer.File, userId: string) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file.buffer as any);
        const worksheet = workbook.getWorksheet(1);

        if (!worksheet) {
            throw new BadRequestException('Không tìm thấy worksheet trong file Excel');
        }

        const errors: any[] = [];
        const flatRows: any[] = [];
        const lastRow: any = {};

        // 1. Data Cleaning Layer (Flatten)
        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            if (rowNumber <= 3) return;

            try {
                const parseCell = (index: number) => {
                    const val = row.getCell(index).value;
                    if (val && typeof val === 'object' && 'result' in val) return String(val.result).trim();
                    if (val && typeof val === 'object' && 'text' in val) return String(val.text).trim();
                    return String(val || '').trim();
                };
                const parseDate = (index: number) => {
                    const val = row.getCell(index).value;
                    if (val instanceof Date) {
                        return isNaN(val.getTime()) ? null : val;
                    }
                    const text = parseCell(index);
                    if (!text) return null;
                    const parts = text.split('/');
                    let parsedDate: Date;
                    if (parts.length === 3) {
                        parsedDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
                    } else {
                        parsedDate = new Date(text);
                    }
                    return isNaN(parsedDate.getTime()) ? null : parsedDate;
                };
                const parseNumber = (index: number) => {
                    const text = parseCell(index).replace(/,/g, '');
                    const num = Number(text);
                    return isNaN(num) ? 0 : num;
                };

                let receiptCode = parseCell(2);
                if (receiptCode.replace(/\s/g, '').toUpperCase() === 'CKCTY') {
                    receiptCode = 'CKCTY';
                }
                const employeeCode = parseCell(3);
                const parsedContractCode = parseCell(5);

                // --- CRITICAL FIX: Reset inherited merged cells when hitting a new Contract ---
                if (parsedContractCode) {
                    if (lastRow['contractCode'] && parsedContractCode !== lastRow['contractCode']) {
                        for (const k of Object.keys(lastRow)) delete lastRow[k];
                    }
                }
                const currentRow: any = {
                    receiptCode: receiptCode,
                    employeeCode: employeeCode,
                    employeeName: parseCell(4),
                    contractCode: parsedContractCode,
                    deptManagerName: parseCell(6),
                    regionCode: parseCell(7),
                    submissionDate: parseDate(8),

                    webTotal: parseNumber(9),
                    pmL1: parseNumber(10),
                    pmL2: parseNumber(11),
                    pmDelivery: parseNumber(12),
                    webUpgrade: parseNumber(13),
                    treo50: parseNumber(14),

                    hostingAmount: parseNumber(15),
                    domainAmount: parseNumber(16),

                    totalAmount: parseNumber(17),
                    vatAmount: parseNumber(18),
                    paidAmount: parseNumber(20),
                    remainingAmount: parseNumber(25),

                    features: parseCell(27),
                    note: parseCell(28),

                    customerName: parseCell(29),
                    customerPhone: parseCell(30),
                    customerEmail: parseCell(31),
                    customerTaxCode: parseCell(32),
                    customerAddress: parseCell(33),

                    domainName: parseCell(35),
                    domainProvider: parseCell(36),
                    domainExpiry: parseDate(37),

                    hostingDuration: parseCell(38),
                    hostingStorage: parseCell(39),
                    rowNumber
                };

                // Fill down logic for merged cells
                for (const key of Object.keys(currentRow)) {
                    // Cấp nhật lastRow nếu currentRow có giá trị
                    if (currentRow[key] !== null && currentRow[key] !== '' && currentRow[key] !== 0) {
                        lastRow[key] = currentRow[key];
                    } else if (lastRow[key] !== undefined) {
                        // Kế thừa giá trị nếu bị null/trống do merge
                        currentRow[key] = lastRow[key];
                    }
                }

                flatRows.push(currentRow);
            } catch (err: any) {
                errors.push({ row: rowNumber, message: 'Parse error: ' + err.message });
            }
        });

        // 2. Business Layer (Group by contract)
        const contractGroups = new Map<string, any>();
        for (const row of flatRows) {
            const cc = row.contractCode;
            if (!cc) {
                if (!errors.some(e => e.row === row.rowNumber)) {
                    errors.push({ row: row.rowNumber, message: 'Thiếu mã hợp đồng' });
                }
                continue;
            }
            if (!contractGroups.has(cc)) {
                contractGroups.set(cc, { base: row, rows: [row] });
            } else {
                contractGroups.get(cc).rows.push(row);
            }
        }

        const contractsToCreate: any[] = [];
        for (const [contractCode, group] of contractGroups.entries()) {
            const { base, rows } = group;

            if (!base.customerName) {
                errors.push({ row: base.rowNumber, message: 'Thiếu tên khách hàng' });
                continue;
            }

            let type: 'WEB' | 'HOSTING' | 'DOMAIN' | 'ADS' = 'WEB';

            // Ưu tiên xác định loại qua ký tự cuối của Mã hợp đồng
            const lastChar = contractCode.trim().toUpperCase().slice(-1);
            if (lastChar === 'W') type = 'WEB';
            else if (lastChar === 'H') type = 'HOSTING';
            else if (lastChar === 'D') type = 'DOMAIN';
            else {
                // Tự động xác định: Loại nào nhiều tiền nhất thì lấy loại đó
                const webTotal = rows.reduce((sum, r) => sum + (r.webTotal || 0) + (r.webUpgrade || 0), 0);
                const hostTotal = rows.reduce((sum, r) => sum + (r.hostingAmount || 0), 0);
                const domainTotal = rows.reduce((sum, r) => sum + (r.domainAmount || 0), 0);

                const max = Math.max(webTotal, hostTotal, domainTotal);
                if (max > 0) {
                    if (max === webTotal) type = 'WEB';
                    else if (max === hostTotal) type = 'HOSTING';
                    else if (max === domainTotal) type = 'DOMAIN';
                }
            }

            const employeesMap = new Map<string, any>();
            for (const r of rows) {
                if (r.employeeCode) {
                    employeesMap.set(r.employeeCode, {
                        employeeCode: r.employeeCode,
                        employeeName: r.employeeName,
                        deptManagerName: r.deptManagerName
                    });
                }
            }

            const servicesMap = new Map<string, any>();
            const receiptsMap = new Map<string, any>();

            for (const r of rows) {
                if (r.webTotal) {
                    const key = 'WEB_DESIGN';
                    if (!servicesMap.has(key)) {
                        servicesMap.set(key, {
                            type: 'WEB',
                            name: 'Thiết kế Web',
                            total: r.webTotal,
                        });
                    }
                }
                if (r.webUpgrade) {
                    const key = 'WEB_UPGRADE';
                    if (!servicesMap.has(key)) {
                        servicesMap.set(key, {
                            type: 'WEB',
                            name: 'Nâng cấp Web',
                            total: r.webUpgrade,
                        });
                    }
                }
                if (r.domainAmount || r.domainName) {
                    const key = 'DOMAIN-' + (r.domainName || 'N/A');
                    if (!servicesMap.has(key)) {
                        servicesMap.set(key, {
                            type: 'DOMAIN',
                            name: 'Tên miền',
                            total: r.domainAmount,
                            domainInfo: {
                                create: {
                                    domainName: r.domainName || 'N/A',
                                    provider: r.domainProvider || undefined,
                                    expiryDate: r.domainExpiry || undefined
                                }
                            }
                        });
                    }
                }
                if (r.hostingAmount || r.hostingDuration) {
                    const key = 'HOSTING-' + (r.hostingAmount || 0);
                    if (!servicesMap.has(key)) {
                        servicesMap.set(key, {
                            type: 'HOSTING',
                            name: 'Hosting',
                            total: r.hostingAmount,
                            hostingInfo: {
                                create: {
                                    duration: r.hostingDuration || undefined,
                                    storage: r.hostingStorage || undefined
                                }
                            }
                        });
                    }
                }

                if (r.pmL1 && !receiptsMap.has('Lần 1')) receiptsMap.set('Lần 1', { name: 'Lần 1', amount: r.pmL1, order: 1, serviceKey: 'WEB_DESIGN', receiptCode: r.receiptCode, paidDate: r.submissionDate });
                if (r.pmL2 && !receiptsMap.has('Lần 2')) receiptsMap.set('Lần 2', { name: 'Lần 2', amount: r.pmL2, order: 2, serviceKey: 'WEB_DESIGN', receiptCode: r.receiptCode, paidDate: r.submissionDate });
                if (r.pmDelivery && !receiptsMap.has('Bàn giao')) receiptsMap.set('Bàn giao', { name: 'Bàn giao', amount: r.pmDelivery, order: 3, serviceKey: 'WEB_DESIGN', receiptCode: r.receiptCode, paidDate: r.submissionDate });
                if (r.treo50 && !receiptsMap.has('Treo 50%')) receiptsMap.set('Treo 50%', { name: 'Treo 50%', amount: r.treo50, order: 1, serviceKey: 'WEB_UPGRADE', receiptCode: r.receiptCode, paidDate: r.submissionDate });
            }

            contractsToCreate.push({
                contractCode,
                baseRow: base,
                type,
                employees: Array.from(employeesMap.values()),
                services: Array.from(servicesMap.values()),
                receipts: Array.from(receiptsMap.values()),
                rowNumber: base.rowNumber
            });
        }

        // 3. In-Memory Compute
        let successCount = 0;

        // --- PRE-FETCHING OPTIMIZATION ---
        // 3.1 Prefetch Employees
        const allEmployees = await this.prisma.employee.findMany({
            include: { employeeRegions: { where: { isMain: true } } }
        });
        const employeeByCode = new Map(allEmployees.map(e => [e.employeeCode, e]));
        const employeeByName = new Map(allEmployees.map(e => [e.fullName, e]));


        // 3.2 Pre-Fetch Customers (Tạo trước mảng đệm cho Customers)
        const allPhones = Array.from(new Set(contractsToCreate.map(c => c.baseRow.customerPhone).filter(Boolean)));
        const allEmails = Array.from(new Set(contractsToCreate.map(c => c.baseRow.customerEmail).filter(Boolean)));
        const allNames = Array.from(new Set(contractsToCreate.map(c => c.baseRow.customerName).filter(Boolean)));

        const cachedCustomers = await this.prisma.customer.findMany({
            where: {
                OR: [
                    allPhones.length > 0 ? { phone: { in: allPhones } } : null,
                    allEmails.length > 0 ? { email: { in: allEmails } } : null,
                    allNames.length > 0 ? { fullName: { in: allNames } } : null
                ].filter(Boolean) as any[]
            }
        });

        const cxByPhone = new Map(cachedCustomers.filter(c => c.phone).map(c => [c.phone, c]));
        const cxByEmail = new Map(cachedCustomers.filter(c => c.email).map(c => [c.email, c]));
        const cxByName = new Map(cachedCustomers.map(c => [c.fullName, c]));

        // 3.3 Backup toàn bộ receipts từ trước vào cache
        //Lấy tất cả receipts liên quan đến cái danh sách hợp đồng đợt này
        const allContractCodes = contractsToCreate.map(c => c.contractCode);
        const allOldReceipts = await this.prisma.receipt.findMany({
            where: { contract: { contractCode: { in: allContractCodes } } },
            select: { contract: { select: { contractCode: true } }, name: true, paidDate: true }
        });

        const oldReceiptsCache = new Map();
        for (const r of allOldReceipts) {
            if (r.paidDate) {
                oldReceiptsCache.set(`${r.contract!.contractCode}_${r.name}`, r.paidDate);
            }
        }
        // Chuẩn bị khách hàng ngoài transaction mà không gây tắc trong transaction chính
        // Để promise.all phía dưới không bị đứt quãng bởi các truy vấn DB liên tiếp, 
        // chuẩn bị sẵn một map khách hàng trong bộ nhớ để sử dụng lại khi cần tạo/cập nhật hợp đồng.
        const customerMapping = new Map();
        for (const data of contractsToCreate) {
            const base = data.baseRow;
            let cx = base.customerPhone ? cxByPhone.get(base.customerPhone) : null;
            if (!cx && base.customerEmail) cx = cxByEmail.get(base.customerEmail);
            if (!cx) cx = cxByName.get(base.customerName);


            const cxPayload = {
                fullName: base.customerName,
                phone: base.customerPhone || null,
                email: base.customerEmail || null,
                taxCode: base.customerTaxCode || null,
                address: base.customerAddress || null,
            };

            if (!cx) {
                cx = await this.prisma.customer.create({ data: cxPayload });
                if (cx.phone) cxByPhone.set(cx.phone, cx);
                cxByName.set(cx.fullName, cx);
            } else {
                cx = await this.prisma.customer.update({
                    where: { id: cx.id }, data: cxPayload
                });
            }
            customerMapping.set(data.contractCode, cx.id);
        } // kêt thúc tiền xử lý customers -> 0 query tìm KH trong transaction chính, 
        // chỉ còn create/update KH đã được chuẩn bị sẵn trong cache, đảm bảo tốc độ xử lý nhanh nhất có thể.

        // Stage 4: Chunked batch write
        const CHUNK_SIZE = 50; //Gom 50 cái xử lý 1 lượt 
        for (let i = 0; i < contractsToCreate.length; i += CHUNK_SIZE) {
            const chunk = contractsToCreate.slice(i, i + CHUNK_SIZE);

            await this.prisma.$transaction(async (tx) => {
                await Promise.all(chunk.map(async (data) => {
                    const base = data.baseRow;
                    const customerId = customerMapping.get(data.contractCode);

                    const dbEmployees: any[] = [];
                    for (const empRaw of data.employees) {
                        const emp = employeeByCode.get(empRaw.employeeCode);
                        if (emp) {
                            dbEmployees.push(emp);
                        } else {
                            errors.push({ row: data.rowNumber, contractCode: data.contractCode, message: `Lưu ý: Không tìm thấy nhân viên mã '${empRaw.employeeCode}' trong hệ thống. Vui lòng thêm nhân viên này trước!` });
                        }
                    }
                    const mainEmployee = dbEmployees.length > 0 ? dbEmployees[0] : null;
                    const deptManager = base.deptManagerName ? employeeByName.get(base.deptManagerName) : null;

                    let finalRegionCode = base.regionCode;
                    if (mainEmployee && mainEmployee.employeeRegions?.length > 0) {
                        finalRegionCode = mainEmployee.employeeRegions[0].regionCode;
                    }

                    const calculatedPaid = data.receipts?.reduce((sum, r) => sum + Number(r.amount || 0), 0) || 0;
                    const finalPaidAmount = Math.max(Number(base.paidAmount || 0), calculatedPaid);

                    const contractUpsertData = {
                        title: 'Hợp đồng ' + data.contractCode,
                        type: data.type,
                        submissionDate: base.submissionDate || null,
                        totalAmount: base.totalAmount,
                        vatAmount: base.vatAmount,
                        paidAmount: finalPaidAmount,
                        remainingAmount: base.remainingAmount,
                        features: base.features || null,
                        note: base.note || null,
                        regionCode: finalRegionCode || null,
                        customerId: customerId,
                        managerId: mainEmployee ? mainEmployee.id : undefined,
                        deptManagerId: deptManager ? deptManager.id : undefined,
                        createdById: userId,
                    };

                    const contract = await tx.contracts.upsert({
                        where: { contractCode: data.contractCode },
                        create: { contractCode: data.contractCode, ...contractUpsertData },
                        update: {
                            title: contractUpsertData.title,
                            type: contractUpsertData.type,
                            totalAmount: contractUpsertData.totalAmount,
                            vatAmount: contractUpsertData.vatAmount,
                            paidAmount: contractUpsertData.paidAmount,
                            remainingAmount: contractUpsertData.remainingAmount,
                            features: contractUpsertData.features,
                            note: contractUpsertData.note,
                            regionCode: contractUpsertData.regionCode,
                            customerId: customerId,
                            managerId: contractUpsertData.managerId,
                            deptManagerId: contractUpsertData.deptManagerId,
                        }
                    });

                    await tx.contract_Employees.deleteMany({ where: { contractId: contract.id } });
                    await tx.receipt.deleteMany({ where: { contractId: contract.id } });

                    const existingServices = await tx.service.findMany({ where: { contractId: contract.id }, select: { id: true } });
                    const svcIds = existingServices.map(s => s.id);
                    if (svcIds.length > 0) {
                        await tx.domain.deleteMany({ where: { serviceId: { in: svcIds } } });
                        await tx.hosting.deleteMany({ where: { serviceId: { in: svcIds } } });
                        await tx.service.deleteMany({ where: { id: { in: svcIds } } });
                    }

                    if (dbEmployees.length > 0) {
                        await tx.contract_Employees.createMany({
                            data: dbEmployees.map((e, index) => ({
                                contractId: contract.id,
                                employeeId: e.id,
                                isMain: index === 0
                            }))
                        });
                    }

                    for (const svc of data.services) {
                        const createdSvc = await tx.service.create({
                            data: {
                                contractId: contract.id,
                                type: svc.type,
                                name: svc.name,
                                total: svc.total,
                                domainInfo: svc.domainInfo,
                                hostingInfo: svc.hostingInfo
                            }
                        });
                        const stageMatch = svc.type === 'WEB' && svc.name === 'Thiết kế Web' ? 'WEB_DESIGN' :
                            svc.type === 'WEB' && svc.name === 'Nâng cấp Web' ? 'WEB_UPGRADE' : '';

                        // Lọc các Receipts thuộc Service này
                        const relevantReceipts = data.receipts.filter(r => r.serviceKey === (stageMatch || svc.type));

                        if (relevantReceipts.length > 0) {

                            await tx.receipt.createMany({
                                data: relevantReceipts.map(r => ({
                                    contractId: contract.id,
                                    serviceId: createdSvc.id,
                                    name: r.name,
                                    amount: r.amount,
                                    order: r.order,
                                    receiptCode: r.receiptCode,
                                    paidDate: oldReceiptsCache.get(`${data.contractCode}_${r.name}`) || r.paidDate || null,
                                }))
                            });
                        }
                    }
                    successCount++;
                }));
            });
        }

        await this.prisma.import_History.create({
            data: {
                fileName: file.originalname,
                uploadById: userId,
                module: 'CONTRACT',
                totalRows: flatRows.length,
                successRows: successCount,
                failedRows: contractsToCreate.length - successCount,
                status: successCount === contractsToCreate.length ? 'SUCCESS' : 'PARTIAL',
                errorLog: errors.length > 0 ? (JSON.stringify(errors) as any) : undefined,
            }
        });

        return {
            message: 'Kết quả nhập dữ liệu',
            totalGroups: contractsToCreate.length,
            success: successCount,
            failed: contractsToCreate.length - successCount,
            errors: errors
        };
    }
}


// const orConditions = [
//             allPhones.length > 0 ? { phone: { in: allPhones } } : null,
//             allEmails.length > 0 ? { email: { in: allEmails } } : null,
//             allNames.length > 0 ? { fullName: { in: allNames } } : null
//         ].filter(Boolean) as any[];

//         const cachedCustomers = orConditions.length > 0 ? await this.prisma.customer.findMany({
//             where: { OR: orConditions }
//         }) : [];

//         const customerByPhone = new Map(cachedCustomers.filter(c => c.phone).map(c => [c.phone, c]));
//         const customerByEmail = new Map(cachedCustomers.filter(c => c.email).map(c => [c.email, c]));
//         const customerByName = new Map(cachedCustomers.map(c => [c.fullName, c]));

//         for (const data of contractsToCreate) {
//             try {
//                 const base = data.baseRow;

//                 // 3.1 Resolving Customer
//                 let customer: any = null;
//                 if (base.customerPhone) customer = customerByPhone.get(base.customerPhone);
//                 if (!customer && base.customerEmail) customer = customerByEmail.get(base.customerEmail);
//                 if (!customer && base.customerName) customer = customerByName.get(base.customerName);

//                 if (!customer) {
//                     customer = await this.prisma.customer.create({
//                         data: {
//                             fullName: base.customerName,
//                             phone: base.customerPhone || null,
//                             email: base.customerEmail || null,
//                             taxCode: base.customerTaxCode || null,
//                             address: base.customerAddress || null,
//                         }
//                     });
//                 } else {
//                     customer = await this.prisma.customer.update({
//                         where: { id: customer.id },
//                         data: {
//                             fullName: base.customerName,
//                             phone: base.customerPhone || customer.phone,
//                             email: base.customerEmail || customer.email,
//                             taxCode: base.customerTaxCode || customer.taxCode,
//                             address: base.customerAddress || customer.address,
//                         }
//                     });
//                 }
//                 // Xin vào Cache để các dòng lặp sau sử dụng lại nếu gặp trùng khách hàng!
//                 if (customer.phone) customerByPhone.set(customer.phone, customer);
//                 if (customer.email) customerByEmail.set(customer.email, customer);
//                 customerByName.set(customer.fullName, customer);

//                 // 3.2 Resolving Employees (Shared Contracts support)
//                 const dbEmployees: any[] = [];
//                 for (const empRaw of data.employees) {
//                     let emp = employeeByCode.get(empRaw.employeeCode); // O(1) Memory Cache ⚡
//                     if (emp) {
//                         dbEmployees.push(emp);
//                     } else {
//                         errors.push({ row: data.rowNumber, contractCode: data.contractCode, message: `Lưu ý: Không tìm thấy nhân viên mã '${empRaw.employeeCode}' trong hệ thống. Vui lòng thêm nhân viên này trước!` });
//                     }
//                 }

//                 // Main Manager uses the baseRow (first entry)
//                 let mainEmployee: any = dbEmployees.length > 0 ? dbEmployees[0] : null;

//                 // Tự động gán Region chuẩn của Nhân Viên phụ trách chính (ghi đè Excel để tránh typo như VNS01 -> VNS_HCM)
//                 let finalRegionCode = base.regionCode;
//                 if (mainEmployee && mainEmployee.employeeRegions && mainEmployee.employeeRegions.length > 0) {
//                     finalRegionCode = mainEmployee.employeeRegions[0].regionCode;
//                 }

//                 let deptManager: any = null;
//                 if (base.deptManagerName) {
//                     deptManager = employeeByName.get(base.deptManagerName); // O(1) Memory Cache ⚡
//                 }

//                 const contractUpsertData = {
//                     title: 'Hợp đồng ' + data.contractCode,
//                     type: data.type,
//                     submissionDate: base.submissionDate || null,
//                     totalAmount: base.totalAmount,
//                     vatAmount: base.vatAmount,
//                     paidAmount: base.paidAmount,
//                     remainingAmount: base.remainingAmount,
//                     features: base.features || null,
//                     note: base.note || null,
//                     regionCode: finalRegionCode || null,
//                     customerId: customer.id,
//                     managerId: mainEmployee ? mainEmployee.id : undefined,
//                     deptManagerId: deptManager ? deptManager.id : undefined,
//                     createdById: userId,
//                 };

//                 // 3.3 Transaction execution
//                 await this.prisma.$transaction(async (tx) => {
//                     const existingContract = await tx.contracts.findUnique({ where: { contractCode: data.contractCode } });
//                     let contract;

//                     if (existingContract) {
//                         contract = await tx.contracts.update({
//                             where: { contractCode: data.contractCode },
//                             data: {
//                                 ...contractUpsertData,
//                                 //receiptCode: undefined // Ensure it's not being updated if it was deleted from model
//                             }
//                         });
//                     } else {
//                         contract = await tx.contracts.create({
//                             data: {
//                                 contractCode: data.contractCode,
//                                 ...contractUpsertData
//                             }
//                         });
//                     }

//                     if (dbEmployees.length > 0) {
//                         await tx.contract_Employees.deleteMany({
//                             where: { contractId: contract.id }
//                         });
//                         await tx.contract_Employees.createMany({
//                             data: dbEmployees.map((e: any, idx: number) => ({
//                                 contractId: contract.id,
//                                 employeeId: e.id,
//                                 isMain: idx === 0
//                             }))
//                         });
//                     }

//                     // --- BACKUP OLD RECEIPTS TO PRESERVE PAID DATE ---
//                     // By cascading services below, receipts get wiped! We MUST backup to preserve historical dates.
//                     const backupReceipts = await tx.receipt.findMany({ where: { contractId: contract.id } });

//                     // Explicitly wipe old receipts to avoid any duplicates if cascade misses some
//                     await tx.receipt.deleteMany({ where: { contractId: contract.id } });

//                     // --- SERVICES (Moved UP) ---
//                     const existingServices = await tx.service.findMany({ where: { contractId: contract.id }, select: { id: true } });
//                     const serviceIds = existingServices.map(s => s.id);
//                     if (serviceIds.length > 0) {
//                         await tx.domain.deleteMany({ where: { serviceId: { in: serviceIds } } });
//                         await tx.hosting.deleteMany({ where: { serviceId: { in: serviceIds } } });
//                         await tx.service.deleteMany({ where: { id: { in: serviceIds } } }); // WARNING! Triggers onDelete: Cascade for bound Receipts
//                     }

//                     const createdServiceIds = new Map<string, string>();
//                     for (const svc of data.services) {
//                         const created = await tx.service.create({
//                             data: {
//                                 contractId: contract.id,
//                                 type: svc.type,
//                                 name: svc.name,
//                                 total: svc.total,
//                                 domainInfo: svc.domainInfo,
//                                 hostingInfo: svc.hostingInfo
//                             }
//                         });
//                         // Map the created ID for receipt binding
//                         if (svc.name === 'Thiết kế Web') createdServiceIds.set('WEB_DESIGN', created.id);
//                         if (svc.name === 'Nâng cấp Web') createdServiceIds.set('WEB_UPGRADE', created.id);
//                     }

//                     // --- RECEIPTS (Moved DOWN & Restored from Backup) ---
//                     for (const stage of data.receipts) {
//                         // Look inside our memory backup, because DB might be empty now due to cascade
//                         const exitstingReceipt = backupReceipts.find(r => r.name === stage.name);

//                         const matchingServiceId = createdServiceIds.get(stage.serviceKey) || null;

//                         if (exitstingReceipt) {
//                             // Recreate it, but inject its OLD paidDate! (Since it was cascaded/deleted, we MUST use create)
//                             await tx.receipt.create({
//                                 data: {
//                                     contractId: contract.id,
//                                     serviceId: matchingServiceId,
//                                     name: stage.name,
//                                     amount: stage.amount,
//                                     order: stage.order,
//                                     receiptCode: base.receiptCode,
//                                     paidDate: exitstingReceipt.paidDate // <--- PRESERVES HISTORICAL DATE
//                                 }
//                             });
//                         } else {
//                             // Truly new receipt stage
//                             await tx.receipt.create({
//                                 data: {
//                                     contractId: contract.id,
//                                     serviceId: matchingServiceId,
//                                     name: stage.name,
//                                     amount: stage.amount,
//                                     order: stage.order,
//                                     receiptCode: base.receiptCode,
//                                     paidDate: base.submissionDate // <--- NEW DATE FROM EXCEL
//                                 }
//                             });
//                         }
//                     }

//                     // 4. Update total paid and remaining based on ALL receipts
//                     const allReceipts = await tx.receipt.findMany({ where: { contractId: contract.id } });
//                     const totalPaidAmount = allReceipts.reduce((sum, r) => sum + Number(r.amount || 0), 0);

//                     await tx.contracts.update({
//                         where: { id: contract.id },
//                         data: {
//                             paidAmount: totalPaidAmount,
//                             remainingAmount: Number(base.totalAmount || 0) - totalPaidAmount
//                         }
//                     });
//                 });

//                 successCount++;
//             } catch (err: any) {
//                 errors.push({ row: data.rowNumber, contractCode: data.contractCode, message: err.message });
//             }
//         }

//         await this.prisma.import_History.create({
//             data: {
//                 fileName: file.originalname,
//                 uploadById: userId,
//                 module: 'CONTRACT',
//                 totalRows: flatRows.length,
//                 successRows: successCount,
//                 failedRows: contractGroups.size - successCount,
//                 status: successCount === contractGroups.size ? 'SUCCESS' : 'PARTIAL',
//                 errorLog: errors.length > 0 ? (JSON.stringify(errors) as any) : undefined,
//             }
//         });

//         return {
//             message: 'Kết quả nhập dữ liệu',
//             totalGroups: contractGroups.size,
//             success: successCount,
//             failed: contractGroups.size - successCount,
//             errors: errors
//         };