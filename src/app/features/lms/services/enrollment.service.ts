import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Enrollment } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly base = `${environment.apiUrl}/api/Enrollments`;

  constructor(private readonly http: HttpClient) {}

  enroll(courseId: string): Observable<unknown> {
    return this.http.post(this.base, { courseId }, { withCredentials: true });
  }

  myEnrollments(page = 1, pageSize = 10): Observable<Enrollment[]> {
    return this.http
      .get<unknown>(`${this.base}/my`, {
        params: { page: String(page), pageSize: String(pageSize) },
        withCredentials: true,
      })
      .pipe(map((res) => unwrapList<Enrollment>(res)));
  }

  isEnrolled(courseId: string): Observable<boolean> {
    return this.http
      .get<{ isEnrolled?: boolean } | boolean>(`${this.base}/is-enrolled/${courseId}`, {
        withCredentials: true,
      })
      .pipe(
        map((res) => {
          if (typeof res === 'boolean') return res;
          return !!res?.isEnrolled;
        }),
      );
  }
}
