import { Test, TestingModule } from '@nestjs/testing';
import { SponsorshipDealsService } from './sponsorship-deals.service';

describe('SponsorshipDealsService', () => {
  let service: SponsorshipDealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SponsorshipDealsService],
    }).compile();

    service = module.get<SponsorshipDealsService>(SponsorshipDealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
