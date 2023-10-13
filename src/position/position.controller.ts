import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PositionEntity } from './entities/position.entity';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  @ApiOperation({ summary: '주문 등록 API', description: '주문을 등록한다' })
  @ApiCreatedResponse({ description: '주문을 등록한다', type: CreatePositionDto })
  async create(@Body() createPositionDto: CreatePositionDto): Promise<PositionEntity> {
    return this.positionService.create(createPositionDto);
  }

  @Get()
  async findAll(): Promise<PositionEntity[]> {
    return this.positionService.findAll();
  }

  @Patch()
  async updateAll(@Body() positions: PositionEntity[]) {
    return this.positionService.updateAll(positions);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePositionDto: UpdatePositionDto): Promise<PositionEntity> {
    return this.positionService.updateById(id, updatePositionDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.positionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto) {
  //   return this.positionService.update(+id, updatePositionDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.positionService.remove(id);
  }
}
