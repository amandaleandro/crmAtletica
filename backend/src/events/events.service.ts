import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../modules/event.entity';

@Injectable()
export class EventsService {
	constructor(
		@InjectRepository(Event)
		private eventsRepository: Repository<Event>,
	) {}

	async findAll(): Promise<Event[]> {
		return this.eventsRepository.find();
	}

	async findOne(id: number): Promise<Event> {
		const event = await this.eventsRepository.findOne({ where: { id } });
		if (!event) throw new NotFoundException('Evento não encontrado');
		return event;
	}

	async create(data: Partial<Event>): Promise<Event> {
		const event = this.eventsRepository.create(data);
		return this.eventsRepository.save(event);
	}

	async update(id: number, data: Partial<Event>): Promise<Event> {
		await this.findOne(id);
		await this.eventsRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.eventsRepository.delete(id);
	}
}
