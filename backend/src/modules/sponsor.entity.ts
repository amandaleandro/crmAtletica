import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('sponsors')
export class Sponsor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  contact: string;

  @CreateDateColumn()
  createdAt: Date;
}
