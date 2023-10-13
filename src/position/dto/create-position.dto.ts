import { ApiProperty } from "@nestjs/swagger";

export class CreatePositionDto {
  @ApiProperty({ description: '프롭 타입' })
  type: string;

  @ApiProperty({ description: '프롭 정보' })
  json: string;
}
