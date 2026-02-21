import { Member } from './member.entity';
import { Role } from './role.entity';
export declare class MemberRole {
    member_id: string;
    role_id: number;
    member: Member;
    role: Role;
}
