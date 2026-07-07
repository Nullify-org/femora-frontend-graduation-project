import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Course } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly api = inject(ApiClient);
<<<<<<< Updated upstream
  private readonly base = '/api/courses';
=======

  private readonly base = '/api/courses';

  // ========================
  // Courses
  // ========================
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
  unpublish(id: string): Observable<unknown> {
    return this.api.post(`${this.base}/${id}/unpublish`, {});
  }

  deleteCourse(id: string): Observable<unknown> {
    return this.api.delete(`${this.base}/${id}`);
  }

  // ========================
  // Helpers
  // ========================

  private toQueryParams(
    request?: GetCoursesRequest
  ): Record<string, string> | undefined {

    if (!request) return undefined;

    const params: Record<string, string> = {};

    if (request.search?.trim())
      params['search'] = request.search.trim();

    if (request.category)
      params['category'] = request.category;

    if (request.level)
      params['level'] = request.level;

    if (request.minPrice != null)
      params['minPrice'] = request.minPrice.toString();

    if (request.maxPrice != null)
      params['maxPrice'] = request.maxPrice.toString();

    if (request.sortBy != null)
      params['sortBy'] = request.sortBy.toString();

    if (request.pageNumber != null)
      params['pageNumber'] = request.pageNumber.toString();

    if (request.pageSize != null)
      params['pageSize'] = request.pageSize.toString();

    return Object.keys(params).length ? params : undefined;
  }

  private toCourseRequest(
    params?: Record<string, string | number>
  ): GetCoursesRequest | undefined {

    if (!params) {
      return undefined;
    }

    const search =
      typeof params['Search'] === 'string'
        ? params['Search']
        : typeof params['search'] === 'string'
          ? params['search']
          : '';

    const pageNumber =
      typeof params['PageNumber'] === 'number'
        ? params['PageNumber']
        : typeof params['pageNumber'] === 'number'
          ? params['pageNumber']
          : 1;

    const pageSize =
      typeof params['PageSize'] === 'number'
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

  private normalizePagedResponse(
    response: PagedResponse<Course> | Course[]
  ): PagedResponse<Course> {

    if (Array.isArray(response)) {
      return {
        data: response.map((course) =>
          this.normalizeCourse(course as Course)
        ),
        page: 1,
        pageSize: response.length,
        totalCount: response.length,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
      };
    }

    const data = Array.isArray(response.data)
      ? response.data
      : [];

    return {
      ...response,
      data: data.map((course) =>
        this.normalizeCourse(course as Course)
      ),
      page: response.page ?? 1,
      pageSize: response.pageSize ?? data.length,
      hasNext: response.hasNext ?? false,
      hasPrev: response.hasPrev ?? false,
    };
  }

>>>>>>> Stashed changes
  private normalizeCourse(course: Course): Course {
    return {
      ...course,
      id: String(course.id),
    };
  }
}
