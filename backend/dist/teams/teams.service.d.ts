import { Repository } from 'typeorm';
import { Team } from '../modules/team.entity';
export declare class TeamsService {
    private teamsRepository;
    constructor(teamsRepository: Repository<Team>);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    create(data: Partial<Team>): Promise<Team>;
    update(id: number, data: Partial<Team>): Promise<Team>;
    remove(id: number): Promise<void>;
}
