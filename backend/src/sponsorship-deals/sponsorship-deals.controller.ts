import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { SponsorshipDealsService } from './sponsorship-deals.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('sponsorship-deals')
export class SponsorshipDealsController {
	constructor(private readonly dealsService: SponsorshipDealsService) {}

	@Get()
	findAll() {
		return this.dealsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.dealsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.dealsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.dealsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.dealsService.remove(id);
	}
}
