import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Enrollment } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/enrollments';

  enroll(courseId: string): Observable<unknown> {
    return this.api.post(this.base, { courseId });
  }

  myEnrollments(page = 1, pageSize = 10): Observable<Enrollment[]> {
    return this.api
      .get<unknown>(`${this.base}/my`, {
        params: { page: String(page), pageSize: String(pageSize) },
      })
      .pipe(map((res) => unwrapList<Enrollment>(res)));
  }

  isEnrolled(courseId: string): Observable<boolean> {
    return this.api
      .get<{ isEnrolled?: boolean } | boolean>(`${this.base}/is-enrolled/${courseId}`)
      .pipe(
        map((res) => {
          if (typeof res === 'boolean') return res;
          return !!res?.isEnrolled;
        }),
      );
  }
}
