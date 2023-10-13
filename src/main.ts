import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist : false, 
      forbidNonWhitelisted : true,
      transform : true
    }),
  ).enableCors();
  setupSwagger(app);

  await app.listen(9000);
}
bootstrap();

// nest g res user