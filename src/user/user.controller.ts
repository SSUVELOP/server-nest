import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { CheckUserDto } from './dto/check-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: '회원 등록 API', description: '회원을 등록한다' })
  @ApiCreatedResponse({ description: '회원을 등록한다', type: UserEntity })
  async create(@Body() user: UserEntity): Promise<UserEntity> {
    return this.userService.create(user);
  }

  @Post('s')
  @ApiOperation({ summary: '회원 다수 등록 API', description: '회원들을 등록한다' })
  @ApiCreatedResponse({ description: '회원들을 등록한다', type: UserEntity })
  async createAll(@Body() user: UserEntity[]): Promise<UserEntity[]> {
    return this.userService.createAll(user);
  }

  @Post('/check')
  @ApiOperation({ summary: '회원 확인 API', description: '회원 정보를 확인한다' })
  @ApiCreatedResponse({ description: '회원 정보를 확인한다', type: UserEntity })
  async checkUser(@Body() checkUserDto: CheckUserDto): Promise<UserEntity | undefined> {
    return this.userService.checkUser(checkUserDto);
  }

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':stdID')
  update(@Param('stdID') stdID: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(stdID, updateUserDto);
  }

  @Delete()
  @ApiOperation({ summary: '회원 초기화 API', description: '회원을 전부 삭제한다.' })
  @ApiCreatedResponse({ description: '회원을 전부 삭제한다.', type: UserEntity })
  async removeAll() {
    return this.userService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
