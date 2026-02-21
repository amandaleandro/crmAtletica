// src/integrations/integrations.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WhatsappService } from './whatsapp.service';
import { WhatsappController } from './whatsapp.controller';
import { PixService } from './pix.service';
import { PixController } from './pix.controller';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { QrcodeService } from './qrcode.service';
import { QrcodeController } from './qrcode.controller';

@Module({
  imports: [HttpModule],
  providers: [WhatsappService, PixService, CalendarService, QrcodeService],
  controllers: [WhatsappController, PixController, CalendarController, QrcodeController],
})
export class IntegrationsModule {}
