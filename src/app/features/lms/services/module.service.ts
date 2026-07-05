import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';

@Injectable({ providedIn: 'root' })
export class ModuleService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/modules';

  // GET /api/modules/course/{courseId}
  getByCourseId(courseId: string): Observable<any[]> {
    return this.api.get<any[]>(`${this.base}/course/${courseId}`);
  }

  // GET /api/modules/{moduleId}
  getById(moduleId: string): Observable<any> {
    return this.api.get<any>(`${this.base}/${moduleId}`);
  }

  // POST /api/modules
  create(body: Record<string, unknown>): Observable<any> {
    return this.api.post<any>(this.base, body);
  }

  // PUT /api/modules/{moduleId}
  update(moduleId: string, body: Record<string, unknown>): Observable<unknown> {
    return this.api.put(`${this.base}/${moduleId}`, body);
  }

  // DELETE /api/modules/{moduleId}
  delete(moduleId: string): Observable<unknown> {
    return this.api.delete(`${this.base}/${moduleId}`);
  }

  // PUT /api/modules/reorder
  reorder(body: any): Observable<unknown> {
    return this.api.put(`${this.base}/reorder`, body);
  }
}