import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckUserDto } from './dto/check-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) { }

  
  async create(user: UserEntity): Promise<UserEntity> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async createAll(user: UserEntity[]): Promise<UserEntity[]> {
    const newUsers = this.userRepository.create(user);
    return await this.userRepository.save(newUsers);
  }

  async checkUser(checkUserDto: CheckUserDto): Promise<UserEntity | undefined> {
    const chekUserbyId = await this.userRepository.findOne({
      where: {
        stdID: checkUserDto.stdID
      }
    });
    console.log(chekUserbyId.name);

    if (!chekUserbyId) {
      throw new ForbiddenException('등록되지 않은 사용자입니다.');
    }

    const user = await this.userRepository.findOne({
      where: {
        stdID: checkUserDto.stdID,
        password: checkUserDto.password,
      }
    });

    if (!user) {
      throw new ForbiddenException('비밀번호가 일치하지 않습니다.');
    }

    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(stdID: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        stdID: stdID
      }
    });

    const newUser = {
      ...user,
      ...updateUserDto,
    };

    return await this.userRepository.save(newUser);
  }

  async removeAll() {
    return await this.userRepository.clear();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
