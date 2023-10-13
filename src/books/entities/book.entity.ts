import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity({ name: 'book' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  author: string;

  @Column({
    nullable: false
  })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}