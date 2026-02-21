import { SponsorsService } from './sponsors.service';
export declare class SponsorsController {
    private readonly sponsorsService;
    constructor(sponsorsService: SponsorsService);
    findAll(): Promise<import("../modules/sponsor.entity").Sponsor[]>;
    findOne(id: number): Promise<import("../modules/sponsor.entity").Sponsor>;
    create(body: any): Promise<import("../modules/sponsor.entity").Sponsor>;
    update(id: number, body: any): Promise<import("../modules/sponsor.entity").Sponsor>;
    remove(id: number): Promise<void>;
}
