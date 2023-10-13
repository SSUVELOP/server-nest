import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}

export class UpdateMenuAmountDto {
  @ApiProperty({ description: '남은 양' })
  amount: number;
}