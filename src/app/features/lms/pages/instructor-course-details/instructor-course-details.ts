import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { CourseDetails } from '../../models/course-details.model';

@Component({
  selector: 'app-instructor-course-details',
  standalone: true,
  imports: [CommonModule, Sidebar, RouterModule],
  templateUrl: './instructor-course-details.html',
})
export class InstructorCourseDetails implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly coursesApi = inject(CourseService);

  readonly course = signal<CourseDetails | null>(null);
  readonly isLoading = signal(true);
  readonly error = signal('');

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) this.loadCourse(id);
    });
  }

  private loadCourse(id: string): void {
    this.isLoading.set(true);

    this.coursesApi.getCourseById(id).subscribe({
      next: (course) => {
        this.course.set(course);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load course');
        this.isLoading.set(false);
      },
    });
  }
}