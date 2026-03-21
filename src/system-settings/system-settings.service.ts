import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SystemSettingsService {
    constructor(private readonly prisma: PrismaService) { }

    //Lấy toàn bộ config để render web
    async getAll() {
        const settings = await this.prisma.system_Settings.findMany();

        //Chuyển Array thành Object cho FE dễ sử dụng (VD: "FOOTER_TITLE" : "...", "WEBSITE_LOGO":"...")
        return settings.reduce((acc, curr) => {
            acc[curr.key] = curr.value;
            return acc;
        }, {});
    }

    //Update 1 config, nếu có rồi thì update, nếu chưa thì insert
    async upsertSetting(key: string, value: string, description?: string) {
        return this.prisma.system_Settings.upsert({
            where: { key },
            update: { value, description },
            create: { key, value, description },
        });
    }

    //Cập nhật nhiều config cùng lúc
    async bulkUpsert(settings: { key: string, value: string; description?: string }[]) {
        return this.prisma.$transaction(
            settings.map((item) => this.prisma.system_Settings.upsert({
                where: { key: item.key },
                update: { value: item.value, description: item.description },
                create: { key: item.key, value: item.value, description: item.description },
            }))
        );
    }

    async deleteSettings(keys: string[]) {
        return this.prisma.system_Settings.deleteMany({
            where: {
                key: { in: keys }
            }
        });
    }
}   