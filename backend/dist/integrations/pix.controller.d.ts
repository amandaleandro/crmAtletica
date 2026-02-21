import { PixService } from './pix.service';
export declare class PixController {
    private readonly pixService;
    constructor(pixService: PixService);
    generate(body: {
        chave: string;
        valor: number;
        nome: string;
        cidade: string;
        infoAdicional?: string;
    }): {
        payload: string;
    };
}
