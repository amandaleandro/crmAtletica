import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LedgerEntry } from '../modules/ledger_entry.entity';

@Injectable()
export class LedgerService {
	constructor(
		@InjectRepository(LedgerEntry)
		private ledgerRepository: Repository<LedgerEntry>,
	) {}

	async findAll(): Promise<LedgerEntry[]> {
		return this.ledgerRepository.find();
	}

	async findOne(id: number): Promise<LedgerEntry> {
		const entry = await this.ledgerRepository.findOne({ where: { id } });
		if (!entry) throw new NotFoundException('Lançamento não encontrado');
		return entry;
	}

	async create(data: Partial<LedgerEntry>): Promise<LedgerEntry> {
		const entry = this.ledgerRepository.create(data);
		return this.ledgerRepository.save(entry);
	}

	async update(id: number, data: Partial<LedgerEntry>): Promise<LedgerEntry> {
		await this.findOne(id);
		await this.ledgerRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.findOne(id);
		await this.ledgerRepository.delete(id);
	}
}
