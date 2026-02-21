import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UiCustomization } from '../modules/ui-customization.entity';

@Injectable()
export class UiCustomizationService {
  constructor(
    @InjectRepository(UiCustomization)
    private uiCustomizationRepository: Repository<UiCustomization>,
  ) {}

  async findByRole(role: string): Promise<UiCustomization | undefined> {
    const config = await this.uiCustomizationRepository.findOne({ where: { role } });
    return config === null ? undefined : config;
  }

  async findAll(): Promise<UiCustomization[]> {
    return this.uiCustomizationRepository.find();
  }

  async createOrUpdate(role: string, config: Record<string, any>): Promise<UiCustomization> {
    let entity = await this.findByRole(role);
    if (entity) {
      entity.config = config;
    } else {
      entity = this.uiCustomizationRepository.create({ role, config });
    }
    return this.uiCustomizationRepository.save(entity);
  }
}
