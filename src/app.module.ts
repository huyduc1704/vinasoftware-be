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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    AuthModule,
    EmployeesModule,
    RegionsModule,
    CustomersModule,
    ContractsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
