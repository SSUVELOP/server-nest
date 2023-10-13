import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '이름' })
  name: string;

  @ApiProperty({ description: '가격' })
  price: number;
  
  @ApiProperty({ description: '평균 조리시간' })
  cooktime: number;
}
