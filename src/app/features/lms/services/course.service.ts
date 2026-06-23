import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Course } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly base = `${environment.apiUrl}/api/courses`;

  constructor(private readonly http: HttpClient) {}

  list(params?: Record<string, string | number>): Observable<Course[]> {
    return this.http
      .get<unknown>(this.base, {
        params: params as Record<string, string>,
        withCredentials: true,
      })
      .pipe(map((res) => unwrapList<Course>(res).map((c) => this.normalizeCourse(c))));
  }

  getById(id: string): Observable<Course> {
    return this.http
      .get<Course>(`${this.base}/${id}`, { withCredentials: true })
      .pipe(map((c) => this.normalizeCourse(c)));
  }

  private normalizeCourse(course: Course): Course {
    return {
      ...course,
      id: String(course.id),
    };
  }
}
