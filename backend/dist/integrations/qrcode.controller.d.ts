import { QrcodeService } from './qrcode.service';
export declare class QrcodeController {
    private readonly qrcodeService;
    constructor(qrcodeService: QrcodeService);
    generate(body: {
        data: string;
    }): Promise<{
        image: string;
    }>;
}
