import { MembersService } from './members.service';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    findAll(): Promise<import("../modules/member.entity").Member[]>;
    findOne(id: string): Promise<import("../modules/member.entity").Member>;
    create(body: any): Promise<import("../modules/member.entity").Member>;
    update(id: string, body: any): Promise<import("../modules/member.entity").Member>;
    remove(id: string): Promise<void>;
}
