import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('teams')
export class TeamsController {
	constructor(private readonly teamsService: TeamsService) {}

	@Get()
	findAll() {
		return this.teamsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.teamsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.teamsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.teamsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.teamsService.remove(id);
	}
}
