import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Member } from './member.entity';
import { Role } from './role.entity';

@Entity('member_roles')
export class MemberRole {
  @PrimaryColumn('uuid')
  member_id: string;

  @PrimaryColumn()
  role_id: number;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
