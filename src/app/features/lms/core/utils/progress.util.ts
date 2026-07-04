import { EnrollmentLesson, EnrollmentModule } from '../../../../core/models/api.model';

export function calculateProgressPercent(modules: EnrollmentModule[]): number {
  if (!modules.length) return 0;

  const completedLessons = modules.reduce((total, moduleItem) => {
    return total + moduleItem.lessons.filter((lesson: EnrollmentLesson) => lesson.isCompleted).length;
  }, 0);

  const totalLessons = modules.reduce((total, moduleItem) => total + moduleItem.lessons.length, 0);

  if (!totalLessons) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}
