import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
    Body,
    Delete
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody, ApiOperation } from '@nestjs/swagger';
import { CloudinaryService } from './cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';

@ApiTags('cloudinary')
@Controller('/api/cloudinary')
export class UploadController {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        private readonly prisma: PrismaService
    ) { }
    @Post('image')
    @ApiOperation({ summary: 'Upload file lên Cloudinary và lưu vào DB' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary'
                },
                employeeId: {
                    type: 'string',
                    description: 'ID Nhân viên (Optional)'
                },
                contractId: {
                    type: 'string',
                    description: 'ID Hợp đồng (Optional)'
                },
                category: {
                    type: 'string',
                    description: 'Loại ảnh (AVATAR, ID_FRONT, ID_BACK, CONTRACT_DOC,....',
                    example: 'AVATAR'
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file', {
        limits: { fileSize: 5 * 1024 * 1024 } // Giới hạn 5MB
    }))
    async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('employeeId') employeeId?: string,
        @Body('contractId') contractId?: string,
        @Body('category') category: string = 'OTHERS',
    ) {
        try {
            //validate file existed
            if (!file) {
                throw new BadRequestException('Không có file nào được tải lên');
            }
            //Validate MIME type
            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
            if (!allowedTypes.includes(file.mimetype)) {
                throw new BadRequestException('Định dạng file không hợp lệ (Chỉ nhân JPG, PNG, WEBP, PDF)');
            }
            //validate logic of relationship (Chỉ 1 trong 2)
            if (employeeId && contractId) {
                throw new BadRequestException('File chỉ được liên kết với nhân viên hoặc hợp đồng, không được cả hai');
            }

            //Định nghĩa folder structure
            const subFolder = employeeId ? 'employees' : (contractId ? 'contracts' : 'others');
            const folder = `vinasoftware/${subFolder}`;

            console.log(`[Upload] Starting upload for file: ${file.originalname}, folder: ${folder}`);
            const result = await this.cloudinaryService.uploadImage(file, folder);
            console.log(`[Upload] Cloudinary upload success: ${result.secure_url}`);

            //Luu vao Db
            const savedFile = await this.prisma.files.create({
                data: {
                    fileName: file.originalname,
                    filePath: result.secure_url,
                    publicId: result.public_id,
                    fileType: file.mimetype,
                    category: category || 'OTHERS',
                    employeeId: employeeId || null,
                    contractId: contractId || null,
                }
            });
            console.log(`[Upload] DB save success, ID: ${savedFile.id}`);
            return savedFile;
        } catch (error) {
            console.error('[Upload Error]', error);
            throw error; // Rethrow to maintain standard error response
        }
    }

    @ApiOperation({ summary: 'Xóa file trên Cloudinary bằng public_id' })
    @Delete('image')
    async deleteFile(@Body('public_id') publicId: string, @Body('fileId') fileId?: string) {
        if (!publicId) throw new BadRequestException('Thiếu public_id');
        //Xóa trên Cloudinary
        await this.cloudinaryService.deleteImage(publicId);
        //Xóa trong db nếu có fileId
        if (fileId) {
            await this.prisma.files.delete({ where: { id: fileId } });
        }
        return { message: 'Đã xóa file thành công' };
    }
}
