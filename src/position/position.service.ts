import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PositionEntity } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private positionRepository: Repository<PositionEntity>
  ) { }

  async create(createPositionDto: CreatePositionDto): Promise<PositionEntity> {
    const newPosition = this.positionRepository.create(createPositionDto);
    return await this.positionRepository.save(newPosition);
  }

  async findAll(): Promise<PositionEntity[]> {
    return this.positionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  async updateAll(positions: PositionEntity[]): Promise<PositionEntity[]> {

    const result: PositionEntity[] = [];

    for(let i = 0; i < positions.length; i++) {
      const position = await this.positionRepository.findOne({
        where: {
          id: positions[i].id
        }
      });
  
      const newPosition = {
        ...position,
        ...positions[i],
      };

      result.push(await this.positionRepository.save(newPosition));
    }

    return result;
  }

  async updateById(id: number, updatePositionDto: UpdatePositionDto): Promise<PositionEntity> {
    const position = await this.positionRepository.findOne({
      where: {
        id: id
      }
    });

    const newPosition = {
      ...position,
      ...updatePositionDto,
    };

    return await this.positionRepository.save(newPosition);
  }

  async remove(id: number) {
    const position = await this.positionRepository.findOne({
      where: {
        id: id
      }
    });

    return await this.positionRepository.remove(position);
  }
}
