import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Asset } from '../modules/asset.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll(): Promise<Asset[]> {
    return this.assetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Asset> {
    const asset = await this.assetsService.findOne(Number(id));
    if (!asset) {
      // Você pode customizar para lançar um NotFoundException do NestJS
      throw new Error('Asset not found');
    }
    return asset;
  }

  @Post()
  create(@Body() data: Partial<Asset>): Promise<Asset> {
    return this.assetsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Asset>): Promise<Asset> {
    return this.assetsService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.assetsService.remove(Number(id));
  }
}
