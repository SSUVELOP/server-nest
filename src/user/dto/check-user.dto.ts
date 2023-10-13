import { ApiProperty } from "@nestjs/swagger";

export class CheckUserDto {
  @ApiProperty({ description: '회원 학번'})
  stdID: string;

  @ApiProperty({ description: '회원 비밀번호'})
  password: string;
}
