import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client.service';

export interface PendingApproval {
  id: string;
  type: 'InstructorVerification' | 'SellerVerification' | 'CourseApproval' | 'ProductApproval' | string;
  status: 'Pending' | 'Approved' | 'Rejected' | string;
  userId: string;
  requesterName?: string | null;
  userFullName?: string | null;
  userEmail?: string | null;
  bio?: string | null;
  portfolioUrl?: string | null;
  shopName?: string | null;
  description?: string | null;
  entityId?: string | null;
  title?: string | null;
  createdAt?: string;
}

export interface ApprovalReviewRequest {
  isApproved: boolean;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class ApprovalService {
  private readonly api = inject(ApiClient);

  getPending(): Observable<PendingApproval[]> {
    return this.api.get<PendingApproval[]>('/api/approvals/admin/approvals/pending');
  }

  review(id: string, payload: ApprovalReviewRequest): Observable<unknown> {
    return this.api.post(`/api/approvals/admin/approvals/${id}/review`, payload);
  }

  applyInstructor(bio: string, portfolioUrl?: string): Observable<unknown> {
    return this.api.post('/api/approvals/instructors/apply', { bio, portfolioUrl });
  }

  applySeller(shopName: string, description?: string): Observable<unknown> {
    return this.api.post('/api/approvals/sellers/apply', { shopName, description });
  }

  getDisplayName(item: PendingApproval): string {
    return item.userFullName || item.shopName || item.title || item.id;
  }
}
