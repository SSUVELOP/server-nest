import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  
  @ApiProperty({ description: '테이블 번호' })
  table: number;

  @ApiProperty({ description: '연락처' })
  phone: string;

  @ApiProperty({ description: '입금자명' })
  name: string;

  @ApiProperty({ description: '주문 목록' })
  orderList: string;

  @ApiProperty({ description: '총 가격' })
  totalPrice: number;

  @ApiProperty({ description: '주문 상태' })
  state: number;

  @ApiProperty({ description: '회원 확인' })
  user: string;
}
