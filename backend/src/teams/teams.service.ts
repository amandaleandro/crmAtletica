import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../modules/team.entity';

@Injectable()
export class TeamsService {
	constructor(
		@InjectRepository(Team)
		private teamsRepository: Repository<Team>,
	) {}

	async findAll(): Promise<Team[]> {
		return this.teamsRepository.find({ relations: ['sport'] });
	}

	async findOne(id: number): Promise<Team> {
		const team = await this.teamsRepository.findOne({ where: { id }, relations: ['sport'] });
		if (!team) throw new NotFoundException('Time não encontrado');
		return team;
	}

	async create(data: Partial<Team>): Promise<Team> {
		const team = this.teamsRepository.create(data);
		return this.teamsRepository.save(team);
	}

	async update(id: number, data: Partial<Team>): Promise<Team> {
		await this.findOne(id);
		await this.teamsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.teamsRepository.delete(id);
	}
}
