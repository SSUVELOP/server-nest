import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { OrderEntity } from './entities/order.entity';
import { OrderByTableNoDTO } from './dto/get-order-by-tableno.dto';
import { UpdateOrderDto, UpdateOrderStateByIdDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>
  ) { }

  async create(order: OrderEntity): Promise<OrderEntity> {
    const newOrder = this.orderRepository.create(order);
    return await this.orderRepository.save(newOrder);
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.orderRepository.find();
  }

  getTableOrder(orderDTO: OrderByTableNoDTO): Promise<OrderEntity[]> {
    return this.orderRepository.find({where: {table: orderDTO.table}});
  }


  findOne(id: number): Promise<OrderEntity> {
    return this.orderRepository.findOne({where: {id: id}});
  }

  async updateById(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOne({
      where: {
        id: id
      }
    });

    const newOrder = {
      ...order,
      ...updateOrderDto,
    };

    return await this.orderRepository.save(newOrder);
  }
  
  async updateStateById(id: number, updateOrderStateByIdDto: UpdateOrderStateByIdDto) {
    const order = await this.orderRepository.findOne({
      where: {
        id: id
      }
    });

    const newOrder = {
      ...order,
      ...updateOrderStateByIdDto,
    };

    return await this.orderRepository.save(newOrder);
  }

  removeAll() {
    return this.orderRepository.clear();
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
