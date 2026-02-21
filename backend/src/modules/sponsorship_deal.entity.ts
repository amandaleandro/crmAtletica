import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Sponsor } from './sponsor.entity';

@Entity('sponsorship_deals')
export class SponsorshipDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sponsor)
  @JoinColumn({ name: 'sponsor_id' })
  sponsor: Sponsor;

  @Column({ default: 'lead' })
  status: string; // lead, proposta, negociacao, fechado, perdido

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  value: number;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
