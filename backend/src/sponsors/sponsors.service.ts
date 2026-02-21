import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sponsor } from '../modules/sponsor.entity';

@Injectable()
export class SponsorsService {
	constructor(
		@InjectRepository(Sponsor)
		private sponsorsRepository: Repository<Sponsor>,
	) {}

	async findAll(): Promise<Sponsor[]> {
		return this.sponsorsRepository.find();
	}

	async findOne(id: number): Promise<Sponsor> {
		const sponsor = await this.sponsorsRepository.findOne({ where: { id } });
		if (!sponsor) throw new NotFoundException('Patrocinador não encontrado');
		return sponsor;
	}

	async create(data: Partial<Sponsor>): Promise<Sponsor> {
		const sponsor = this.sponsorsRepository.create(data);
		return this.sponsorsRepository.save(sponsor);
	}

	async update(id: number, data: Partial<Sponsor>): Promise<Sponsor> {
		await this.findOne(id);
		await this.sponsorsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.sponsorsRepository.delete(id);
	}
}
