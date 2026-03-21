import { Module } from '@nestjs/common';
import { SystemSettingsService } from './system-settings.service';
import { SystemSettingsController } from './system-settings.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module'; // File upload ảnh

@Module({
    imports: [PrismaModule, CloudinaryModule],
    controllers: [SystemSettingsController],
    providers: [SystemSettingsService],
})

export class SystemSettingsModule { }