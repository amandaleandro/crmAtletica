// src/integrations/qrcode.service.ts
import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class QrcodeService {
  async generate(data: string): Promise<string> {
    // Retorna o QR Code em base64 (data:image/png)
    return QRCode.toDataURL(data);
  }
}
