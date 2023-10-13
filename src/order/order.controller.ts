import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrderService } from './order.service';

import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { OrderEntity } from './entities/order.entity';
import { OrderByTableNoDTO } from './dto/get-order-by-tableno.dto';
import { UpdateOrderDto, UpdateOrderStateByIdDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: '주문 등록 API', description: '주문을 등록한다' })
  @ApiCreatedResponse({ description: '주문을 등록한다', type: OrderEntity })
  async create(@Body() order: OrderEntity): Promise<OrderEntity> {
    return this.orderService.create(order);
  }

  @Get()
  async findAll(): Promise<OrderEntity[]> {
    return this.orderService.findAll();
  }

  @Post('/table')
  @ApiOperation({ summary: '테이블 주문 목록 가져오기 API', description: '해당 테이블 주문 목록을 가져온다' })
  @ApiCreatedResponse({ description: '해당 테이블 주문 목록을 가져온다', type: OrderEntity })
  async getTableOrder(@Body() orderDTO: OrderByTableNoDTO): Promise<OrderEntity[]> {
    return this.orderService.getTableOrder(orderDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orderService.findOne(id);
  }

  @Patch('/id/:id')
  update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateById(id, updateOrderDto);
  }

  @Patch('/stateById/:id')
  updatestateById(@Param('id') id: number, @Body() updateOrderStateByIdDto: UpdateOrderStateByIdDto) {
    return this.orderService.updateStateById(id, updateOrderStateByIdDto);
  }

  @Delete()
  @ApiOperation({ summary: '주문 초기화 API', description: '주문을 전부 삭제한다.' })
  @ApiCreatedResponse({ description: '주문을 전부 삭제한다.', type: OrderEntity })
  async removeAll() {
    return this.orderService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
