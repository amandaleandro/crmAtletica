import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column()
  type: string; // email, whatsapp, etc

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  sentAt: Date;
}
