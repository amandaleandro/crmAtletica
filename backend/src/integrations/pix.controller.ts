// src/integrations/pix.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { PixService } from './pix.service';

@Controller('api/integrations/pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post('generate')
  generate(@Body() body: { chave: string; valor: number; nome: string; cidade: string; infoAdicional?: string }) {
    const payload = this.pixService.generatePayload(body);
    return { payload };
  }
}
