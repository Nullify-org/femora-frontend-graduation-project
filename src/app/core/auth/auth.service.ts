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
  VerifyEmailRequest,
  ResendVerificationRequest,
} from '../models/auth.model';
import { AvailableProfile, ProfileType, User, PROFILE_CONFIGS } from '../models/user.model';
import { StorageService } from '../services/storage.service';

const AUTH_STORAGE_KEY   = 'femora_auth';
const PROFILES_STORAGE_KEY = 'femora_pending_profiles';
const REMEMBER_ME_KEY    = 'femora_remember_me';
const TOKEN_KEY          = 'femora_access_token';
const REFRESH_TOKEN_KEY  = 'femora_refresh_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http    = inject(HttpClient);
  private readonly router  = inject(Router);
  private readonly storage = inject(StorageService);

  private readonly _accessToken    = signal<string | null>(null);
  private readonly _user           = signal<User | null>(null);
  private readonly _activeProfile  = signal<ProfileType | null>(null);
  private readonly _pendingProfiles = signal<AvailableProfile[]>([]);
  private readonly _isLoading      = signal<boolean>(false);

  readonly accessToken      = this._accessToken.asReadonly();
  readonly user             = this._user.asReadonly();
  readonly activeProfile    = this._activeProfile.asReadonly();
  readonly pendingProfiles  = this._pendingProfiles.asReadonly();
  readonly availableProfiles = this._pendingProfiles.asReadonly();
  readonly isLoading        = this._isLoading.asReadonly();
  readonly isAuthenticated  = computed(() => !!this._accessToken());
  readonly displayName      = computed(() => {
    const u = this._user();
    return u ? `${u.firstName} ${u.lastName}`.trim() : '';
  });
  readonly activeProfileConfig = computed(() => {
    const p = this._activeProfile();
    return p ? PROFILE_CONFIGS.find((c) => c.type === p) ?? null : null;
  });

  constructor() { this.restoreSession(); }

  // ── Register ──────────────────────────────────────────────────────────────
  register(payload: RegisterRequest): Observable<SigninResponse> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/register`, payload, { withCredentials: true })
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => this.apply(res)),
        catchError((err) => throwError(() => err)),
      );
  }

  // ── Sign In ───────────────────────────────────────────────────────────────
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

  // ── External Login (Google / Facebook) ───────────────────────────────────
  /** Unified external login — provider: "Google" | "Facebook", token: id_token or access_token */
  signinWithExternal(provider: 'Google' | 'Facebook', token: string): Observable<SigninResponse> {
    return this.http
      .post<any>(
        `${environment.apiUrl}/api/auth/external-login`,
        { provider, idToken: token },
        { withCredentials: true },
      )
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => this.apply(res)),
        catchError((err) => throwError(() => err)),
      );
  }

  /** @deprecated use signinWithExternal('Google', token) */
  signinWithGoogle(payload: GoogleAuthRequest): Observable<SigninResponse> {
    const token = payload.idToken ?? payload.token ?? '';
    return this.signinWithExternal('Google', token);
  }

  /** @deprecated use signinWithExternal('Facebook', token) */
  signinWithFacebook(payload: FacebookAuthRequest): Observable<SigninResponse> {
    const token = payload.accessToken ?? payload.token ?? '';
    return this.signinWithExternal('Facebook', token);
  }

  // ── Email Verification ────────────────────────────────────────────────────
  verifyEmail(userId: string, token: string): Observable<SigninResponse> {
    return this.http
      .get<any>(
        `${environment.apiUrl}/api/auth/verify-email`,
        { params: { userId, token }, withCredentials: true },
      )
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => this.apply(res)),
        catchError((err) => throwError(() => err)),
      );
  }

  resendVerificationEmail(email: string): Observable<void> {
    return this.http
      .post<void>(
        `${environment.apiUrl}/api/auth/resend-verification`,
        { email } as ResendVerificationRequest,
        { withCredentials: true },
      )
      .pipe(catchError((err) => throwError(() => err)));
  }

  sendOtp(email: string): Observable<void> {
    return this.http
      .post<void>(
        `${environment.apiUrl}/api/auth/send-otp`,
        { email },
        { withCredentials: true },
      )
      .pipe(catchError((err) => throwError(() => err)));
  }

  verifyOtp(email: string, otp: string): Observable<SigninResponse> {
    return this.http
      .post<any>(
        `${environment.apiUrl}/api/auth/verify-otp`,
        { email, otp },
        { withCredentials: true },
      )
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => this.apply(res)),
        catchError((err) => throwError(() => err)),
      );
  }

  // ── Select Profile ────────────────────────────────────────────────────────
  selectProfile(profile: ProfileType): Observable<AuthPayload> {
    return this.http
      .post<any>(
        `${environment.apiUrl}/api/auth/select-profile`,
        { profile } as SelectProfileRequest,
        { withCredentials: true },
      )
      .pipe(
        map((res) => this.normalize(res)),
        tap((res) => { this.apply(res); }), // keep pendingProfiles for switch role
        map((res) => res.auth!),
      );
  }

  // ── Setup Profiles ────────────────────────────────────────────────────────
  setupProfiles(roles: ProfileType[]): Observable<{ navigateTo: string; pendingApproval: boolean }> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/setup-profiles`, { roles }, { withCredentials: true })
      .pipe(
        map((res) => {
          const normalized = this.normalize(res);
          this.apply(normalized);
          const pendingApproval: boolean = res.pendingApproval ?? false;
          let navigateTo = '/';
          if (normalized.requiresProfileSelection) {
            navigateTo = '/select-profile';
          } else if (normalized.auth?.activeProfile) {
            const config = PROFILE_CONFIGS.find(c => c.type === normalized.auth!.activeProfile);
            navigateTo = config?.dashboardRoute ?? '/dashboard/trainee';
          } else if (pendingApproval) {
            navigateTo = '/pending-approval';
          }
          return { navigateTo, pendingApproval };
        }),
      );
  }

  // ── Payment / Stripe Checkout ─────────────────────────────────────────────
  createCheckoutSession(courseId?: string, successUrl?: string, cancelUrl?: string): Observable<{ sessionId: string; sessionUrl: string }> {
    const body: any = {
      successUrl: successUrl ?? `${window.location.origin}/payment-success`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/payment-cancel`,
    };
    if (courseId) body['courseId'] = courseId;

    return this.http
      .post<{ sessionId: string; sessionUrl: string }>(
        `${environment.apiUrl}/api/payments/checkout`,
        body,
        { withCredentials: true },
      )
      .pipe(catchError((err) => throwError(() => err)));
  }

  // ── Refresh / Logout ──────────────────────────────────────────────────────
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

  // ── Navigation helpers ─────────────────────────────────────────────────────
  handlePostAuthNavigation(): void {
    const profiles = this._pendingProfiles();
    if (profiles.length === 1) {
      const singleType = profiles[0].type;
      this.selectProfile(singleType).subscribe({
        next: () => {
          this.router.navigate([this.getDashboardRoute()]);
        },
        error: () => this.router.navigate(['/select-profile']),
      });
      return;
    }
    if (profiles.length > 1) { this.router.navigate(['/select-profile']); return; }
    this.router.navigate([this.getDashboardRoute()]);
  }

  getDashboardRoute(): string {
    const profile = this._activeProfile();
    const role    = this._user()?.role;
    const lookup  = profile ?? role ?? '';
    const normalized = lookup.charAt(0).toUpperCase() + lookup.slice(1).toLowerCase();

    if (normalized === 'Admin' || role === 'admin' || role === 'Admin') return '/dashboard/admin';
    if (!profile) return '/';

    const config = PROFILE_CONFIGS.find((c) => c.type === profile);
    return config?.dashboardRoute ?? '/dashboard/trainee';
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  setPendingEmail(email: string): void  { this.storage.setString('femora_pending_email', email); }
  getPendingEmail(): string | null       { return this.storage.getString('femora_pending_email'); }
  clearPendingEmail(): void              { this.storage.remove('femora_pending_email'); }
  getRememberedEmail(): string | null    { return this.storage.getString(REMEMBER_ME_KEY); }

  checkEmailExists(email: string): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(
      `${environment.apiUrl}/api/auth/check-email?email=${encodeURIComponent(email)}`
    );
  }

  // ── Private ────────────────────────────────────────────────────────────────
  private normalize(raw: any): SigninResponse {
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

    const requiresProfileSelection: boolean =
      raw.requiresProfileSelection ?? availableProfiles.length > 0;

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
      if (res.auth?.accessToken) {
        this._accessToken.set(res.auth.accessToken);
        this.storage.setString(TOKEN_KEY, res.auth.accessToken);
      }
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
    if (auth.refreshToken) this.storage.setString(REFRESH_TOKEN_KEY, auth.refreshToken);
    this.storage.set(AUTH_STORAGE_KEY, { user: auth.user, activeProfile: auth.activeProfile ?? null });
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
    this.storage.remove(REFRESH_TOKEN_KEY);
    this.storage.remove(AUTH_STORAGE_KEY);
  }
}
