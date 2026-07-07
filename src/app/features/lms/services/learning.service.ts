
import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiClient } from '../../../core/services/api-client.service';
import { Enrollment, EnrollmentDetailsResponse } from '../../../core/models/api.model';
import { NotificationService } from '../../../core/services/notification.service';
import { EnrollmentService } from '../../lms/services/enrollment.service';
=======
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiClient } from '../../../core/services/api-client.service';
import { CompleteLessonResponse, Enrollment, EnrollmentDetailsResponse } from '../../../core/models/api.model';
import { NotificationService } from '../../../core/services/notification.service';
>>>>>>> origin/master
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  private readonly api = inject(ApiClient);
  private readonly notifications = inject(NotificationService);
<<<<<<< HEAD
  private readonly enrollmentService = inject(EnrollmentService);

  getCourseLearningData(courseOrEnrollmentId: string): Observable<EnrollmentDetailsResponse> {
    return this.enrollmentService.getEnrollmentDetails(courseOrEnrollmentId).pipe(
      catchError((error) => {
        if (error?.status === 403 || error?.status === 404) {
          return this.findEnrollmentByCourseId(courseOrEnrollmentId);
        }
        return throwError(() => error);
=======
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
>>>>>>> origin/master
      }),
      catchError((error) => {
        this.notifications.error('تعذّر تحميل بيانات التعلم');
        return throwError(() => error);
      }),
    );
  }

<<<<<<< HEAD
  private findEnrollmentByCourseId(courseId: string): Observable<EnrollmentDetailsResponse> {
    return this.enrollmentService.getMyEnrollments(1, 100).pipe(
      map((response) => response.items ?? []),
      switchMap((enrollments) => {
        const enrollment = enrollments.find((item) => item.courseId === courseId || item.enrollmentId === courseId);
        if (!enrollment?.enrollmentId) {
          return throwError(() => new Error('لم يتم العثور على اشتراك للدورة المطلوبة'));
        }

        return this.enrollmentService.getEnrollmentDetails(enrollment.enrollmentId);
      }),
    );
  }

  markLessonComplete(lessonId: string): Observable<void> {
    return this.api.put<void>(`/api/lessons/${lessonId}`, { isCompleted: true }).pipe(
      tap(() => this.notifications.success('تم تسجيل الدرس كمكتمل')),
      catchError(() => {
        this.notifications.info('تم تحديث تقدم الدورة محلياً');
        return of(undefined);
      }),
=======
  markLessonComplete(lessonId: string): Observable<CompleteLessonResponse> {
    return this.api.post<CompleteLessonResponse>(`${this.base}/lessons/${lessonId}/complete`, {}).pipe(
      tap(() => this.notifications.success('تم تسجيل الدرس كمكتمل')),
>>>>>>> origin/master
    );
  }
}