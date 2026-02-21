// src/integrations/pix.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PixService {
  // Gera payload Pix simples (copia e cola)
  generatePayload({ chave, valor, nome, cidade, infoAdicional }: {
    chave: string;
    valor: number;
    nome: string;
    cidade: string;
    infoAdicional?: string;
  }): string {
    // Exemplo básico (não homologado pelo BACEN, apenas ilustrativo)
    return `00020126360014BR.GOV.BCB.PIX0114${chave}520400005303986540${valor.toFixed(2)}5802BR5913${nome}6009${cidade}62070503***6304`;
  }
}
