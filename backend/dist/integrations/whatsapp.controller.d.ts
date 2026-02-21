import { WhatsappService } from './whatsapp.service';
export declare class WhatsappController {
    private readonly whatsappService;
    constructor(whatsappService: WhatsappService);
    send(body: {
        phone: string;
        message: string;
    }): Promise<any>;
}
