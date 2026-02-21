import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from './team.entity';

@Entity('trainings')
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column({ type: 'date' })
  date: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  description: string;
}
