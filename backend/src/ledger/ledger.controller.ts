import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { LedgerService } from './ledger.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ledger')
export class LedgerController {
	constructor(private readonly ledgerService: LedgerService) {}

	@Get()
	findAll() {
		return this.ledgerService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.ledgerService.findOne(id);
	}

	@Post()
	create(@Body() body: any) {
		return this.ledgerService.create(body);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() body: any) {
		return this.ledgerService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.ledgerService.remove(id);
	}
}
