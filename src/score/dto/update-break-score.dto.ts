import { ApiProperty } from "@nestjs/swagger";

export class UpdateBreakScoreDto {

  @ApiProperty({ description: '닉네임' })
  name: string;

  @ApiProperty({ description: '부숴라' })
  break: number;
}
