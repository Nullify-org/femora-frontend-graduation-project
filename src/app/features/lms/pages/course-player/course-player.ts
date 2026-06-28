import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { LearningService } from '../../services/learning.service';
// import { Course, CourseLesson } from '../../../../core/models/api.model';
import { Course, CourseLesson, CourseModule } from '../../../../core/models/api.model';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './course-player.html',
})
export class CoursePlayer {
  private readonly route = inject(ActivatedRoute);
  private readonly coursesApi = inject(CourseService);
  private readonly learning = inject(LearningService);

  course: Course | null = null;
  selectedLesson: CourseLesson | null = null;
  isLoading = true;
  errorMessage = '';

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id) {
        this.errorMessage = 'معرّف الدورة غير صالح';
        this.isLoading = false;
        return;
      }

      this.coursesApi.getCourseById(id).subscribe({
        next: (course) => {
          this.course = course;
          const modules = course.modules as CourseModule[] | undefined;
          this.selectedLesson = modules?.[0]?.lessons?.[0] ?? null;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل محتوى الدورة';
          this.isLoading = false;
        },
      });
    });
  }

  selectLesson(lesson: CourseLesson): void {
    this.selectedLesson = lesson;
  }

 completeLesson(lessonId: string): void {
  this.learning.markLessonComplete(lessonId).subscribe(() => {
    if (this.course?.id) {
      this.coursesApi.getCourseById(this.course.id).subscribe({  // ← الاسم الصحيح
        next: (course) => {
          this.course = course;
          const modules = course.modules as CourseModule[] | undefined;
          this.selectedLesson = modules?.[0]?.lessons?.[0] ?? null;
        },
      });
    }
  });
}
}
