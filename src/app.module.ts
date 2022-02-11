import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KafkaModule } from './kafka/kafka.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestConsumer } from './test.consumer';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(), KafkaModule],
  controllers: [AppController],
  providers: [AppService, TestConsumer],
})
export class AppModule {}
