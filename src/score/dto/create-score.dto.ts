import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  
  @ApiProperty({ description: '전화번호' })
  phone: string;

  @ApiProperty({ description: '닉네임' })
  name: string;

  @ApiProperty({ description: '부숴라' })
  break: string;

  @ApiProperty({ description: '흔들어라' })
  shake: string;

  @ApiProperty({ description: '집중해라' })
  concentrate: string;
}
