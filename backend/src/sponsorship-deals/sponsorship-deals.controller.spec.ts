import { Test, TestingModule } from '@nestjs/testing';
import { SponsorshipDealsController } from './sponsorship-deals.controller';

describe('SponsorshipDealsController', () => {
  let controller: SponsorshipDealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SponsorshipDealsController],
    }).compile();

    controller = module.get<SponsorshipDealsController>(SponsorshipDealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
