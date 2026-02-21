import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../modules/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	async findByEmail(email: string): Promise<User | undefined> {
		const user = await this.usersRepository.findOne({ where: { email } });
		return user === null ? undefined : user;
	}

	async create(userData: Partial<User>): Promise<User> {
		const user = this.usersRepository.create(userData);
		return this.usersRepository.save(user);
	}
}
