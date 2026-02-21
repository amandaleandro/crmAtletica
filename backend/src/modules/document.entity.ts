import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column()
  type: string;

  @Column()
  url: string;

  @Column({ type: 'date', nullable: true })
  validUntil: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date;
}
