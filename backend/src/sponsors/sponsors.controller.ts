import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('sponsors')
export class SponsorsController {
	constructor(private readonly sponsorsService: SponsorsService) {}

	@Get()
	findAll() {
		return this.sponsorsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.sponsorsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.sponsorsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.sponsorsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.sponsorsService.remove(id);
	}
}
