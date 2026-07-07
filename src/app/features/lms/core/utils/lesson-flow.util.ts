import {
  EnrollmentLesson,
  EnrollmentModule,
} from '../../../../core/models/api.model';
import { sortByOrderIndex } from './module-order.util';

export function findNextLesson(
  modules: EnrollmentModule[],
  currentLessonId: string,
): { lesson: EnrollmentLesson; module: EnrollmentModule } | null {
  const sortedModules = sortByOrderIndex(modules.filter((m) => m.isUnlocked));

  for (let moduleIndex = 0; moduleIndex < sortedModules.length; moduleIndex++) {
    const mod = sortedModules[moduleIndex];
    const lessons = sortByOrderIndex(mod.lessons);
    const currentIndex = lessons.findIndex((l) => l.lessonId === currentLessonId);

    if (currentIndex >= 0 && currentIndex < lessons.length - 1) {
      return { lesson: lessons[currentIndex + 1], module: mod };
    }

    if (currentIndex >= 0 && moduleIndex < sortedModules.length - 1) {
      const nextModule = sortedModules[moduleIndex + 1];
      const nextLessons = sortByOrderIndex(nextModule.lessons);
      if (nextLessons.length > 0) {
        return { lesson: nextLessons[0], module: nextModule };
      }
    }
  }

  return null;
}

export function findFirstOpenLesson(
  modules: EnrollmentModule[],
): { lesson: EnrollmentLesson; module: EnrollmentModule } | null {
  const sortedModules = sortByOrderIndex(modules.filter((m) => m.isUnlocked));

  for (const mod of sortedModules) {
    const lessons = sortByOrderIndex(mod.lessons);
    const incomplete = lessons.find((l) => !l.isCompleted);
    if (incomplete) {
      return { lesson: incomplete, module: mod };
    }
    if (lessons.length > 0) {
      return { lesson: lessons[0], module: mod };
    }
  }

  return null;
}

export function isModuleLessonsComplete(mod: EnrollmentModule): boolean {
  return mod.lessons.length > 0 && mod.lessons.every((lesson: EnrollmentLesson) => lesson.isCompleted);
}