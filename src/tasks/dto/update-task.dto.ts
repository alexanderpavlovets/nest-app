import { TaskStatus } from '../task-status.enum';

export class UpdateTaskDto {
  title: string;
  status: TaskStatus;
}
