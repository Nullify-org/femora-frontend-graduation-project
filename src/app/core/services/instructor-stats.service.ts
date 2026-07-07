import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client.service';
import { Course } from '../models/api.model';

/** Matches Femora.Application.Features.LMS.Courses.DTOs.InstructorDashboardStatsDto (GET /api/courses/my/stats) */
export interface InstructorStats {
  totalCourses: number;
  publishedCourses: number;
  pendingCourses: number;
  totalStudents: number;
  totalEarnings: number;
  pendingEarnings: number;
  rating: number;
  verificationStatus: string;
  isVerified: boolean;
  recentCourses: Course[];
}

@Injectable({ providedIn: 'root' })
export class InstructorStatsService {
  private readonly api = inject(ApiClient);

  get(): Observable<InstructorStats> {
    return this.api.get<InstructorStats>('/api/courses/my/stats');
  }
}
