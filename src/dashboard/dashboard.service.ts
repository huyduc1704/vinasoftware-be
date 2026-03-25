import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) { }

  async getStats() {

    // 1. Tổng số nhân viên đang hoạt động
    const totalEmployees = await this.prisma.employee.count({
      where: { isActive: true },
    });

    // 2. Tổng số khu vực
    const totalRegions = await this.prisma.region.count();

    // 3. Thống kê Hợp đồng và Khách hàng
    const totalCustomers = await this.prisma.customer.count();
    const activeContracts = await this.prisma.contracts.count({
      where: { status: 'ACTIVE' }
    });
    const pendingContracts = await this.prisma.contracts.count({
      where: { status: 'PENDING' }
    });
    const completedContracts = await this.prisma.contracts.count({
      where: { status: 'COMPLETED' }
    });

    // Tính toán tăng trưởng 
    //Tạm thời để logic Growth dựa trên tổng số lượng mới trong tháng này
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const newCustomersThisMonth = await this.prisma.customer.count({
      where: { createdAt: { gte: startOfMonth } }
    });

    return {
      totalEmployees: {
        value: totalEmployees,
        growth: '+2.1%', // Có thể tính bằng cách count (createdAt < startOfMonth)
        trend: 'up'
      },
      totalRegions: {
        value: totalRegions,
        growth: '0%',
        trend: 'neutral'
      },
      activeContracts: {
        value: activeContracts,
        growth: '+5.4%',
        trend: 'up',
      },
      pendingContracts: {
        value: pendingContracts,
        growth: 'Cần xử lý',
        trend: 'neutral',
      },
      completedContracts: {
        value: completedContracts,
        growth: 'Đã hoàn thành',
        trend: 'up',
      },
      newClients: {
        value: totalCustomers,
        growth: `+${newCustomersThisMonth} trong tháng`,
        trend: 'up',
      },
      serverUpTime: {
        value: '99.99%',
        growth: 'Ổn định',
        trend: 'up',
      },
    };
  }

  async getFeaturedEmployees() {
    // Lấy top 5 nhân viên mới nhất hoặc có nhiều hợp đồng nhất
    return this.prisma.employee.findMany({
      where: { isActive: true },
      take: 5,
      orderBy: { joinDate: 'desc' },
      select: {
        id: true,
        employeeCode: true,
        fullName: true,
        roleCode: true,
        joinDate: true,
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getRevenueChart() {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(currentYear, 0, 1);
    const endDate = new Date(currentYear, 11, 31, 23, 59, 59);

    // 1. Lấy dữ liệu Doanh thu (Hợp đồng đã ký/nộp trong năm)
    const contracts = await this.prisma.contracts.findMany({
      where: {
        OR: [
          { signDate: { gte: startDate, lte: endDate } },
          {
            AND: [
              { signDate: null },
              { submissionDate: { gte: startDate, lte: endDate } },
            ],
          },
        ],
      },
      select: {
        totalAmount: true,
        signDate: true,
        submissionDate: true,
      },
    });

    // 2. Lấy dữ liệu Thực thu (Các phiếu thu đã được thanh toán hoặc tạo trong năm)
    const receipts = await this.prisma.receipt.findMany({
      where: {
        OR: [
          { paidDate: { gte: startDate, lte: endDate } },
          {
            AND: [
              { paidDate: null },
              { createdAt: { gte: startDate, lte: endDate } },
            ],
          },
        ],
      },
      select: {
        amount: true,
        paidDate: true,
        createdAt: true,
      },
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const chartData = months.map((month) => ({
      name: month,
      doanhThu: 0,
      thucThu: 0,
    }));

    // Tính Doanh thu (Dựa trên ngày ký hoặc ngày nộp)
    contracts.forEach((contract) => {
      const targetDate = contract.signDate || contract.submissionDate;
      if (targetDate) {
        const monthIndex = new Date(targetDate).getMonth();
        chartData[monthIndex].doanhThu += Number(contract.totalAmount || 0);
      }
    });

    // Tính Thực thu (Dựa trên ngày thanh toán thực tế hoặc ngày tạo phiếu thu)
    receipts.forEach((receipt) => {
      const targetDate = receipt.paidDate || receipt.createdAt;
      if (targetDate) {
        const monthIndex = new Date(targetDate).getMonth();
        chartData[monthIndex].thucThu += Number(receipt.amount || 0);
      }
    });

    return chartData;
  }
}
