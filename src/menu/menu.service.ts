import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuAmountDto, UpdateMenuDto } from './dto/update-menu.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MenuEntity } from './entities/menu.entity';

@Injectable()
export class MenuService {
  
  constructor(
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>
  ) { }

  async create(menu: MenuEntity): Promise<MenuEntity> {
    const newMenu = this.menuRepository.create(menu);
    return await this.menuRepository.save(newMenu);
  }

  async findAll(): Promise<MenuEntity[]> {
    return this.menuRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  async updateAmountById(id: number, updateMenuAmountDto: UpdateMenuAmountDto) {
    const menu = await this.menuRepository.findOne({
      where: {
        id: id
      }
    });

    const newMenu = {
      ...menu,
      ...updateMenuAmountDto,
    };

    return await this.menuRepository.save(newMenu);
  }

  async calcAmountById(id: number, updateMenuAmountDto: UpdateMenuAmountDto) {
    const menu = await this.menuRepository.findOne({
      where: {
        id: id
      }
    });

    const newUpdateMenuAmountDto = {
      amount: menu.amount + updateMenuAmountDto.amount,
    }

    const newMenu = {
      ...menu,
      ...newUpdateMenuAmountDto,
    };

    return await this.menuRepository.save(newMenu);
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  removeAll() {
    return this.menuRepository.clear();
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
