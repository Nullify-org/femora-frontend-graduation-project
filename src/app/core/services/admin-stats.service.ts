import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client.service';

export interface AdminStats {
  totalUsers: number;
  totalTrainees: number;
  totalInstructors: number;
  totalSellers: number;
  totalCourses: number;
  publishedCourses: number;
  totalEnrollments: number;
  totalProducts: number;
  publishedProducts: number;
  totalOrders: number;
  totalRevenue: number;
  pendingApprovals: number;
}

@Injectable({ providedIn: 'root' })
export class AdminStatsService {
  private readonly api = inject(ApiClient);

  get(): Observable<AdminStats> {
    return this.api.get<AdminStats>('/api/admin/stats');
  }
}