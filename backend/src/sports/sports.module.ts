import { Module } from '@nestjs/common';
import { SportsService } from './sports.service';
import { SportsController } from './sports.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from '../modules/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sport])],
  providers: [SportsService],
  controllers: [SportsController],
})
export class SportsModule {}
