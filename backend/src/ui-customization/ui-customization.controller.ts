import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { UiCustomizationService } from './ui-customization.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ui-customization')
export class UiCustomizationController {
  constructor(private readonly uiCustomizationService: UiCustomizationService) {}

  @Get(':role')
  async getByRole(@Param('role') role: string) {
    const config = await this.uiCustomizationService.findByRole(role);
    if (!config) throw new Error('Config not found');
    return config;
  }

  @Post()
  async createOrUpdate(@Body() body: { role: string; config: Record<string, any> }) {
    return this.uiCustomizationService.createOrUpdate(body.role, body.config);
  }

  @Get('/me/config')
  async getMyConfig(@Req() req) {
    const user = req.user;
    const roles = user?.roles || [];
    // Busca a configuração do primeiro papel do usuário
    if (roles.length === 0) throw new Error('No role found');
    const config = await this.uiCustomizationService.findByRole(roles[0]);
    if (!config) throw new Error('Config not found');
    return config;
  }
}
