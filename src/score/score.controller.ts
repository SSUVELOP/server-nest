import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateUserDto } from './dto/create-score.dto';
import { UpdateUserDto } from './dto/update-score.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ScoreEntity } from './entities/score.entity';
import { CheckUserDto } from './dto/check-user.dto';
import { UpdateBreakScoreDto } from './dto/update-break-score.dto';
import { UpdateShakeScoreDto } from './dto/update-shake-score.dto';
import { UpdateConcentrateScoreDto } from './dto/update-concentrate-score.dto';

@Controller('score')
@ApiTags('점수 API')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  @ApiOperation({ summary: '회원 등록 API', description: '회원을 등록한다' })
  @ApiCreatedResponse({ description: '회원을 등록한다', type: ScoreEntity })
  async create(@Body() score: ScoreEntity): Promise<ScoreEntity> {
    return this.scoreService.create(score);
  }

  // @Post('/check')
  // @ApiOperation({ summary: '회원 확인 API', description: '회원 정보를 확인한다' })
  // @ApiCreatedResponse({ description: '회원 정보를 확인한다', type: ScoreEntity })
  // async checkUser(@Body() checkUserDto: CheckUserDto): Promise<ScoreEntity | undefined> {
  //   return this.scoreService.checkUser(checkUserDto);
  // }

  @Get()
  async findAll(): Promise<ScoreEntity[]> {
    return this.scoreService.findAll();
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Get(':phone')
  findOne(@Param('phone') phone: string) {
    return this.scoreService.findOne(phone);
  }
  
  @Patch('/break/:phone')
  updateBreak(@Param('phone') phone: string, @Body() updateBreakScoreDto: UpdateBreakScoreDto) {
    return this.scoreService.updateBreak(phone, updateBreakScoreDto);
  }
  
  @Patch('/shake/:phone')
  updateShake(@Param('phone') phone: string, @Body() updateShakeScoreDto: UpdateShakeScoreDto) {
    return this.scoreService.updateShake(phone, updateShakeScoreDto);
  }
  
  @Patch('/concentrate/:phone')
  updateConcentrate(@Param('phone') phone: string, @Body() updateConcentrateScoreDto: UpdateConcentrateScoreDto) {
    return this.scoreService.updateConcentrate(phone, updateConcentrateScoreDto);
  }

  @Delete()
  @ApiOperation({ summary: '회원 초기화 API', description: '회원을 전부 삭제한다.' })
  @ApiCreatedResponse({ description: '회원을 전부 삭제한다.', type: ScoreEntity })
  async removeAll() {
    return this.scoreService.removeAll();
  }
  
  @Delete(':id')
  @ApiOperation({ summary: '회원 초기화 API', description: '회원을 전부 삭제한다.' })
  @ApiCreatedResponse({ description: '회원을 전부 삭제한다.', type: ScoreEntity })
  async remove(@Param('id') id: number) {
    return this.scoreService.remove(id);
  }
}
