import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UiCustomization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @Column('jsonb')
  config: Record<string, any>;
}
