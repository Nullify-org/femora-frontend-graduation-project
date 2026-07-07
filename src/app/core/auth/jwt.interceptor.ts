import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationService } from '../services/notification.service';
import { TranslateService } from '@ngx-translate/core';

const AUTH_PATHS = [
  '/api/auth/signin',
  '/api/auth/register',
  '/api/auth/refresh',
  '/api/auth/logout',
  '/api/auth/google',
  '/api/auth/facebook',
  '/api/auth/send-otp',
  '/api/auth/verify-otp',
];

// Background requests — never show connection errors for these
const SILENT_PATHS = [
  '/api/ai/',
  '/api/courses',
  '/api/auth/refresh',
];

let isRefreshing = false;
const refreshDone$ = new BehaviorSubject<string | null>(null);

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth    = inject(AuthService);
  const notify  = inject(NotificationService);
  const t       = inject(TranslateService);
  const token   = auth.accessToken();

  let authReq = req.clone({ withCredentials: true });
  if (token && !req.headers.has('Authorization')) {
    authReq = authReq.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  return next(authReq).pipe(
    catchError((err) => {
      const isSilent = SILENT_PATHS.some(p => req.url.includes(p));

      // ── No connection (backend down) ─────────────────────────────────────
      if (err.status === 0) {
        if (!isSilent) notify.error('تعذّر الاتصال بالسيرفر. تأكدى من تشغيل الـ backend.');
        return throwError(() => err);
      }

      // ── 403 ──────────────────────────────────────────────────────────────
      if (err.status === 403) {
        notify.error(t.instant('ERRORS.FORBIDDEN'));
        return throwError(() => err);
      }

      // ── 500 ──────────────────────────────────────────────────────────────
      if (err.status === 500) {
        if (!isSilent) notify.error(t.instant('ERRORS.SERVER'));
        return throwError(() => err);
      }

      // ── 401 — attempt refresh ─────────────────────────────────────────────
      const isAuthEndpoint = AUTH_PATHS.some(p => req.url.includes(p));
      const isRetry        = req.headers.has('X-Retry');

      if (err.status !== 401 || isAuthEndpoint || isRetry || !auth.isAuthenticated()) {
        return throwError(() => err);
      }

      // Already refreshing → wait for the new token
      if (isRefreshing) {
        return refreshDone$.pipe(
          filter(t => t !== null),
          take(1),
          switchMap(newToken => next(req.clone({
            withCredentials: true,
            setHeaders: { Authorization: `Bearer ${newToken}`, 'X-Retry': 'true' },
          }))),
        );
      }
isRefreshing = true;
refreshDone$.next(null);

return auth.refreshToken().pipe(
  switchMap(payload => {
    isRefreshing = false;
    refreshDone$.next(payload.accessToken ?? null);
    return next(req.clone({
      withCredentials: true,
      setHeaders: { Authorization: `Bearer ${payload.accessToken}`, 'X-Retry': 'true' },
    }));
  }),
  catchError(refreshErr => {
    isRefreshing = false;
    refreshDone$.next(null);
    auth.logoutLocal();
    return throwError(() => refreshErr);
  }),
      );
    }),
  );
};
