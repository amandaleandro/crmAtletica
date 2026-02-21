import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {
	constructor(private readonly paymentsService: PaymentsService) {}

	@Get()
	findAll() {
		return this.paymentsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.paymentsService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.paymentsService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.paymentsService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.paymentsService.remove(id);
	}
}
