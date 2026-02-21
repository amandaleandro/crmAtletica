import { Repository } from 'typeorm';
import { Sport } from '../modules/sport.entity';
export declare class SportsService {
    private sportsRepository;
    constructor(sportsRepository: Repository<Sport>);
    findAll(): Promise<Sport[]>;
    findOne(id: number): Promise<Sport>;
    create(data: Partial<Sport>): Promise<Sport>;
    update(id: number, data: Partial<Sport>): Promise<Sport>;
    remove(id: number): Promise<void>;
}
