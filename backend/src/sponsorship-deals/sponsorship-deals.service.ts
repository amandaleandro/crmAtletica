import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SponsorshipDeal } from '../modules/sponsorship_deal.entity';

@Injectable()
export class SponsorshipDealsService {
	constructor(
		@InjectRepository(SponsorshipDeal)
		private dealsRepository: Repository<SponsorshipDeal>,
	) {}

	async findAll(): Promise<SponsorshipDeal[]> {
		return this.dealsRepository.find();
	}

	async findOne(id: number): Promise<SponsorshipDeal> {
		const deal = await this.dealsRepository.findOne({ where: { id } });
		if (!deal) throw new NotFoundException('Negociação não encontrada');
		return deal;
	}

	async create(data: Partial<SponsorshipDeal>): Promise<SponsorshipDeal> {
		const deal = this.dealsRepository.create(data);
		return this.dealsRepository.save(deal);
	}

	async update(id: number, data: Partial<SponsorshipDeal>): Promise<SponsorshipDeal> {
		await this.findOne(id);
		await this.dealsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.dealsRepository.delete(id);
	}
}
