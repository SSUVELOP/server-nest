import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreEntity } from './entities/score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreEntity])],
  exports: [TypeOrmModule],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
