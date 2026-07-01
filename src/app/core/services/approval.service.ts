import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClient } from './api-client.service';

export interface PendingApproval {
  id: string;
  type: string;
  status: string;
  userId: string;
  createdAt?: string;
  dateCreated?: string;
  userFullName?: string;
  fullName?: string;
  user?: {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
  };
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
    return this.api
      .get<unknown>(`/api/Approvals/admin/approvals/pending`)
      .pipe(
        map((response) => {
          const items = this.unwrapPendingList(response);
          return items.map((item) => this.normalizeApproval(item));
        }),
      );
  }

  getDisplayName(item: PendingApproval): string {
    return item.fullName ?? item.userFullName ?? '—';
  }

  private unwrapPendingList(response: unknown): Record<string, unknown>[] {
    if (Array.isArray(response)) {
      return response as Record<string, unknown>[];
    }
    if (response && typeof response === 'object') {
      const obj = response as Record<string, unknown>;
      for (const key of ['data', 'items', 'results', 'approvals']) {
        if (Array.isArray(obj[key])) {
          return obj[key] as Record<string, unknown>[];
        }
      }
    }
    return [];
  }

  private readString(source: Record<string, unknown> | undefined, ...keys: string[]): string | undefined {
    if (!source) return undefined;
    for (const key of keys) {
      const value = source[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }
    return undefined;
  }

  private readNestedObject(source: Record<string, unknown>, ...keys: string[]): Record<string, unknown> | undefined {
    for (const key of keys) {
      const value = source[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value as Record<string, unknown>;
      }
    }
    return undefined;
  }

  private composeName(first?: string, last?: string): string | undefined {
    const full = [first, last].filter(Boolean).join(' ').trim();
    return full || undefined;
  }

  private extractFullName(item: Record<string, unknown>): string | undefined {
    const nestedUser = this.readNestedObject(item, 'user', 'User', 'applicant', 'Applicant');

    const direct = this.readString(
      item,
      'fullName',
      'FullName',
      'fullname',
      'userFullName',
      'UserFullName',
      'applicantName',
      'ApplicantName',
      'name',
      'Name',
      'userName',
      'UserName',
      'displayName',
      'DisplayName',
    );
    if (direct) return direct;

    const nested = nestedUser
      ? this.readString(
          nestedUser,
          'fullName',
          'FullName',
          'fullname',
          'name',
          'Name',
          'userName',
          'UserName',
          'displayName',
          'DisplayName',
        )
      : undefined;
    if (nested) return nested;

    const first =
      this.readString(item, 'firstName', 'FirstName', 'userFirstName', 'UserFirstName') ??
      (nestedUser ? this.readString(nestedUser, 'firstName', 'FirstName') : undefined);
    const last =
      this.readString(item, 'lastName', 'LastName', 'userLastName', 'UserLastName') ??
      (nestedUser ? this.readString(nestedUser, 'lastName', 'LastName') : undefined);

    return this.composeName(first, last);
  }

  private normalizeApproval(raw: Record<string, unknown>): PendingApproval {
    const fullName = this.extractFullName(raw);
    const createdAt =
      this.readString(raw, 'createdAt', 'CreatedAt', 'dateCreated', 'DateCreated', 'datecreated') ??
      undefined;

    return {
      ...(raw as unknown as PendingApproval),
      fullName,
      userFullName: fullName,
      createdAt,
      dateCreated: createdAt,
    };
  }

  review(approvalId: string, body: ReviewApprovalRequest): Observable<{ success: boolean }> {
    return this.api.post<{ success: boolean }>(
      `/api/Approvals/admin/approvals/${approvalId}/review`,
      body,
    );
  }
}
