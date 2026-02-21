import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    findAll(): Promise<import("../modules/payment.entity").Payment[]>;
    findOne(id: number): Promise<import("../modules/payment.entity").Payment>;
    create(body: any): Promise<import("../modules/payment.entity").Payment>;
    update(id: number, body: any): Promise<import("../modules/payment.entity").Payment>;
    remove(id: number): Promise<void>;
}
