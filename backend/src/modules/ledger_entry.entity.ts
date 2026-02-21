import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('ledger_entries')
export class LedgerEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // entrada/saida

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @CreateDateColumn()
  createdAt: Date;
}
