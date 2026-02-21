import { Repository } from 'typeorm';
import { Member } from '../modules/member.entity';
export declare class MembersService {
    private membersRepository;
    constructor(membersRepository: Repository<Member>);
    findAll(): Promise<Member[]>;
    findOne(id: string): Promise<Member>;
    create(data: Partial<Member>): Promise<Member>;
    update(id: string, data: Partial<Member>): Promise<Member>;
    remove(id: string): Promise<void>;
}
