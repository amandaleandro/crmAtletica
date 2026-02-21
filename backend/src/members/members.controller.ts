import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MembersService } from './members.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('members')
export class MembersController {
	constructor(private readonly membersService: MembersService) {}

	@Get()
	findAll() {
		return this.membersService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.membersService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.membersService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() body: any) {
		return this.membersService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.membersService.remove(id);
	}
}
