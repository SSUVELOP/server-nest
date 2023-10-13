import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuAmountDto, UpdateMenuDto } from './dto/update-menu.dto';

import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { MenuEntity } from './entities/menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: '메뉴 추가 API', description: '메뉴를 추가한다' })
  @ApiCreatedResponse({ description: '메뉴를 추가한다', type: MenuEntity })
  async create(@Body() menu: MenuEntity): Promise<MenuEntity> {
    return this.menuService.create(menu);
  }

  @Get()
  async findAll(): Promise<MenuEntity[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Patch('/amountById/:id')
  updateAmountById(@Param('id') id: number, @Body() updateMenuAmountDto: UpdateMenuAmountDto) {
    return this.menuService.updateAmountById(id, updateMenuAmountDto);
  }

  @Patch('/calcAmountById/:id')
  calcAmountById(@Param('id') id: number, @Body() updateMenuAmountDto: UpdateMenuAmountDto) {
    return this.menuService.calcAmountById(id, updateMenuAmountDto);
  }

  @Delete()
  @ApiOperation({ summary: '메뉴 초기화 API', description: '메뉴를 전부 삭제한다.' })
  @ApiCreatedResponse({ description: '메뉴 전부 삭제한다.', type: MenuEntity })
  async removeAll() {
    return this.menuService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
