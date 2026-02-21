// src/integrations/whatsapp.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WhatsappService {
  constructor(private readonly http: HttpService) {}

  async sendMessage(phone: string, message: string): Promise<any> {
    // Exemplo para Z-API
    const apiUrl = 'https://api.z-api.io/instance/SEU_INSTANCE/token/SEU_TOKEN/send-message';
    return this.http.post(apiUrl, {
      phone,
      message
    }).toPromise();
  }
}
