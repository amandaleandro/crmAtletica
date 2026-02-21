// src/events/event.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;
}
