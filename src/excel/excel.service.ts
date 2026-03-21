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
                paymentStages: true,
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

            // Extract Payment Stages
            const pmL1 = c.paymentStages?.find(p => p.name === 'Lần 1')?.amount || 0;
            const pmL2 = c.paymentStages?.find(p => p.name === 'Lần 2')?.amount || 0;
            const pmDelivery = c.paymentStages?.find(p => p.name === 'Bàn giao')?.amount || 0;

            worksheet.addRow({
                stt: rowIndex - 1,
                receiptCode: c.receiptCode || '',
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
                    employeeCode: row.getCell(1).text.trim(),
                    fullName: row.getCell(2).text.trim(),
                    email: row.getCell(3).text.trim(),
                    phone: row.getCell(4).text.trim(),
                    roleCode: row.getCell(5).text.trim(),
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
                    if (val instanceof Date) return val;
                    const text = parseCell(index);
                    if (!text) return null;
                    const parts = text.split('/');
                    if (parts.length === 3) return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
                    return new Date(text);
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
                const currentRow: any = {
                    receiptCode: receiptCode,
                    employeeCode: employeeCode,
                    employeeName: parseCell(4),
                    contractCode: parseCell(5),
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
            const allWeb = rows.some((r: any) => r.webTotal || r.webUpgrade);
            const allHost = rows.some((r: any) => r.hostingAmount);
            const allDom = rows.some((r: any) => r.domainAmount);
            if (allWeb) type = 'WEB';
            else if (allHost) type = 'HOSTING';
            else if (allDom) type = 'DOMAIN';

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
            const paymentStagesMap = new Map<string, any>();

            for (const r of rows) {
                if (r.webTotal || r.webUpgrade) {
                    const key = 'WEB';
                    if (!servicesMap.has(key)) {
                        servicesMap.set(key, {
                            type: 'WEB',
                            name: 'Thiết kế / Nâng cấp Web',
                            total: r.webTotal + r.webUpgrade,
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

                if (r.pmL1) paymentStagesMap.set('Lần 1', { name: 'Lần 1', amount: r.pmL1, order: 1 });
                if (r.pmL2) paymentStagesMap.set('Lần 2', { name: 'Lần 2', amount: r.pmL2, order: 2 });
                if (r.pmDelivery) paymentStagesMap.set('Bàn giao', { name: 'Bàn giao', amount: r.pmDelivery, order: 3 });
            }

            contractsToCreate.push({
                contractCode,
                baseRow: base,
                type,
                employees: Array.from(employeesMap.values()),
                services: Array.from(servicesMap.values()),
                paymentStages: Array.from(paymentStagesMap.values()),
                rowNumber: base.rowNumber
            });
        }

        // 3. Load Layer (Database)
        let successCount = 0;

        for (const data of contractsToCreate) {
            try {
                const base = data.baseRow;

                // 3.1 Resolving Customer
                let customer: any = null;
                if (base.customerPhone) {
                    customer = await this.prisma.customer.findFirst({ where: { phone: { contains: base.customerPhone } } });
                }
                if (!customer && base.customerEmail) {
                    customer = await this.prisma.customer.findFirst({ where: { email: base.customerEmail } });
                }
                if (!customer) {
                    customer = await this.prisma.customer.findFirst({ where: { fullName: base.customerName } });
                }

                if (!customer) {
                    customer = await this.prisma.customer.create({
                        data: {
                            fullName: base.customerName,
                            phone: base.customerPhone || null,
                            email: base.customerEmail || null,
                            taxCode: base.customerTaxCode || null,
                            address: base.customerAddress || null,
                        }
                    });
                } else {
                    customer = await this.prisma.customer.update({
                        where: { id: customer.id },
                        data: {
                            fullName: base.customerName,
                            phone: base.customerPhone || customer.phone,
                            email: base.customerEmail || customer.email,
                            taxCode: base.customerTaxCode || customer.taxCode,
                            address: base.customerAddress || customer.address,
                        }
                    });
                }

                // 3.2 Resolving Employees (Shared Contracts support)
                const dbEmployees: any[] = [];
                for (const empRaw of data.employees) {
                    let emp = await this.prisma.employee.findUnique({ where: { employeeCode: empRaw.employeeCode } });
                    if (emp) {
                        dbEmployees.push(emp);
                    } else {
                        errors.push({ row: data.rowNumber, contractCode: data.contractCode, message: `Lưu ý: Không tìm thấy nhân viên mã '${empRaw.employeeCode}' trong hệ thống. Vui lòng thêm nhân viên này trước!` });
                    }
                }

                // Main Manager uses the baseRow (first entry)
                let mainEmployee: any = dbEmployees.length > 0 ? dbEmployees[0] : null;

                let deptManager: any = null;
                if (base.deptManagerName) {
                    deptManager = await this.prisma.employee.findFirst({ where: { fullName: base.deptManagerName } });
                }

                const contractUpsertData = {
                    title: 'Hợp đồng ' + data.contractCode,
                    type: data.type,
                    receiptCode: base.receiptCode || null,
                    submissionDate: base.submissionDate || null,
                    totalAmount: base.totalAmount,
                    vatAmount: base.vatAmount,
                    paidAmount: base.paidAmount,
                    remainingAmount: base.remainingAmount,
                    features: base.features || null,
                    note: base.note || null,
                    regionCode: base.regionCode || null,
                    customerId: customer.id,
                    managerId: mainEmployee ? mainEmployee.id : undefined,
                    deptManagerId: deptManager ? deptManager.id : undefined,
                    createdById: userId,
                };

                // 3.3 Transaction execution
                await this.prisma.$transaction(async (tx) => {
                    const existingContract = await tx.contracts.findUnique({ where: { contractCode: data.contractCode } });
                    let contract;

                    if (existingContract) {
                        contract = await tx.contracts.update({
                            where: { contractCode: data.contractCode },
                            data: contractUpsertData
                        });
                        // Clean up child collections before recreating
                        const existingServices = await tx.service.findMany({ where: { contractId: contract.id }, select: { id: true } });
                        const serviceIds = existingServices.map(s => s.id);
                        if (serviceIds.length > 0) {
                            await tx.domain.deleteMany({ where: { serviceId: { in: serviceIds } } });
                            await tx.hosting.deleteMany({ where: { serviceId: { in: serviceIds } } });
                            await tx.service.deleteMany({ where: { id: { in: serviceIds } } });
                        }
                        await tx.paymentStage.deleteMany({ where: { contractId: contract.id } });
                        await tx.contract_Employees.deleteMany({ where: { contractId: contract.id } });
                    } else {
                        contract = await tx.contracts.create({
                            data: {
                                contractCode: data.contractCode,
                                ...contractUpsertData
                            }
                        });
                    }

                    if (dbEmployees.length > 0) {
                        await tx.contract_Employees.createMany({
                            data: dbEmployees.map((e: any, idx: number) => ({
                                contractId: contract.id,
                                employeeId: e.id,
                                isMain: idx === 0
                            }))
                        });
                    }

                    for (const svc of data.services) {
                        await tx.service.create({
                            data: {
                                contractId: contract.id,
                                type: svc.type,
                                name: svc.name,
                                total: svc.total,
                                domainInfo: svc.domainInfo,
                                hostingInfo: svc.hostingInfo
                            }
                        });
                    }

                    if (data.paymentStages.length > 0) {
                        await tx.paymentStage.createMany({
                            data: data.paymentStages.map((p: any) => ({ ...p, contractId: contract.id }))
                        });
                    }
                });

                successCount++;
            } catch (err: any) {
                errors.push({ row: data.rowNumber, contractCode: data.contractCode, message: err.message });
            }
        }

        await this.prisma.import_History.create({
            data: {
                fileName: file.originalname,
                uploadById: userId,
                module: 'CONTRACT',
                totalRows: flatRows.length,
                successRows: successCount,
                failedRows: contractGroups.size - successCount,
                status: successCount === contractGroups.size ? 'SUCCESS' : 'PARTIAL',
                errorLog: errors.length > 0 ? (JSON.stringify(errors) as any) : undefined,
            }
        });

        return {
            message: 'Kết quả nhập dữ liệu',
            totalGroups: contractGroups.size,
            success: successCount,
            failed: contractGroups.size - successCount,
            errors: errors
        };
    }
}