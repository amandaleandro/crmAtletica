import { Sponsor } from './sponsor.entity';
export declare class SponsorshipDeal {
    id: number;
    sponsor: Sponsor;
    status: string;
    value: number;
    description: string;
    createdAt: Date;
}
