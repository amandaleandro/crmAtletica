// src/integrations/qrcode.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('api/integrations/qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post('generate')
  async generate(@Body() body: { data: string }) {
    const image = await this.qrcodeService.generate(body.data);
    return { image };
  }
}
