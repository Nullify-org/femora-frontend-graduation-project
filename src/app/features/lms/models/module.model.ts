import { Lesson } from './lesson.model';
export interface Module {
  id: string;
  courseId: string;
  title: string;
  orderIndex: number;
  lessonsCount: number;
  lessons: Lesson[];
}
