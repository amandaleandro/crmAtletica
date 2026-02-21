import { Repository } from 'typeorm';
import { Payment } from '../modules/payment.entity';
export declare class PaymentsService {
    private paymentsRepository;
    constructor(paymentsRepository: Repository<Payment>);
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    create(data: Partial<Payment>): Promise<Payment>;
    update(id: number, data: Partial<Payment>): Promise<Payment>;
    remove(id: number): Promise<void>;
}
