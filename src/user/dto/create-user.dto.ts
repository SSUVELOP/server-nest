import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  
  @ApiProperty({ description: '회원 학번'})
  stdID: string;

  @ApiProperty({ description: '회원 비밀번호'})
  password: string;

  @ApiProperty({ description: '회원 이름'})
  name: string;

  @ApiProperty({ description: '회원 닉네임'})
  nickname: string;
}
