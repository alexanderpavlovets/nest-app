import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // when Nest see validation decorator - apply it. For example @IsNotEmpty in create-task.dto

  await app.listen(3000);
}
bootstrap();
