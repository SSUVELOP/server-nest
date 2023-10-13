import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity({ name: 'score' })
export class ScoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '전화번호' })
  @Column({
    nullable: false
  })
  phone: string;

  @ApiProperty({ description: '닉네임' })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({ description: '부숴라' })
  @Column({
    nullable: false
  })
  break: number;

  @ApiProperty({ description: '흔들어라' })
  @Column({
    nullable: false
  })
  shake: number;

  @ApiProperty({ description: '집중해라' })
  @Column('decimal', { precision: 6, scale: 2 })
  concentrate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}