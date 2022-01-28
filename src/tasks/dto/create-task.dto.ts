import { IsNotEmpty } from 'class-validator';

// Can be done via interfaces, but Nestjs reccomends to use classes. Interface are TS - not available at run time. Read doc if needed.
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
