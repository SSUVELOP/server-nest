import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { BookEntity } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() book: BookEntity): Promise<BookEntity> {
    return await this.booksService.create(book);
  }

  @Get()
  async findAll(): Promise<BookEntity[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BookEntity> {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() book: BookEntity): Promise<number> {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.booksService.remove(+id);
  }

  // @Post()
  // create(@Body() createBookDto: CreateBookDto) {
  //   return this.booksService.create(createBookDto);
  // }

  // @Get()
  // findAll() {
  //   return this.booksService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
