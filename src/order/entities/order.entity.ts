import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '테이블 번호' })
  @Column({
    nullable: false
  })
  table: number;

  @ApiProperty({ description: '연락처' })
  @Column({
    nullable: false
  })
  phone: string;

  @ApiProperty({ description: '입금자명' })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({ description: '주문 목록' })
  @Column({
    nullable: false
  })
  orderList: string;

  @ApiProperty({ description: '총 가격' })
  @Column({
    nullable: false
  })
  totalPrice: number;

  @ApiProperty({ description: '주문 상태' })
  @Column({
    nullable: false
  })
  state: number;

  @ApiProperty({ description: '회원 확인' })
  @Column({
    nullable: true
  })
  user: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}