import { Injectable  } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>
  ) { }

  async create(book: BookEntity): Promise<BookEntity> {
    const newBook = this.booksRepository.create(book);
    return await this.booksRepository.save(newBook);
  }

  async findAll(): Promise<BookEntity[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<BookEntity> {
    return await this.booksRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, book: BookEntity): Promise<number> {
    await this.booksRepository.update(id, book);
    return id
  }

  async remove(id: number): Promise<number> {
    await this.booksRepository.delete(id);
    return id
  }
  // create(createBookDto: CreateBookDto) {
  //   return 'This action adds a new book';
  // }

  // findAll() {
  //   return `This action returns all books`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
