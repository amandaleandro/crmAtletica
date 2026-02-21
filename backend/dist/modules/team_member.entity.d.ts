import { Team } from './team.entity';
import { Member } from './member.entity';
export declare class TeamMember {
    team_id: number;
    member_id: string;
    team: Team;
    member: Member;
    role: string;
    joinedAt: Date;
}
