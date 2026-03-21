import { Test, TestingModule } from "@nestjs/testing";
import { ExcelService } from './excel.service';
import { PrismaService } from '../prisma/prisma.service';
import * as ExcelJS from 'exceljs';

jest.mock('exceljs');

describe('ExcelService - importContracts', () => {
    let service: ExcelService;
    let prisma: PrismaService;

    const mockPrisma = {
        contracts: {
            findUnique: jest.fn(),
            update: jest.fn().mockResolvedValue({ id: 'con-1' }),
            create: jest.fn().mockResolvedValue({ id: 'con-1' })
        },
        employee: {
            findFirst: jest.fn().mockResolvedValue({ id: 'emp-1' }),
            findUnique: jest.fn()
        },
        customer: {
            findFirst: jest.fn(),
            create: jest.fn().mockResolvedValue({ id: 'cus-1' }),
            update: jest.fn().mockResolvedValue({ id: 'cus-1' }),
            upsert: jest.fn().mockResolvedValue({ id: 'cus-1' })
        },
        import_History: {
            create: jest.fn().mockResolvedValue({})
        },
        service: {
            findMany: jest.fn().mockResolvedValue([]), // Thiếu cái này là tẻo nè
            deleteMany: jest.fn().mockResolvedValue({}),
            create: jest.fn().mockResolvedValue({})
        },
        paymentStage: {
            deleteMany: jest.fn().mockResolvedValue({}),
            create: jest.fn().mockResolvedValue({})
        },
        contract_Employees: {
            deleteMany: jest.fn().mockResolvedValue({}),
            create: jest.fn().mockResolvedValue({})
        },
        domain: { deleteMany: jest.fn().mockResolvedValue({}) },
        hosting: { deleteMany: jest.fn().mockResolvedValue({}) },
        $transaction: jest.fn(cb => cb(mockPrisma)),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ExcelService,
                { provide: PrismaService, useValue: mockPrisma },
            ],
        }).compile();

        service = module.get<ExcelService>(ExcelService);
        prisma = module.get<PrismaService>(PrismaService);
        jest.clearAllMocks();
    });

    it('Nên flatten dữ liệu từ ô Merged và lưu thành công', async () => {
        const createMockRow = (data: Record<number, any>) => ({
            getCell: jest.fn((col: number) => ({
                value: data[col] !== undefined ? data[col] : null
            }))
        });


        const mockRows = [
            createMockRow({}), createMockRow({}), createMockRow({}),
            createMockRow({ 5: 'HD-999', 2: 'VNS001', 9: 5000, 29: 'Khách A' }),
            createMockRow({ 5: null, 9: 1000 }),
        ];

        const mockWorksheet = {
            eachRow: jest.fn((arg1, arg2) => {
                const cb = typeof arg1 === 'function' ? arg1 : arg2;
                mockRows.forEach((row, i) => cb(row, i + 1));
            }),
        };

        const mockWorkbookInstance = {
            xlsx: { load: jest.fn().mockResolvedValue(null) },
            getWorksheet: jest.fn(() => mockWorksheet),
        };

        (ExcelJS.Workbook as jest.Mock).mockImplementation(() => mockWorkbookInstance);

        // Giả lập là đã có hợp đồng này trong DB để nó chạy vào nhánh Update
        (prisma.contracts.findUnique as jest.Mock).mockResolvedValue({ id: 'con-1' });

        const mockFile = { buffer: Buffer.from('fake') } as any;
        const result = await service.importContracts(mockFile, 'admin-id');

        // KIỂM TRA LẠI
        if (result.success === 0) {
            console.log('Lỗi chi tiết nè bạn:', result.errors);
        }

        expect(result.success).toBeGreaterThan(0);
        expect(mockPrisma.contracts.update).toHaveBeenCalled();
    });
});
