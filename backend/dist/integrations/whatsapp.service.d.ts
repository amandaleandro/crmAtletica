import { HttpService } from '@nestjs/axios';
export declare class WhatsappService {
    private readonly http;
    constructor(http: HttpService);
    sendMessage(phone: string, message: string): Promise<any>;
}
