import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    findAll(): Promise<import("../modules/team.entity").Team[]>;
    findOne(id: number): Promise<import("../modules/team.entity").Team>;
    create(body: any): Promise<import("../modules/team.entity").Team>;
    update(id: number, body: any): Promise<import("../modules/team.entity").Team>;
    remove(id: number): Promise<void>;
}
