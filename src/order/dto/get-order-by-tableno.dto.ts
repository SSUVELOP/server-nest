import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OrderByTableNoDTO {
  @ApiProperty({ description: '테이블 번호' })
  table: number;
}
