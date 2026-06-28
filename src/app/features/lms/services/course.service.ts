import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
<<<<<<< HEAD
import { Course } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';
=======
import { Course } from '../models/course.model';
import { CourseDetails } from '../models/course-details.model';
import { GetCoursesRequest } from '../models/get-courses-request.model';
import { PagedResponse } from '../models/paged-response.model';
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/courses';

<<<<<<< HEAD
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
=======
  getCourses(request?: GetCoursesRequest): Observable<PagedResponse<Course>> {
    return this.api
      .get<PagedResponse<Course>>(this.base, { params: this.toQueryParams(request) })
      .pipe(
        map((response) => ({
          ...response,
          data: response.data.map((course) => this.normalizeCourse(course)),
        })),
      );
  }

  getCourseById(id: string): Observable<CourseDetails> {
    return this.api
      .get<CourseDetails>(`${this.base}/${id}`)
      .pipe(map((course) => this.normalizeCourseDetails(course)));
  }

  create(course: any) {
    return this.api.post<string>(
      '/api/courses',
      course
    );
  }

  publish(id: string) {
    return this.api.post<void>(
      `/api/courses/${id}/publish`,
      {}
    );
  }

  private toQueryParams(request?: GetCoursesRequest): Record<string, string> | undefined {
    if (!request) {
      return undefined;
    }

    const params: Record<string, string> = {};

    if (request.search?.trim()) {
      params['search'] = request.search.trim();
    }
    if (request.pageNumber !== undefined) {
      params['pageNumber'] = String(request.pageNumber);
    }
    if (request.pageSize !== undefined) {
      params['pageSize'] = String(request.pageSize);
    }

    return Object.keys(params).length > 0 ? params : undefined;
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
  }

  private normalizeCourse(course: Course): Course {
    return {
      ...course,
      id: String(course.id),
    };
  }
<<<<<<< HEAD
=======

  private normalizeCourseDetails(course: CourseDetails): CourseDetails {
    return {
      ...this.normalizeCourse(course),
      totalLessons: course.totalLessons,
      modules: course.modules.map((module) => ({
        ...module,
        id: String(module.id),
      })),
    };
  }
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
}
