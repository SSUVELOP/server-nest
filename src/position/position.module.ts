import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { PositionEntity } from './entities/position.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity])],
  exports: [TypeOrmModule],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
