import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClient } from './api-client.service';

export interface PendingApproval {
  id: string;
  type: string;
  status: string;
  userId: string;
  userFullName?: string;
  userEmail?: string;
  createdAt?: string;
  // Instructor fields
  bio?: string;
  portfolioUrl?: string;
  // Seller fields
  shopName?: string;
  description?: string;
  // Course / Product fields
  title?: string;
  entityId?: string;
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
    return this.api.post<string>(`${this.base}/instructors/apply`, { bio, portfolioUrl });
  }

  applySeller(shopName: string, description?: string): Observable<string> {
    return this.api.post<string>(`${this.base}/sellers/apply`, { shopName, description });
  }

  getPending(): Observable<PendingApproval[]> {
    return this.api
      .get<unknown>(`/api/Approvals/admin/approvals/pending`)
      .pipe(map((response) => this.unwrapAndNormalize(response)));
  }

  getDisplayName(item: PendingApproval): string {
    if (item.userFullName?.trim()) return item.userFullName.trim();
    if (item.userEmail?.trim())    return item.userEmail.trim();
    return '—';
  }

  review(approvalId: string, body: ReviewApprovalRequest): Observable<{ success: boolean }> {
    return this.api.post<{ success: boolean }>(
      `/api/Approvals/admin/approvals/${approvalId}/review`,
      body,
    );
  }

  // ── private ─────────────────────────────────────────────────────────────

  private unwrapAndNormalize(response: unknown): PendingApproval[] {
    const raw = Array.isArray(response) ? response : this.tryUnwrap(response);
    return raw.map((item: any) => ({
      id:           item.id          ?? item.Id          ?? '',
      type:         item.type        ?? item.Type        ?? '',
      status:       item.status      ?? item.Status      ?? '',
      userId:       item.userId      ?? item.UserId      ?? '',
      userFullName: item.userFullName ?? item.UserFullName ?? '',
      userEmail:    item.userEmail   ?? item.UserEmail   ?? '',
      createdAt:    item.createdAt   ?? item.CreatedAt   ?? item.dateCreated ?? '',
      // Instructor
      bio:          item.bio         ?? item.Bio         ?? undefined,
      portfolioUrl: item.portfolioUrl ?? item.PortfolioUrl ?? undefined,
      // Seller
      shopName:     item.shopName    ?? item.ShopName    ?? undefined,
      description:  item.description ?? item.Description ?? undefined,
      // Course / Product
      title:        item.title       ?? item.Title       ?? undefined,
      entityId:     item.entityId    ?? item.EntityId    ?? undefined,
    }));
  }

  private tryUnwrap(response: unknown): any[] {
    if (!response || typeof response !== 'object') return [];
    const obj = response as Record<string, unknown>;
    for (const key of ['data', 'items', 'results', 'approvals']) {
      if (Array.isArray(obj[key])) return obj[key] as any[];
    }
    return [];
  }
}
