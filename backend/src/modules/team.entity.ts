import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Sport } from './sport.entity';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sport)
  @JoinColumn({ name: 'sport_id' })
  sport: Sport;

  @Column()
  name: string;

  @Column({ nullable: true })
  category: string;

  @CreateDateColumn()
  createdAt: Date;
}
