import { Repository } from 'typeorm';
import { SponsorshipDeal } from '../modules/sponsorship_deal.entity';
export declare class SponsorshipDealsService {
    private dealsRepository;
    constructor(dealsRepository: Repository<SponsorshipDeal>);
    findAll(): Promise<SponsorshipDeal[]>;
    findOne(id: number): Promise<SponsorshipDeal>;
    create(data: Partial<SponsorshipDeal>): Promise<SponsorshipDeal>;
    update(id: number, data: Partial<SponsorshipDeal>): Promise<SponsorshipDeal>;
    remove(id: number): Promise<void>;
}
