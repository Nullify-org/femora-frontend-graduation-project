import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

// خريطة تحويل النص لرقم عشان تطابق الـ CourseLevel enum في الباك إند
enum CourseLevelMap {
    Unknown = 0,
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
  Expert = 4
}

@Component({
  selector: 'app-instructor-course-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-course-edit.html',
  styleUrls: ['./instructor-course-edit.css']
})
export class InstructorCourseEdit implements OnInit {
  private fb = inject(FormBuilder);
  private courseService = inject(CourseService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  courseForm!: FormGroup;
  courseId = this.route.snapshot.params['id'];

  ngOnInit() {
    this.courseForm = this.fb.group({
      thumbnailUrl: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      level: ['Intermediate', Validators.required],
      category: ['', Validators.required],
      language: ['', Validators.required]
    });

    this.courseService.getById(this.courseId).subscribe(data => {
      this.courseForm.patchValue(data);
    });
  }

  save() {
  const formValue = this.courseForm.value;

  const payload = {
    courseId: this.courseId,   // ← ضيف السطر ده
    thumbnailUrl: formValue.thumbnailUrl || null,
    title: formValue.title,
    description: formValue.description,
    price: Number(formValue.price),
    level: CourseLevelMap[formValue.level as keyof typeof CourseLevelMap],
    category: formValue.category,
    language: formValue.language
  };

  this.courseService.update(this.courseId, payload).subscribe({
    next: () => {
      console.log('تم التحديث بنجاح');
      this.router.navigate(['/dashboard/instructor/courses']);
    },
    error: (err) => {
      console.log('الخطأ النهائي:', err);
      console.log('تفاصيل الخطأ:', err.error);
    }
  });
}

  cancel() {
    this.router.navigate(['/dashboard/instructor/courses']);
  }
}