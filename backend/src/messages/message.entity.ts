// src/messages/message.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  member_id: string;

  @Column()
  type: string; // email, whatsapp, etc

  @Column()
  content: string;

  @CreateDateColumn()
  sent_at: Date;
}
