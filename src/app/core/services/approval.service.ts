import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client.service';

export interface PendingApproval {
  id: string;
  type: string;
  status: string;
  userId: string;
  createdAt: string;
}

export interface ReviewApprovalRequest {
  isApproved: boolean;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class ApprovalService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/approvals';

  applyInstructor(bio: string, portfolioUrl?: string): Observable<string> {
    return this.api.post<string>(
      `${this.base}/instructors/apply`,
      { bio, portfolioUrl },
    );
  }

  applySeller(shopName: string, description?: string): Observable<string> {
    return this.api.post<string>(
      `${this.base}/sellers/apply`,
      { shopName, description },
    );
  }

  getPending(): Observable<PendingApproval[]> {
    return this.api.get<PendingApproval[]>(`${this.base}/admin/approvals/pending`);
  }

  review(approvalId: string, body: ReviewApprovalRequest): Observable<{ success: boolean }> {
    return this.api.post<{ success: boolean }>(
      `${this.base}/admin/approvals/${approvalId}/review`,
      body,
    );
  }
}
