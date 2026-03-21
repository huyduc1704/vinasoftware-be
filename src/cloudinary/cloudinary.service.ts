import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse, UploadApiOptions } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
    /**
    *   Upload file lên cloudinary
    * @param file File ảnh lấy từ Multer
    * @param folder Tên thư mục trên Cloudinary (VD: 'avatars', 'contracts')
    * @param options Cấu hình thêm (VD: ép kích thước ảnh)
    */

    async uploadImage(
        file: Express.Multer.File,
        folder: string = 'vinasoftware',
        options?: UploadApiOptions,
    ): Promise<UploadApiResponse> {
        return new Promise((resolve, reject) => {
            const uploadOptions: UploadApiOptions = {
                folder: folder,
                ...options
            };
            const upload = cloudinary.uploader.upload_stream(
                uploadOptions,
                (error, result) => {
                    if (error) return reject(error);
                    if (result) {
                        resolve(result);
                    } else {
                        reject(new Error('Không nhận được kết quả từ Cloudinary'));
                    }
                },
            );
            toStream(file.buffer).pipe(upload);
        });
    }

    /**
    *   Xóa file trên cloudinary
    * @param publicId ID của file trên Cloudinary (Lấy từ uploadImage)
    */
    async deleteImage(publicId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.destroy(publicId, { invalidate: true }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
        });
    }
}