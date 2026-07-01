import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { ApiClient } from './api-client.service';
import { environment } from '../../../environments/environment';

export interface SubscriptionStatus {
  subscriptionId: string;
  planId: string;
  planName: string;
  billingCycle: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface UpgradeSubscriptionRequest {
  planId: string;
  billingCycle: 'Monthly' | 'Annual';
}

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private readonly api  = inject(ApiClient);
  private readonly http = inject(HttpClient);
  private readonly base = '/api/subscriptions';

  /** @deprecated kept for backward compatibility — falls back to mock data when offline (see ApiClient) */
  getStatus(): Observable<SubscriptionStatus> {
    return this.api.get<SubscriptionStatus>(`${this.base}/status`);
  }

  /**
   * Returns the trainee's subscription, or null if she genuinely has none (real backend 404).
   * Bypasses ApiClient's offline-mock-fallback so a real "no subscription" state
   * isn't masked by fake seed data. Re-throws on any other error (network/5xx).
   */
  getStatusOrNull(): Observable<SubscriptionStatus | null> {
    return this.http
      .get<SubscriptionStatus>(`${environment.apiUrl}${this.base}/status`, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 404) return of(null);
          return throwError(() => err);
        }),
      );
  }

  upgrade(body: UpgradeSubscriptionRequest): Observable<{ subscriptionId: string }> {
    return this.api.post<{ subscriptionId: string }>(`${this.base}/upgrade`, body);
  }
}
