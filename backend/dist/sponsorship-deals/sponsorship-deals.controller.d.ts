import { SponsorshipDealsService } from './sponsorship-deals.service';
export declare class SponsorshipDealsController {
    private readonly dealsService;
    constructor(dealsService: SponsorshipDealsService);
    findAll(): Promise<import("../modules/sponsorship_deal.entity").SponsorshipDeal[]>;
    findOne(id: number): Promise<import("../modules/sponsorship_deal.entity").SponsorshipDeal>;
    create(body: any): Promise<import("../modules/sponsorship_deal.entity").SponsorshipDeal>;
    update(id: number, body: any): Promise<import("../modules/sponsorship_deal.entity").SponsorshipDeal>;
    remove(id: number): Promise<void>;
}
