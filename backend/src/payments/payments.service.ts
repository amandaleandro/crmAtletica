import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from '../modules/payment.entity';

@Injectable()
export class PaymentsService {
	constructor(
		@InjectRepository(Payment)
		private paymentsRepository: Repository<Payment>,
	) {}

	async findAll(): Promise<Payment[]> {
		return this.paymentsRepository.find();
	}

	async findOne(id: number): Promise<Payment> {
		const payment = await this.paymentsRepository.findOne({ where: { id } });
		if (!payment) throw new NotFoundException('Pagamento não encontrado');
		return payment;
	}

	async create(data: Partial<Payment>): Promise<Payment> {
		const payment = this.paymentsRepository.create(data);
		return this.paymentsRepository.save(payment);
	}

	async update(id: number, data: Partial<Payment>): Promise<Payment> {
		await this.findOne(id);
		await this.paymentsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.paymentsRepository.delete(id);
	}
}
