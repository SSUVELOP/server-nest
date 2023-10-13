import { ApiProperty } from "@nestjs/swagger";

export class CheckUserDto {
  @ApiProperty({ description: '전화번호'})
  phone: string;
}
