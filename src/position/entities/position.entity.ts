import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'position' })
export class PositionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '프롭 타입' })
  @Column({
    nullable: false
  })
  type: string;

  @ApiProperty({ description: '프롭 정보' })
  @Column({
    nullable: false
  })
  json: string;
}
