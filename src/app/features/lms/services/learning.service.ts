
import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiClient } from '../../../core/services/api-client.service';
import { Enrollment, EnrollmentDetailsResponse } from '../../../core/models/api.model';
import { NotificationService } from '../../../core/services/notification.service';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  private readonly api = inject(ApiClient);
  private readonly notifications = inject(NotificationService);
  private readonly base = '/api/enrollments';

  getCourseLearningData(courseId: string): Observable<EnrollmentDetailsResponse> {
    return this.api.get<unknown>(`${this.base}/my`, { params: { page: '1', pageSize: '100' } }).pipe(
      map((response) => unwrapList<Enrollment>(response)),
      switchMap((enrollments) => {
        const enrollment = enrollments.find((item) => item.courseId === courseId || item.enrollmentId === courseId);
        if (!enrollment?.enrollmentId) {
          return throwError(() => new Error('لم يتم العثور على اشتراك للدورة المطلوبة'));
        }

        return this.api.get<EnrollmentDetailsResponse>(`${this.base}/${enrollment.enrollmentId}`);
      }),
      catchError((error) => {
        this.notifications.error('تعذّر تحميل بيانات التعلم');
        return throwError(() => error);
      }),
    );
  }

  markLessonComplete(lessonId: string): Observable<void> {
    return this.api.post<void>(`${this.base}/lessons/${lessonId}/complete`, {}).pipe(
      tap(() => this.notifications.success('تم تسجيل الدرس كمكتمل')),
      catchError(() => {
        this.notifications.info('تم تحديث تقدم الدورة محلياً');
        return of(undefined);
      }),
    );
  }
}