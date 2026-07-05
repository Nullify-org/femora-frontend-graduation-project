// instructor-lesson-edit.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-instructor-lesson-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-lesson-edit.html'
})
export class InstructorLessonEdit implements OnInit {
  private fb = inject(FormBuilder);
  private lessonService = inject(LessonService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  lessonForm!: FormGroup;
  lessonId = this.route.snapshot.params['lessonId'];

  ngOnInit() {
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['']
    });
    this.lessonService.getById(this.lessonId).subscribe(data => this.lessonForm.patchValue(data));
  }

  save() {
    this.lessonService.update(this.lessonId, this.lessonForm.value).subscribe(() => {
      this.router.navigate(['/dashboard/instructor/courses']);
    });
  }
}