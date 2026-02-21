import { SportsService } from './sports.service';
export declare class SportsController {
    private readonly sportsService;
    constructor(sportsService: SportsService);
    findAll(): Promise<import("../modules/sport.entity").Sport[]>;
    findOne(id: number): Promise<import("../modules/sport.entity").Sport>;
    create(body: any): Promise<import("../modules/sport.entity").Sport>;
    update(id: number, body: any): Promise<import("../modules/sport.entity").Sport>;
    remove(id: number): Promise<void>;
}
