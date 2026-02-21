import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async register(email: string, password: string) {
		const existing = await this.usersService.findByEmail(email);
		if (existing) throw new ConflictException('Email já cadastrado');
		const hash = await bcrypt.hash(password, 10);
		const user = await this.usersService.create({ email, password: hash });
		return { id: user.id, email: user.email };
	}

	async login(email: string, password: string) {
		const user = await this.usersService.findByEmail(email);
		if (!user) throw new UnauthorizedException('Credenciais inválidas');
		const valid = await bcrypt.compare(password, user.password);
		if (!valid) throw new UnauthorizedException('Credenciais inválidas');
		const payload = { sub: user.id, email: user.email };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
