import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Event } from './event.entity';
import { Member } from './member.entity';

@Entity('event_registrations')
export class EventRegistration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column({ default: 'inscrito' })
  status: string;

  @Column({ default: false })
  checkIn: boolean;

  @Column({ type: 'timestamp', nullable: true })
  checkInAt: Date;
}
