import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client.service';

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
  private readonly api = inject(ApiClient);
  private readonly base = '/api/subscriptions';

  getStatus(): Observable<SubscriptionStatus> {
    return this.api.get<SubscriptionStatus>(`${this.base}/status`);
  }

  upgrade(body: UpgradeSubscriptionRequest): Observable<{ subscriptionId: string }> {
    return this.api.post<{ subscriptionId: string }>(`${this.base}/upgrade`, body);
  }
}
