import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger('HttpExceptionFilter');

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest<Request>();
        let status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = exception instanceof HttpException
            ? exception.getResponse()
            : { message: (exception as Error).message || 'Internal server error' };
        let message = typeof exceptionResponse === 'object' && 'message' in exceptionResponse
            ? exceptionResponse['message']
            : exceptionResponse;
        if (exception.code === 'P2025') {
            status = HttpStatus.NOT_FOUND;
            message = 'Không tìm thấy dữ liệu yêu cầu';
        } else if (exception.code === 'P2002') {
            status = HttpStatus.BAD_REQUEST;
            message = `Dữ liệu bị trùng lặp: ${exception.meta?.target || ''}`;
        } else if (exception.code === 'P2003') {
            status = HttpStatus.BAD_REQUEST;
            message = 'Lỗi liên kết dữ liệu (Dữ liệu liên quan không tồn tại)';
        } else if (!(exception instanceof HttpException)) {
            message = 'Có lỗi hệ thống xảy ra, vui lòng thử lại sau';
        }
        // Nếu là HttpException của Nest (như lỗi Validation), lấy message chi tiết
        if (exception instanceof HttpException) {
            const res = exception.getResponse();
            message = typeof res === 'object' && (res as any).message ? (res as any).message : res;
        }

        this.logger.error(
            `${request.method} 
            ${request.url} 
            ${status} - Error: ${JSON.stringify(message)}`,
            exception instanceof Error ? exception.stack : '',
        );

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: message,
        });
    }
}