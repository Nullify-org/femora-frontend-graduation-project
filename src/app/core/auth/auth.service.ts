import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AuthPayload,
  RegisterRequest,
  SelectProfileRequest,
  SigninRequest,
  SigninResponse,
  SocialLoginRequest,
} from '../models/auth.model';
import { AvailableProfile, ProfileType, User } from '../models/user.model';
import { StorageService } from '../services/storage.service';

const AUTH_STORAGE_KEY = 'femora_auth';
const PROFILES_STORAGE_KEY = 'femora_pending_profiles';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly storage = inject(StorageService);

  private readonly _accessToken = signal<string | null>(null);
  private readonly _user = signal<User | null>(null);
  private readonly _activeProfile = signal<ProfileType | null>(null);
  private readonly _pendingProfiles = signal<AvailableProfile[]>([]);

  readonly accessToken = this._accessToken.asReadonly();
  readonly user = this._user.asReadonly();
  readonly activeProfile = this._activeProfile.asReadonly();
  readonly pendingProfiles = this._pendingProfiles.asReadonly();
  readonly isAuthenticated = computed(() => !!this._accessToken());
  readonly displayName = computed(() => {
    const u = this._user();
    return u ? `${u.firstName} ${u.lastName}`.trim() : '';
  });

  constructor() {
    this.restoreSession();
  }

  register(payload: RegisterRequest): Observable<SigninResponse> {
    return this.http
      .post<{ auth: AuthPayload }>(`${environment.apiUrl}/api/auth/register`, payload, {
        withCredentials: true,
      })
      .pipe(
        map((res) => ({ requiresProfileSelection: false, auth: this.normalizeAuth(res.auth) })),
        tap((res) => {
          if (res.auth) this.setSession(res.auth);
        }),
        catchError((err) => throwError(() => err)),
      );
  }

  signin(payload: SigninRequest): Observable<SigninResponse> {
    return this.http
      .post<SigninResponse>(`${environment.apiUrl}/api/auth/signin`, payload, {
        withCredentials: true,
      })
      .pipe(
        map((res) => this.normalizeSigninResponse(res)),
        tap((res) => {
          if (res.requiresProfileSelection) {
            const token = res.accessToken ?? res.auth?.accessToken;
            if (token) {
              this._accessToken.set(token);
              this.storage.setString('femora_access_token', token);
            }
            this._pendingProfiles.set(res.availableProfiles ?? []);
            this.storage.set(PROFILES_STORAGE_KEY, res.availableProfiles ?? []);
            return;
          }
          if (res.auth) this.setSession(res.auth);
        }),
      );
  }

  socialLogin(payload: SocialLoginRequest): Observable<SigninResponse> {
    const endpoint =
      payload.provider === 'Google'
        ? `${environment.apiUrl}/api/auth/google`
        : `${environment.apiUrl}/api/auth/facebook`;

    return this.http
      .post<SigninResponse>(endpoint, { idToken: payload.idToken }, { withCredentials: true })
      .pipe(
        map((res) => this.normalizeSigninResponse(res)),
        tap((res) => {
          if (res.requiresProfileSelection) {
            const token = res.accessToken ?? res.auth?.accessToken;
            if (token) {
              this._accessToken.set(token);
              this.storage.setString('femora_access_token', token);
            }
            this._pendingProfiles.set(res.availableProfiles ?? []);
            this.storage.set(PROFILES_STORAGE_KEY, res.availableProfiles ?? []);
            return;
          }
          if (res.auth) this.setSession(res.auth);
        }),
        catchError((err) => throwError(() => err)),
      );
  }

  selectProfile(profile: ProfileType): Observable<AuthPayload> {
    const body: SelectProfileRequest = { profile };
    return this.http
      .post<{
        user: User;
        accessToken: string;
        refreshToken: string;
        activeProfile: ProfileType;
      }>(`${environment.apiUrl}/api/auth/select-profile`, body, { withCredentials: true })
      .pipe(
        map((res) => ({
          user: res.user,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          activeProfile: res.activeProfile,
        })),
        tap((auth) => {
          this.setSession(auth);
          this.clearPendingProfiles();
        }),
      );
  }

  refreshToken(): Observable<AuthPayload> {
    return this.http
      .post<{ user: User; accessToken: string }>(
        `${environment.apiUrl}/api/auth/refresh`,
        {},
        { withCredentials: true },
      )
      .pipe(
        map((res) => ({
          user: res.user,
          accessToken: res.accessToken,
          activeProfile: this._activeProfile(),
        })),
        tap((auth) => this.setSession(auth)),
      );
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${environment.apiUrl}/api/auth/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.clearSession()),
        catchError(() => {
          this.clearSession();
          return throwError(() => new Error('Logout failed'));
        }),
      );
  }

  logoutLocal(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  handlePostAuthNavigation(): void {
    if (this._pendingProfiles().length > 0) {
      this.router.navigate(['/select-profile']);
      return;
    }
    this.router.navigate(['/dashboard']);
  }

  getDashboardRoute(): string {
    const profile = this._activeProfile();
    switch (profile) {
      case 'Instructor': return '/dashboard/instructor';
      case 'Seller': return '/dashboard/seller';
      case 'Admin': return '/dashboard/admin';
      default: return '/dashboard/trainee';
    }
  }

  setPendingEmail(email: string): void {
    this.storage.setString('femora_pending_email', email);
  }

  getPendingEmail(): string | null {
    return this.storage.getString('femora_pending_email');
  }

  clearPendingEmail(): void {
    this.storage.remove('femora_pending_email');
  }

  private normalizeSigninResponse(res: SigninResponse): SigninResponse {
    if (res.auth) {
      return { ...res, auth: this.normalizeAuth(res.auth) };
    }
    return res;
  }

  private normalizeAuth(auth: AuthPayload): AuthPayload {
    return {
      ...auth,
      user: {
        ...auth.user,
        id: String(auth.user.id),
      },
    };
  }

  private setSession(auth: AuthPayload): void {
    this._accessToken.set(auth.accessToken);
    this._user.set(auth.user);
    this._activeProfile.set(auth.activeProfile ?? null);
    this.storage.setString('femora_access_token', auth.accessToken);
    this.storage.set(AUTH_STORAGE_KEY, {
      user: auth.user,
      activeProfile: auth.activeProfile ?? null,
    });
  }

  private restoreSession(): void {
    const token = this.storage.getString('femora_access_token');
    const saved = this.storage.get<{ user: User; activeProfile: ProfileType | null }>(
      AUTH_STORAGE_KEY,
    );
    const profiles = this.storage.get<AvailableProfile[]>(PROFILES_STORAGE_KEY);

    if (token) this._accessToken.set(token);
    if (saved?.user) this._user.set(saved.user);
    if (saved?.activeProfile) this._activeProfile.set(saved.activeProfile);
    if (profiles?.length) this._pendingProfiles.set(profiles);
  }

  private clearPendingProfiles(): void {
    this._pendingProfiles.set([]);
    this.storage.remove(PROFILES_STORAGE_KEY);
  }

  private clearSession(): void {
    this._accessToken.set(null);
    this._user.set(null);
    this._activeProfile.set(null);
    this.clearPendingProfiles();
    this.storage.remove('femora_access_token');
    this.storage.remove(AUTH_STORAGE_KEY);
  }
}
