import { Entity, ManyToOne, JoinColumn, PrimaryColumn, Column } from 'typeorm';
import { Team } from './team.entity';
import { Member } from './member.entity';

@Entity('team_members')
export class TeamMember {
  @PrimaryColumn()
  team_id: number;

  @PrimaryColumn('uuid')
  member_id: string;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column({ nullable: true })
  role: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;
}
