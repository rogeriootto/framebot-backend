import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'games' })
export class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  imgurl: string;
}
