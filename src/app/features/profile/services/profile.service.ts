import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly base = `${environment.apiUrl}/api/profile`;

  constructor(private readonly http: HttpClient) {}

  getProfile() {
    return this.http.get(this.base, { withCredentials: true });
  }

  updateProfile(data: Record<string, unknown>) {
    return this.http.put(this.base, data, { withCredentials: true });
  }
}
