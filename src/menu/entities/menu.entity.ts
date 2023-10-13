import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'menu' })
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '메뉴 이름' })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({ description: '가격' })
  @Column({
    nullable: false
  })
  price: number;

  @ApiProperty({ description: '남은 양' })
  @Column({
    nullable: false
  })
  amount: number;
  
  @ApiProperty({ description: '평균 조리시간(초)' })
  @Column({
    nullable: false
  })
  cooktime: number;
}