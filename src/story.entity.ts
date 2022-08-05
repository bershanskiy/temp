import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  fullDescription: string;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  category: number;
}
