import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { EventRegistrationsService } from './event-registrations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('event-registrations')
export class EventRegistrationsController {
	constructor(private readonly registrationsService: EventRegistrationsService) {}

	@Get()
	findAll() {
		return this.registrationsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.registrationsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.registrationsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.registrationsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.registrationsService.remove(id);
	}
}
