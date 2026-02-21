import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SponsorshipDealsService } from './sponsorship-deals.service';
import { SponsorshipDealsController } from './sponsorship-deals.controller';
import { SponsorshipDeal } from '../modules/sponsorship_deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SponsorshipDeal])],
  providers: [SponsorshipDealsService],
  controllers: [SponsorshipDealsController],
})
export class SponsorshipDealsModule {}
