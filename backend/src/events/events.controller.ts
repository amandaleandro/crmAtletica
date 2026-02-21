import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('events')
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	@Get()
	findAll() {
		return this.eventsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.eventsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.eventsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.eventsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.eventsService.remove(id);
	}
}
