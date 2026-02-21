// src/attendance/attendance.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  training_id: string;

  @Column()
  member_id: string;

  @Column({ default: false })
  present: boolean;

  @Column({ nullable: true })
  checked_in_at: string;

  @CreateDateColumn()
  created_at: Date;
}
