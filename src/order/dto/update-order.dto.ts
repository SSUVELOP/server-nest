import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}

export class UpdateOrderStateByIdDto {
  @ApiProperty({ description: '주문 목록' })
  orderList: string;
  
  @ApiProperty({ description: '주문 상태' })
  state: number;
}