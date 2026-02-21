import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UiCustomization } from '../modules/ui-customization.entity';
import { UiCustomizationService } from './ui-customization.service';
import { UiCustomizationController } from './ui-customization.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UiCustomization])],
  providers: [UiCustomizationService],
  controllers: [UiCustomizationController],
  exports: [UiCustomizationService],
})
export class UiCustomizationModule {}
