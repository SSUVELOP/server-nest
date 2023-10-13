import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '학번' })
  @Column({
    nullable: false
  })
  stdID: string;

  @ApiProperty({ description: '비밀번호' })
  @Column({
    nullable: false
  })
  password: string;

  @ApiProperty({ description: '이름' })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({ description: '닉네임' })
  @Column({
    nullable: true
  })
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}