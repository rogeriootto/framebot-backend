import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'characters' })
export class Characters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  gameid: number;

  @Column({ nullable: true })
  name: string;
}


