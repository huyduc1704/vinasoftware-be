import { Test, TestingModule } from '@nestjs/testing';
import { ContractsService } from './contracts.service';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { ContractType, ContractStatus, ServiceType } from '@prisma/client';

describe('ContractsService', () => {
    let service: ContractsService;
    let prisma: PrismaService;

    const mockPrisma = {
        contracts: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },

        customer: {
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        employee: {
            findMany: jest.fn(),
        },
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

        jest.clearAllMocks();
    });

    describe('create', () => {
        const userId = 'user-123';
        const baseDto: any = {
            contractCode: 'HD001',
            title: 'Hợp đồng Web',
            type: ContractType.WEB,
            status: ContractStatus.ACTIVE,
        };

        it('nên báo lỗi UnauthorizedException nếu không có userId', async () => {
            await expect(service.create(baseDto, '')).rejects.toThrow(UnauthorizedException);
        });

        it('nên tạo hợp đồng thành công với customerId có sẵn', async () => {
            const dto = { ...baseDto, customerId: 'cust-123' };
            const mockContract = { id: 'contract-123', ...dto };

            (prisma.contracts.create as jest.Mock).mockResolvedValue(mockContract);

            const result = await service.create(dto, userId);

            expect(result).toEqual(mockContract);
            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    customerId: 'cust-123',
                    contractCode: 'HD001'
                })
            }));
        });

        it('nên tạo khách hàng mới nếu không có customerId nhưng có customerData', async () => {
            const dto = {
                ...baseDto,
                customerData: { fullName: 'Công ty A', phone: '0987654321' }
            };

            const mockCustomer = { id: 'cust-new', fullName: 'Công ty A' };

            (prisma.customer.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.customer.create as jest.Mock).mockResolvedValue(mockCustomer);
            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123', ...baseDto });

            await service.create(dto, userId);

            expect(prisma.customer.create).toHaveBeenCalledWith({ data: dto.customerData });

            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    customerId: 'cust-new'
                })
            }));
        });

        it('nên dùng khách hàng cũ nếu tìm thấy qua số điện thoại', async () => {
            const dto = {
                ...baseDto,
                customerData: { fullName: 'Công ty A Update', phone: '0123' }
            };

            const existingCustomer = { id: 'cust-old', phone: '0123' };

            (prisma.customer.findFirst as jest.Mock).mockResolvedValue(existingCustomer);
            (prisma.customer.update as jest.Mock).mockResolvedValue({ ...existingCustomer, fullName: 'Công ty A Update' });
            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123' });

            await service.create(dto, userId);

            expect(prisma.customer.update).toHaveBeenCalledWith({
                where: { id: 'cust-old' },
                data: dto.customerData
            });

            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    customerId: 'cust-old'
                })
            }));
        });

        it('nên giải quyết mã nhân viên sang ID thật', async () => {
            const dto = {
                ...baseDto,
                customerId: 'cust-123',
                employees: [{ employeeId: 'NV001', isMain: true }]
            };
            const mockEmployee = { id: 'emp-uuid-001', employeeCode: 'NV001' };

            (prisma.employee.findMany as jest.Mock).mockResolvedValue([mockEmployee]);
            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123' });

            await service.create(dto, userId);

            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    contractEmployees: {
                        create: [{
                            employeeId: 'emp-uuid-001',
                            isMain: true
                        }]
                    }
                })
            }));
        });

        it('nên báo lỗi BadRequestException nếu sai mã nhân viên', async () => {
            const dto = {
                ...baseDto,
                employees: [{ employeeId: 'SAI_MA', isMain: true }]
            };

            (prisma.employee.findMany as jest.Mock).mockResolvedValue([]);

            await expect(service.create(dto, userId)).rejects.toThrow(BadRequestException);
        });

        it('nên tự động tính toán tổng tiền từ danh sách dịch vụ', async () => {
            const dto = {
                ...baseDto,
                customerId: 'cust-123',
                services: [
                    { type: ServiceType.WEB, name: 'Web', totalAmount: 1000 },
                    { type: ServiceType.DOMAIN, name: 'Domain', totalAmount: 500 }
                ]
            };

            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123' });

            await service.create(dto, userId);

            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    totalAmount: 1500,
                    remainingAmount: 1500,
                    paidAmount: 0
                })
            }));
        });

        it('nên tính toán số tiền còn lại dựa trên danh sách phiếu thu', async () => {
            const dto = {
                ...baseDto,
                customerId: 'cust-123',
                totalAmount: 5000,
                receipts: [
                    { name: 'Lần 1', amount: 2000 },
                    { name: 'Lần 2', amount: 1000 }
                ]
            };

            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123' });

            await service.create(dto, userId);

            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    totalAmount: 5000,
                    paidAmount: 3000,
                    remainingAmount: 2000
                })
            }));
        });
    });

    describe('findOne', () => {
        it('nên trả về thông tin hợp đồng kèm receiptCode', async () => {
            const mockContract = {
                id: '1',
                receipts: [{ receiptCode: 'PT01' }, { receiptCode: null }]
            };

            (prisma.contracts.findUnique as jest.Mock).mockResolvedValue(mockContract);

            const result = await service.findOne('1');

            expect(result).toEqual({ ...mockContract, receiptCode: 'PT01' });
        });

        it('nên trả về null nếu không tìm thấy', async () => {
            (prisma.contracts.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await service.findOne('999');

            expect(result).toBeNull();
        });
    });

    describe('create - Các trường hợp ngoại lệ & lỗi nghiệp vụ', () => {
        const userId = 'user-123';
        const baseDto: any = {
            contractCode: 'HD_ERROR',
            title: 'Hợp đồng lỗi',
            type: ContractType.WEB,
        };
        it('nên báo lỗi nếu không truyền cả customerId lẫn customerData', async () => {
            const dto = { ...baseDto };
            // Giả lập lỗi Prisma ném ra khi thiếu khóa ngoại (customerId)
            (prisma.contracts.create as jest.Mock).mockRejectedValue({ code: 'P2003' });
            await expect(service.create(dto, userId)).rejects.toBeDefined();
        });
        it('nên xử lý được khi danh sách nhân viên bị trống', async () => {
            const dto = { ...baseDto, customerId: 'cust-123', employees: [] };
            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-ok' });
            const result = await service.create(dto, userId);

            expect(result).toBeDefined();
            expect(prisma.contracts.create).toHaveBeenCalled();
        });
        it('nên báo lỗi BadRequestException nếu một trong các mã nhân viên không tồn tại', async () => {
            const dto = {
                ...baseDto,
                employees: [
                    { employeeId: 'NV_TON_TAI', isMain: true },
                    { employeeId: 'NV_AO', isMain: false }
                ]
            };
            // Trả về mảng chỉ có 1 nhân viên (trong khi DTO yêu cầu 2) -> Sẽ kích hoạt lỗi BadRequest
            (prisma.employee.findMany as jest.Mock).mockResolvedValue([{ id: 'uuid-1', employeeCode: 'NV_TON_TAI' }]);
            await expect(service.create(dto, userId)).rejects.toThrow(BadRequestException);
        });
        it('nên xử lý được khi các services không có giá tiền (tránh lỗi NaN)', async () => {
            const dto = {
                ...baseDto,
                customerId: 'cust-123',
                services: [
                    { type: ServiceType.HOSTING, name: 'Hosting free' }
                ]
            };
            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123' });
            await service.create(dto, userId);
            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    totalAmount: 0,
                    remainingAmount: 0
                })
            }));
        });
        it('nên ưu tiên dùng số tiền người dùng tự nhập thay vì tự tính toán', async () => {
            const dto = {
                ...baseDto,
                customerId: 'cust-123',
                totalAmount: 5000,
                services: [
                    { type: ServiceType.WEB, name: 'Web', totalAmount: 10000 }
                ]
            };
            (prisma.contracts.create as jest.Mock).mockResolvedValue({ id: 'cont-123' });
            await service.create(dto, userId);
            expect(prisma.contracts.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({ totalAmount: 5000 })
            }));
        });
    });
});
