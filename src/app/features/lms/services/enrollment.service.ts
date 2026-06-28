import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { PagedResponse } from '../models/paged-response.model';

import {
  Enrollment,
  EnrollmentStatus,
  EnrollmentResponse,
  EnrollmentDetailsResponse,
  UnlockNextModuleResponse,
} from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/enrollments';

  enroll(courseId: string): Observable<EnrollmentResponse> {
    return this.api.post<EnrollmentResponse>(this.base, { courseId });
  }

  getMyEnrollments(pageNumber = 1, pageSize = 10): Observable<PagedResponse<Enrollment>> {
    return this.api.get<PagedResponse<Enrollment>>(`${this.base}/my`, {
      params: { pageNumber, pageSize },
    });
  }

  getEnrollmentDetails(enrollmentId: string): Observable<EnrollmentDetailsResponse> {
    return this.api.get<EnrollmentDetailsResponse>(`${this.base}/${enrollmentId}`);
  }

  isEnrolled(courseId: string): Observable<EnrollmentStatus> {
    return this.api.get<EnrollmentStatus>(`${this.base}/is-enrolled/${courseId}`);
  }

  unlockNextModule(currentModuleId: string): Observable<UnlockNextModuleResponse> {
    return this.api.post<UnlockNextModuleResponse>(`${this.base}/unlock-next-module`, {
      currentModuleId,
    });
  }
}
