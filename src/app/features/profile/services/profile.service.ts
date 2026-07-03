import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ProfileDto {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  linkedInUrl?: string | null;
  gitHubUrl?: string | null;
  country?: string | null;
}

export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
  bio?: string | null;
  linkedInUrl?: string | null;
  gitHubUrl?: string | null;
  country?: string | null;
  avatar?: File | null;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly base = `${environment.apiUrl}/api/profile`;

  constructor(private readonly http: HttpClient) {}

  getProfile(): Observable<ProfileDto> {
    return this.http.get<ProfileDto>(this.base, { withCredentials: true });
  }

  updateProfile(data: UpdateProfilePayload): Observable<ProfileDto> {
    const form = new FormData();
    form.append('firstName', data.firstName ?? '');
    form.append('lastName', data.lastName ?? '');
    if (data.phoneNumber) form.append('phoneNumber', data.phoneNumber);
    if (data.bio) form.append('bio', data.bio);
    if (data.linkedInUrl) form.append('linkedInUrl', data.linkedInUrl);
    if (data.gitHubUrl) form.append('gitHubUrl', data.gitHubUrl);
    if (data.country) form.append('country', data.country);
    if (data.avatar) form.append('avatar', data.avatar);

    return this.http.put<ProfileDto>(this.base, form, { withCredentials: true });
  }
}
