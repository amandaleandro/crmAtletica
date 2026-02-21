import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('sports')
export class Sport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  coach: string;

  @CreateDateColumn()
  createdAt: Date;
}
