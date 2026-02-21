// src/documents/document.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  member_id: string;

  @Column()
  type: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  valid_until: string;

  @CreateDateColumn()
  uploaded_at: Date;
}
