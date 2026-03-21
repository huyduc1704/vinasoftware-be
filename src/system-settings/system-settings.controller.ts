import { Controller, Get, Post, Body, UseGuards, UseInterceptors, UploadedFile, BadRequestException, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { SystemSettingsService } from './system-settings.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { BulkUpdateSettingsDto } from './dto/bulk-update.dto';

@ApiTags('Quản lý CMS Web')
@Controller('api/system-settings')
export class SystemSettingsController {
    constructor(
        private readonly systemSettingsService: SystemSettingsService,
        private readonly cloudinaryService: CloudinaryService
    ) { }

    @ApiOperation({ summary: 'Lấy toàn bộ config hiển thị ngoài web (Public API)' })
    @Get()
    getAll() {
        return this.systemSettingsService.getAll();
    }

    //API dưới đây chỉ có Admin được truy cập
    @ApiOperation({ summary: 'Lưu cấu hình Text (Footer, Text, Thông số,...)' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post('text')
    saveTextSetting(@Body() dto: BulkUpdateSettingsDto) {
        return this.systemSettingsService.bulkUpsert(dto.settings);
    }

    // ------LOGO------
    @ApiOperation({ summary: 'Upload Logo Website (Lưu public_id vào DB)' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post('upload-logo')
    @UseInterceptors(FileInterceptor('file'))
    async uploadLogo(@UploadedFile() file: Express.Multer.File) {
        if (!file) throw new BadRequestException('Chưa chọn file');

        const result = await this.cloudinaryService.uploadImage(file, 'vinasoftware_cms', {
            width: 200, height: 100, crop: 'fit'
        });

        //Lưu đồng thời URL và Public ID
        await Promise.all([
            this.systemSettingsService.upsertSetting('WEBSITE_LOGO_URL', result.secure_url, 'Logo URL'),

            this.systemSettingsService.upsertSetting('WEBSITE_LOGO_PUBLIC_ID', result.public_id, 'Logo Public ID trên Cloudinary')
        ]);
        return { message: 'Cập nhật logo thành công', url: result.secure_url, public_id: result.public_id };
    }

    @ApiOperation({ summary: 'Xóa Logo trong Database' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Delete('logo')
    async deleteLogo() {
        await this.systemSettingsService.deleteSettings(['WEBSITE_LOGO_URL', 'WEBSITE_LOGO_PUBLIC_ID']);
        return { message: 'Xóa logo thành công' };
    }


    //------FAVICON------
    @ApiOperation({ summary: 'Upload Favicon (Lưu kèm Public ID)' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post('upload-favicon')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFavicon(@UploadedFile() file: Express.Multer.File) {
        if (!file) throw new BadRequestException('Chưa chọn file');

        const result = await this.cloudinaryService.uploadImage(file, 'vinasoftware_cms', {
            width: 48, height: 48, crop: 'fill', gravity: 'center'
        });
        await Promise.all([
            this.systemSettingsService.upsertSetting('WEBSITE_FAVICON_URL', result.secure_url, 'Favicon URL'),
            this.systemSettingsService.upsertSetting('WEBSITE_FAVICON_PUBLIC_ID', result.public_id, 'Favicon Public ID trên Cloudinary')
        ]);
        return { message: 'Cập nhật Favicon thành công', url: result.secure_url, public_id: result.public_id };
    }

    @ApiOperation({ summary: 'Xóa Favicon trong Database' })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Delete('favicon')
    async deleteFavicon() {
        await this.systemSettingsService.deleteSettings(['WEBSITE_FAVICON_URL', 'WEBSITE_FAVICON_PUBLIC_ID']);
        return { message: 'Xóa favicon thành công' };
    }

}

