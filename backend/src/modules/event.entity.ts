import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @CreateDateColumn()
  createdAt: Date;
}
