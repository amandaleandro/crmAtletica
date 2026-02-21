import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Training } from './training.entity';
import { Member } from './member.entity';

@Entity('attendance')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Training)
  @JoinColumn({ name: 'training_id' })
  training: Training;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column({ default: false })
  present: boolean;

  @Column({ type: 'timestamp', nullable: true })
  checkedInAt: Date;
}
