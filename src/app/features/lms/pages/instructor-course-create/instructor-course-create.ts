import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

enum CourseLevelMap {
  Unknown = 0,
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
  Expert = 4
}

@Component({
  selector: 'app-instructor-course-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-course-create.html',
  styleUrls: ['./instructor-course-create.css']
})
export class InstructorCourseCreate implements OnInit {
  private fb = inject(FormBuilder);
  private courseService = inject(CourseService);
  private router = inject(Router);

  courseForm!: FormGroup;
  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');

  ngOnInit() {
    this.courseForm = this.fb.group({
      thumbnailUrl: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      level: ['Beginner', Validators.required],
      category: ['', Validators.required],
      language: ['', Validators.required]
    });
  }

  save() {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const formValue = this.courseForm.value;

    // instructorProfileId هيتحدد من التوكن في الباك إند، مش هنا
    const payload = {
      instructorProfileId: '00000000-0000-0000-0000-000000000000',
      title: formValue.title,
      description: formValue.description,
      price: Number(formValue.price),
      level: CourseLevelMap[formValue.level as keyof typeof CourseLevelMap],
      category: formValue.category,
      language: formValue.language,
      thumbnailUrl: formValue.thumbnailUrl || null
    };

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.courseService.create(payload).subscribe({
      next: (newCourseId) => {
        this.isSubmitting.set(false);
        console.log('تم إنشاء الدورة بنجاح، المعرف:', newCourseId);
        this.router.navigate(['/dashboard/instructor/courses']);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        console.log('الخطأ النهائي:', err);
        this.errorMessage.set(err?.error?.title ?? err?.error?.detail ?? 'تعذر إنشاء الدورة');
      }
    });
  }

  cancel() {
    this.router.navigate(['/dashboard/instructor/courses']);
  }
}