import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from './member.entity';
import { Event } from './event.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Event, { nullable: true })
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'date', nullable: true })
  dueDate: string;

  @Column({ default: false })
  paid: boolean;

  @Column({ type: 'timestamp', nullable: true })
  paidAt: Date;

  @Column({ nullable: true })
  proofUrl: string;
}
