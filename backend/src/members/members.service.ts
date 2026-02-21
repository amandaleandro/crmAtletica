import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../modules/member.entity';

@Injectable()
export class MembersService {
	constructor(
		@InjectRepository(Member)
		private membersRepository: Repository<Member>,
	) {}

	async findAll(): Promise<Member[]> {
		return this.membersRepository.find();
	}

	async findOne(id: string): Promise<Member> {
		const member = await this.membersRepository.findOne({ where: { id } });
		if (!member) throw new NotFoundException('Membro não encontrado');
		return member;
	}

	async create(data: Partial<Member>): Promise<Member> {
		const member = this.membersRepository.create(data);
		return this.membersRepository.save(member);
	}

	async update(id: string, data: Partial<Member>): Promise<Member> {
		await this.findOne(id);
		await this.membersRepository.update(id, data);
		return this.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.findOne(id);
		await this.membersRepository.delete(id);
	}
}
