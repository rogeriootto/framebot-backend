import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'framedata' })
export class Framedata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  charid: number;

  @Column({ nullable: true })
  button: string;

  @Column({ nullable: true })
  startup: number;

  @Column({ nullable: true })
  recovery: number;

  @Column({ nullable: true })
  onblock: number;

  @Column({ nullable: true })
  totalframes: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  damage: number;

  @Column({ nullable: true })
  isinvul: boolean;

  @Column({ nullable: true })
  imgsrc: string;

  @Column({ nullable: true })
  activeframes: number;
}

