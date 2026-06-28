import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Course } from '../models/course.model';
import { CourseDetails } from '../models/course-details.model';
import { GetCoursesRequest } from '../models/get-courses-request.model';
import { PagedResponse } from '../models/paged-response.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/courses';

  list(params?: Record<string, string | number>): Observable<Course[]> {
    const request = this.toCourseRequest(params);
    return this.getCourses(request).pipe(map((response) => response.data));
  }

  getById(id: string): Observable<Course> {
    return this.getCourseById(id);
  }

  getCourses(request?: GetCoursesRequest): Observable<PagedResponse<Course>> {
    return this.api.get<unknown>(this.base, { params: this.toQueryParams(request) }).pipe(
      map((response) => this.normalizePagedResponse(response as PagedResponse<Course> | Course[])),
    );
  }

  getCourseById(id: string): Observable<CourseDetails> {
    return this.api.get<CourseDetails | Course>(`${this.base}/${id}`).pipe(
      map((course) => this.normalizeCourseDetails(course as CourseDetails | Course)),
    );
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
  }

  private toCourseRequest(params?: Record<string, string | number>): GetCoursesRequest | undefined {
    if (!params) {
      return undefined;
    }

    const search = typeof params['Search'] === 'string'
      ? params['Search']
      : typeof params['search'] === 'string'
        ? params['search']
        : '';

    const pageNumber = typeof params['PageNumber'] === 'number'
      ? params['PageNumber']
      : typeof params['pageNumber'] === 'number'
        ? params['pageNumber']
        : 1;

    const pageSize = typeof params['PageSize'] === 'number'
      ? params['PageSize']
      : typeof params['pageSize'] === 'number'
        ? params['pageSize']
        : undefined;

    return {
      search: String(search).trim() || undefined,
      pageNumber,
      pageSize,
    };
  }

  private normalizePagedResponse(response: PagedResponse<Course> | Course[]): PagedResponse<Course> {
    if (Array.isArray(response)) {
      return {
        data: response.map((course) => this.normalizeCourse(course as Course)),
        page: 1,
        pageSize: response.length,
        totalCount: response.length,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
      };
    }

    const data = Array.isArray(response.data) ? response.data : [];

    return {
      ...response,
      data: data.map((course) => this.normalizeCourse(course as Course)),
      page: response.page ?? 1,
      pageSize: response.pageSize ?? data.length,
      hasNext: response.hasNext ?? false,
      hasPrev: response.hasPrev ?? false,
    };
  }

  private normalizeCourse(course: Course): Course {
    return {
      ...course,
      id: String(course.id),
    };
  }

  private normalizeCourseDetails(course: CourseDetails | Course): CourseDetails {
    const baseCourse = this.normalizeCourse(course as Course);
    const details = course as CourseDetails;

    return {
      ...baseCourse,
      totalLessons: details.totalLessons ?? 0,
      modules: (details.modules ?? []).map((module) => ({
        ...module,
        id: String(module.id),
      })),
    };
  }
}
