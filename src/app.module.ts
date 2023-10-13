import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { BookEntity } from './books/entities/book.entity';
import { MenuModule } from './menu/menu.module';
import { MenuEntity } from './menu/entities/menu.entity';
import { OrderModule } from './order/order.module';
import { OrderEntity } from './order/entities/order.entity';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { SocketGateway } from './socket/chat/socket.gateway';
import { SocketModule } from './socket/chat/socket.module';
import { FestPubModule } from './socket/festpub/festpub.module';
import { PositionModule } from './position/position.module';
import { PositionEntity } from './position/entities/position.entity';
import { ScoreEntity } from './score/entities/score.entity';
import { ScoreModule } from './score/score.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '18181818',
      database: 'test',
      entities: [BookEntity, MenuEntity, OrderEntity, UserEntity, PositionEntity ,ScoreEntity],
      synchronize: true, 
    }),
    BooksModule,
    MenuModule,
    OrderModule,
    UserModule,
    SocketModule,
    FestPubModule,
    PositionModule,
    ScoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
