import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Course } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/courses';

  list(params?: Record<string, string | number>): Observable<Course[]> {
    return this.api
      .get<unknown>(this.base, { params })
      .pipe(map((res) => unwrapList<Course>(res).map((c) => this.normalizeCourse(c))));
  }

  getById(id: string): Observable<Course> {
    return this.api
      .get<Course>(`${this.base}/${id}`)
      .pipe(map((c) => this.normalizeCourse(c)));
  }

  create(body: Record<string, unknown>): Observable<string> {
    return this.api.post<string>(this.base, body);
  }

  update(id: string, body: Record<string, unknown>): Observable<unknown> {
    return this.api.put(`${this.base}/${id}`, body);
  }

  publish(id: string): Observable<unknown> {
    return this.api.post(`${this.base}/${id}/publish`, {});
  }

  private normalizeCourse(course: Course): Course {
    return {
      ...course,
      id: String(course.id),
    };
  }
}
