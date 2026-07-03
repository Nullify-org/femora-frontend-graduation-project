import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client.service';
import { PagedResult } from '../models/api.model';

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  roles: string[];
  isActive: boolean;
  createdAt: string;
}

export interface AdminOrder {
  id: string;
  userId: string;
  buyerName: string;
  buyerEmail: string;
  status: OrderStatus;
  totalAmount: number;
  itemCount: number;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/admin';

  getUsers(pageNumber = 1, pageSize = 20, search?: string, role?: string): Observable<PagedResult<AdminUser>> {
    const params: Record<string, string> = {
      PageNumber: String(pageNumber),
      PageSize: String(pageSize),
    };
    if (search) params['Search'] = search;
    if (role) params['Role'] = role;
    return this.api.get<PagedResult<AdminUser>>(`${this.base}/users`, { params });
  }

  setUserActive(userId: string, isActive: boolean): Observable<unknown> {
    return this.api.patch(`${this.base}/users/${userId}/active`, isActive);
  }

  getOrders(pageNumber = 1, pageSize = 20, status?: OrderStatus): Observable<PagedResult<AdminOrder>> {
    const params: Record<string, string> = {
      PageNumber: String(pageNumber),
      PageSize: String(pageSize),
    };
    if (status) params['Status'] = status;
    return this.api.get<PagedResult<AdminOrder>>(`${this.base}/orders`, { params });
  }

  updateOrderStatus(orderId: string, status: OrderStatus): Observable<unknown> {
    return this.api.patch(`${this.base}/orders/${orderId}/status`, { status });
  }
}
