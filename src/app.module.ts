import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { RegionsModule } from './regions/regions.module';
import { CustomersModule } from './customers/customers.module';
import { ContractsModule } from './contracts/contracts.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { SystemSettingsModule } from './system-settings/system-settings.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExcelModule } from './excel/excel.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    AuthModule,
    EmployeesModule,
    RegionsModule,
    CustomersModule,
    ContractsModule,
    RolesModule,
    PermissionsModule,
    CloudinaryModule,
    SystemSettingsModule,
    DashboardModule,
    ExcelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
