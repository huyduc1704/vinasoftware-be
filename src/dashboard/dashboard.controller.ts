import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PermissionsGuard } from 'src/auth/guards/permissions.guard';
import { RequirePermissions } from 'src/auth/decorators/permissions.decorator';

@ApiTags('Dashboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('/api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @ApiOperation({ summary: 'Lấy các chỉ số thống kê tổng quan' })
  @RequirePermissions('DASHBOARD_VIEW', 'DASHBOARD_*')
  @Get('stats')
  getStats() {
    return this.dashboardService.getStats();
  }

  @ApiOperation({ summary: 'Lấy danh sách nhân viên nổi bật' })
  @RequirePermissions('DASHBOARD_VIEW', 'DASHBOARD_*')
  @Get('featured-employees')
  getFeaturedEmployees() {
    return this.dashboardService.getFeaturedEmployees();
  }

  @ApiOperation({ summary: 'Lấy dữ liệu biểu đồ doanh thu' })
  @RequirePermissions('DASHBOARD_VIEW', 'DASHBOARD_*')
  @Get('revenue-chart')
  getRevenueChart() {
    return this.dashboardService.getRevenueChart();
  }
}
