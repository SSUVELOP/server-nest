import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-score.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
