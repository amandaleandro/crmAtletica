import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { SportsService } from './sports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('sports')
export class SportsController {
	constructor(private readonly sportsService: SportsService) {}

	@Get()
	findAll() {
		return this.sportsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.sportsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.sportsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.sportsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.sportsService.remove(id);
	}
}
