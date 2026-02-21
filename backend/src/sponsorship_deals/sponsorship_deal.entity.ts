// src/sponsorship_deals/sponsorship_deal.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class SponsorshipDeal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sponsor_name: string;

  @Column({ default: 'lead' })
  status: string;

  @Column('numeric', { nullable: true })
  value: number;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;
}
