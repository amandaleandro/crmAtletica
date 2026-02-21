import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from '../modules/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private assetsRepository: Repository<Asset>,
  ) {}

  async findAll(): Promise<Asset[]> {
    return this.assetsRepository.find({ relations: ['responsible'] });
  }

  async findOne(id: number): Promise<Asset | undefined> {
    const asset = await this.assetsRepository.findOne({ where: { id }, relations: ['responsible'] });
    return asset === null ? undefined : asset;
  }

  async create(data: Partial<Asset>): Promise<Asset> {
    const asset = this.assetsRepository.create(data);
    return this.assetsRepository.save(asset);
  }

  async update(id: number, data: Partial<Asset>): Promise<Asset> {
    await this.assetsRepository.update(id, data);
    const updated = await this.findOne(id);
    if (!updated) throw new Error('Asset not found');
    return updated;
  }

  async remove(id: number): Promise<void> {
    await this.assetsRepository.delete(id);
  }
}
