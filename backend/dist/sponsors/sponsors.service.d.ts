import { Repository } from 'typeorm';
import { Sponsor } from '../modules/sponsor.entity';
export declare class SponsorsService {
    private sponsorsRepository;
    constructor(sponsorsRepository: Repository<Sponsor>);
    findAll(): Promise<Sponsor[]>;
    findOne(id: number): Promise<Sponsor>;
    create(data: Partial<Sponsor>): Promise<Sponsor>;
    update(id: number, data: Partial<Sponsor>): Promise<Sponsor>;
    remove(id: number): Promise<void>;
}
