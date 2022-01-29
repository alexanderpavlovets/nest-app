import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-app',
      autoLoadEntities: true,
      synchronize: true, // schemas are sync with DB. For production - use migrations. Read about it more.
    }),
  ],
})
export class AppModule {}
