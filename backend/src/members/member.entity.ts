// src/members/member.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
