// instructor-module-edit.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from'../../services/module.service';

@Component({
  selector: 'app-instructor-module-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-module-edit.html'
})
export class InstructorModuleEdit implements OnInit {
  private fb = inject(FormBuilder);
  private moduleService = inject(ModuleService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  moduleForm!: FormGroup;
  moduleId = this.route.snapshot.params['moduleId'];

  ngOnInit() {
    this.moduleForm = this.fb.group({
      title: ['', Validators.required]
    });
    this.moduleService.getById(this.moduleId).subscribe(data => this.moduleForm.patchValue(data));
  }

  save() {
    this.moduleService.update(this.moduleId, this.moduleForm.value).subscribe(() => {
      this.router.navigate(['/dashboard/instructor/courses']);
    });
  }
}