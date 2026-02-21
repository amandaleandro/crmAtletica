import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sport } from '../modules/sport.entity';

@Injectable()
export class SportsService {
	constructor(
		@InjectRepository(Sport)
		private sportsRepository: Repository<Sport>,
	) {}

	async findAll(): Promise<Sport[]> {
		return this.sportsRepository.find();
	}

	async findOne(id: number): Promise<Sport> {
		const sport = await this.sportsRepository.findOne({ where: { id } });
		if (!sport) throw new NotFoundException('Modalidade não encontrada');
		return sport;
	}

	async create(data: Partial<Sport>): Promise<Sport> {
		const sport = this.sportsRepository.create(data);
		return this.sportsRepository.save(sport);
	}

	async update(id: number, data: Partial<Sport>): Promise<Sport> {
		await this.findOne(id);
		await this.sportsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.sportsRepository.delete(id);
	}
}
