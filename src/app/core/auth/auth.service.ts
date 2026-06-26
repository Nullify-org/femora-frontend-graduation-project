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
  GoogleAuthRequest,
  FacebookAuthRequest,
} from '../models/auth.model';
import { AvailableProfile, ProfileType, User, PROFILE_CONFIGS } from '../models/user.model';
import { StorageService } from '../services/storage.service';

const AUTH_STORAGE_KEY = 'femora_auth';
const PROFILES_STORAGE_KEY = 'femora_pending_profiles';
const REMEMBER_ME_KEY = 'femora_remember_me';
const TOKEN_KEY = 'femora_access_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly storage = inject(StorageService);

  private readonly _accessToken = signal<string | null>(null);
  private readonly _user = signal<User | null>(null);
  private readonly _activeProfile = signal<ProfileType | null>(null);
  private readonly _pendingProfiles = signal<AvailableProfile[]>([]);
  private readonly _isLoading = signal<boolean>(false);

  readonly accessToken = this._accessToken.asReadonly();
  readonly user = this._user.asReadonly();
  readonly activeProfile = this._activeProfile.asReadonly();
  readonly pendingProfiles = this._pendingProfiles.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly isAuthenticated = computed(() => !!this._accessToken());
  readonly displayName = computed(() => {
    const u = this._user();
    return u ? `${u.firstName} ${u.lastName}`.trim() : '';
  });
  readonly activeProfileConfig = computed(() => {
    const p = this._activeProfile();
    return p ? PROFILE_CONFIGS.find((c) => c.type === p) ?? null : null;
  });

  constructor() {
    this.restoreSession();
  }

  register(payload: RegisterRequest): Observable<SigninResponse> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/register`, payload, { withCredentials: true })
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => this.apply(res)),
        catchError((err) => throwError(() => err)),
      );
  }

  signin(payload: SigninRequest): Observable<SigninResponse> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/signin`, payload, { withCredentials: true })
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => {
          if (payload.rememberMe) this.storage.setString(REMEMBER_ME_KEY, payload.email);
          else this.storage.remove(REMEMBER_ME_KEY);
          this.apply(res);
        }),
        catchError((err) => throwError(() => err)),
      );
  }

  signinWithGoogle(payload: GoogleAuthRequest): Observable<SigninResponse> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/google`, payload, { withCredentials: true })
      .pipe(map((res) => this.normalize(res)), tap((res) => this.apply(res)));
  }

  signinWithFacebook(payload: FacebookAuthRequest): Observable<SigninResponse> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/facebook`, payload, { withCredentials: true })
      .pipe(map((res) => this.normalize(res)), tap((res) => this.apply(res)));
  }

  selectProfile(profile: ProfileType): Observable<AuthPayload> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/select-profile`, { profile } as SelectProfileRequest, { withCredentials: true })
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => { this.apply(res); this.clearPendingProfiles(); }),
        map((res) => res.auth!),
      );
  }

  refreshToken(): Observable<AuthPayload> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/refresh`, {}, { withCredentials: true })
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => { if (res.auth) this.setSession(res.auth); }),
        map((res) => res.auth!),
      );
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${environment.apiUrl}/api/auth/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.clearSession()),
        catchError(() => { this.clearSession(); return throwError(() => new Error()); }),
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
    this.router.navigate([this.getDashboardRoute()]);
  }

  /**
   * Route logic:
   * - activeProfile = Trainee/Instructor/Seller → go to their dashboard
   * - activeProfile = null + authenticated → user is a pure Buyer → go to '/' (landing)
   */
  getDashboardRoute(): string {
    const profile = this._activeProfile();
    if (!profile) return '/';   // Buyer: authenticated but no profile = browse freely
    const config = PROFILE_CONFIGS.find((c) => c.type === profile);
    return config?.dashboardRoute ?? '/dashboard/trainee';
  }

  setPendingEmail(email: string): void { this.storage.setString('femora_pending_email', email); }
  getPendingEmail(): string | null { return this.storage.getString('femora_pending_email'); }
  clearPendingEmail(): void { this.storage.remove('femora_pending_email'); }
  getRememberedEmail(): string | null { return this.storage.getString(REMEMBER_ME_KEY); }

  checkEmailExists(email: string): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(
      `${environment.apiUrl}/api/auth/check-email?email=${encodeURIComponent(email)}`
    );
  }

  // ── Private ───────────────────────────────────────────────────────────────

  /**
   * Normalise backend response into consistent SigninResponse.
   * Backend now always wraps inside { auth: { user, accessToken, activeProfile } }
   */
  private normalize(raw: any): SigninResponse {
    const requiresProfileSelection: boolean = raw.requiresProfileSelection ?? false;

    const availableProfiles: AvailableProfile[] = (raw.availableProfiles ?? []).map(
      (p: any): AvailableProfile => ({
        id: p.id,
        type: (p.name ?? p.type ?? p.profile) as ProfileType,
        label: p.displayName ?? p.label ?? p.name ?? p.type,
        displayName: p.displayName ?? p.label ?? p.name,
        description: p.description ?? '',
        dashboardRoute: undefined,
      }),
    );

    // Backend wraps in .auth — extract it
    const src = raw.auth ?? raw;
    const auth: AuthPayload | undefined = src?.user ? {
      user: { ...src.user, id: String(src.user?.id ?? '') },
      accessToken: src.accessToken,
      refreshToken: src.refreshToken,
      activeProfile: (src.activeProfile as ProfileType) ?? null,
    } : undefined;

    return { requiresProfileSelection, availableProfiles, auth };
  }

  private apply(res: SigninResponse): void {
    if (res.requiresProfileSelection) {
      // Store token so select-profile request can be authorized
      if (res.auth?.accessToken) {
        this._accessToken.set(res.auth.accessToken);
        this.storage.setString(TOKEN_KEY, res.auth.accessToken);
      }
      // Store user so navbar shows name on select-profile page
      if (res.auth?.user) {
        this._user.set(res.auth.user);
        this.storage.set(AUTH_STORAGE_KEY, { user: res.auth.user, activeProfile: null });
      }
      this._pendingProfiles.set(res.availableProfiles ?? []);
      this.storage.set(PROFILES_STORAGE_KEY, res.availableProfiles ?? []);
      return;
    }
    if (res.auth) this.setSession(res.auth);
  }

  private setSession(auth: AuthPayload): void {
    this._accessToken.set(auth.accessToken);
    this._user.set(auth.user);
    this._activeProfile.set(auth.activeProfile ?? null);
    this.storage.setString(TOKEN_KEY, auth.accessToken);
    this.storage.set(AUTH_STORAGE_KEY, {
      user: auth.user,
      activeProfile: auth.activeProfile ?? null,
    });
  }

  private restoreSession(): void {
    const token    = this.storage.getString(TOKEN_KEY);
    const saved    = this.storage.get<{ user: User; activeProfile: ProfileType | null }>(AUTH_STORAGE_KEY);
    const profiles = this.storage.get<AvailableProfile[]>(PROFILES_STORAGE_KEY);
    if (token)                this._accessToken.set(token);
    if (saved?.user)          this._user.set(saved.user);
    if (saved?.activeProfile) this._activeProfile.set(saved.activeProfile);
    if (profiles?.length)     this._pendingProfiles.set(profiles);
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
    this.storage.remove(TOKEN_KEY);
    this.storage.remove(AUTH_STORAGE_KEY);
  }
}
