import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { nullable: true })
  value: number;

  @Column({ type: 'date', nullable: true })
  acquisitionDate: Date;

  @Column({ default: 'ativo' })
  status: string;

  @Column({ nullable: true })
  location: string;

  @ManyToOne(() => User, { nullable: true })
  responsible: User;
}
