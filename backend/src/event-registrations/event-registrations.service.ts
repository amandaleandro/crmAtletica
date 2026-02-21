import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventRegistration } from '../modules/event_registration.entity';

@Injectable()
export class EventRegistrationsService {
	constructor(
		@InjectRepository(EventRegistration)
		private registrationsRepository: Repository<EventRegistration>,
	) {}

	async findAll(): Promise<EventRegistration[]> {
		return this.registrationsRepository.find();
	}

	async findOne(id: number): Promise<EventRegistration> {
		const reg = await this.registrationsRepository.findOne({ where: { id } });
		if (!reg) throw new NotFoundException('Inscrição não encontrada');
		return reg;
	}

	async create(data: Partial<EventRegistration>): Promise<EventRegistration> {
		const reg = this.registrationsRepository.create(data);
		return this.registrationsRepository.save(reg);
	}

	async update(id: number, data: Partial<EventRegistration>): Promise<EventRegistration> {
		await this.findOne(id);
		await this.registrationsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.registrationsRepository.delete(id);
	}
}
