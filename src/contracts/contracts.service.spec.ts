import { Test, TestingModule } from "@nestjs/testing";
import { ContractsService } from "./contracts.service";
import { PrismaService } from "../prisma/prisma.service"; // Dùng đường dẫn tương đối

describe('ContractsService', () => {
    let service: ContractsService;
    let prisma: PrismaService;

    // mockPrisma
    const mockPrisma = {
        contracts: { // Sửa lỗi chính tả từ constracts -> contracts
            findUnique: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
        },
        // Mock $transaction để support các hàm có dùng transaction
        $transaction: jest.fn((callback) => callback(mockPrisma)),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ContractsService,
                {
                    provide: PrismaService,
                    useValue: mockPrisma,
                },
            ],
        }).compile();

        service = module.get<ContractsService>(ContractsService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('Nên trả về thông tin hợp đồng khi tìm đúng ID', async () => {
        const mockId = 'uuid-123';
        const mockResult = { id: mockId, contractCode: 'HD001' };

        // Ép kiểu mock để sử dụng mockResolvedValue
        (prisma.contracts.findUnique as jest.Mock).mockResolvedValue(mockResult);

        const result = await service.findOne(mockId);

        expect(result).toEqual(mockResult);
        expect(prisma.contracts.findUnique).toHaveBeenCalledWith({
            where: { id: mockId },
            include: expect.anything(),
        });
    });

    it('Nên báo lỗi NotFoundException nếu không tìm thấy hợp đồng', async () => {
        (prisma.contracts.findUnique as jest.Mock).mockResolvedValue(null);

        // Kiểm tra xem nó có bắn ra lỗi lầm gì không
        await expect(service.findOne('sai-id')).rejects.toThrow();
    });
});
