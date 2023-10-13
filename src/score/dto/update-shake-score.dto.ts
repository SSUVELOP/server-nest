import { ApiProperty } from "@nestjs/swagger";

export class UpdateShakeScoreDto {

  @ApiProperty({ description: '닉네임' })
  name: string;

  @ApiProperty({ description: '흔들어라' })
  shake: number;
}
