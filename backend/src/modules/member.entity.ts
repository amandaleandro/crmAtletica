import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column({ nullable: true })
  course: string;

  @Column({ nullable: true })
  period: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: 'ativo' })
  status: string;

  @Column('text', { array: true, nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
