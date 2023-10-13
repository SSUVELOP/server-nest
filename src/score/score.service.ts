import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-score.dto';
import { UpdateUserDto } from './dto/update-score.dto';
import { ScoreEntity } from './entities/score.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckUserDto } from './dto/check-user.dto';
import { UpdateBreakScoreDto } from './dto/update-break-score.dto';
import { UpdateShakeScoreDto } from './dto/update-shake-score.dto';
import { UpdateConcentrateScoreDto } from './dto/update-concentrate-score.dto';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(ScoreEntity)
    private scoreRepository: Repository<ScoreEntity>
  ) { }

  
  async create(score: ScoreEntity): Promise<ScoreEntity> {
    const newScore = this.scoreRepository.create(score);
    return await this.scoreRepository.save(newScore);
  }

  async findAll(): Promise<ScoreEntity[]> {
    return this.scoreRepository.find();
  }

  async findOne(phone: string): Promise<ScoreEntity> {
    return await this.scoreRepository.findOne({
      where: {
        phone: phone,
      }
    });
  }

  async updateBreak(phone: string, updateBreakScoreDto: UpdateBreakScoreDto) {
    const score = await this.scoreRepository.findOne({
      where: {
        phone: phone,
      }
    });

    const newScore = {
      ...score,
      ...updateBreakScoreDto,
    };

    return await this.scoreRepository.save(newScore);
  }

  async updateShake(phone: string, updateShakeScoreDto: UpdateShakeScoreDto) {
    const score = await this.scoreRepository.findOne({
      where: {
        phone: phone,
      }
    });

    const newScore = {
      ...score,
      ...updateShakeScoreDto,
    };

    return await this.scoreRepository.save(newScore);
  }

  async updateConcentrate(phone: string, updateConcentrateScoreDto: UpdateConcentrateScoreDto) {
    const score = await this.scoreRepository.findOne({
      where: {
        phone: phone,
      }
    });

    const newScore = {
      ...score,
      ...updateConcentrateScoreDto,
    };

    return await this.scoreRepository.save(newScore);
  }

  async removeAll() {
    return await this.scoreRepository.clear();
  }

  async remove(id: number) {
    const score = await this.scoreRepository.findOne({
      where: {
        id: id,
      }
    });
    return await this.scoreRepository.remove(score);
  }
}
