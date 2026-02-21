import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { SponsorsController } from './sponsors.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from '../modules/sponsor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsor])],
  controllers: [SponsorsController]
})
export class SponsorsModule {}
