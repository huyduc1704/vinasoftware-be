import {
    Controller,
    Get,
    Post,
    Query,
    Res,
    UploadedFile,
    UseInterceptors,
    UseGuards,
    Req
} from '@nestjs/common';
import { ExcelService } from './excel.service';
import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { format } from 'path';

@ApiTags('Excel Integration')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/excel')
export class ExcelController {
    constructor(private readonly excelService: ExcelService) { }

    @ApiOperation({ summary: 'Xuất danh sách nhân viên ra file Excel' })
    @Get('export/employees')
    async exportEmployees(@Res() res: Response, @Query() filter: any) {
        return this.excelService.exportEmployees(res, filter);
    }

    @ApiOperation({ summary: 'Xuất báo cáo hợp đồng theo tháng/năm' })
    @Get('export/contracts')
    async exportContracts(
        @Res() res: Response,
        @Query('month') month?: string,
        @Query('year') year?: string
    ) {
        const m = month ? parseInt(month) : undefined;
        const y = year ? parseInt(year) : undefined;
        return this.excelService.exportContracts(res, m, y);
    }

    @ApiOperation({ summary: 'Nhập nhân viên hàng loạt từ file Excel' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @Post('import/employees')
    @UseInterceptors(FileInterceptor('file'))
    async importEmployees(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: any
    ) {
        const userId = req.user.id;
        return this.excelService.importEmployees(file, userId);
    }

    @ApiOperation({ summary: 'Nhập hợp đồng từ file Excel' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @Post('import/contracs')
    @UseInterceptors(FileInterceptor('file'))
    async importContracts(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: any
    ) {
        const userId = req.user.id;
        return this.excelService.importContracts(file, userId);
    }
}