// src/payments/payment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  member_id: string;

  @Column({ nullable: true })
  event_id: string;

  @Column('numeric')
  amount: number;

  @Column({ nullable: true })
  due_date: string;

  @Column({ default: false })
  paid: boolean;

  @Column({ nullable: true })
  paid_at: string;

  @Column({ nullable: true })
  proof_url: string;

  @CreateDateColumn()
  created_at: Date;
}
