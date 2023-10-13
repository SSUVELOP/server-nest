import { ApiProperty } from "@nestjs/swagger";

export class UpdateConcentrateScoreDto {

  @ApiProperty({ description: '닉네임' })
  name: string;

  @ApiProperty({ description: '집중해라' })
  concentrate: number;
}
