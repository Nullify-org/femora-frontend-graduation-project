import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationService } from '../services/notification.service';
import { TranslateService } from '@ngx-translate/core';

const AUTH_PATHS = ['/api/auth/signin', '/api/auth/register', '/api/auth/refresh'];

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const notifications = inject(NotificationService);
  const translate = inject(TranslateService);
  const token = auth.accessToken();

  let authReq = req.clone({ withCredentials: true });

  if (token && !req.headers.has('Authorization')) {
    authReq = authReq.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 403) {
        notifications.error(translate.instant('ERRORS.FORBIDDEN'));
        return throwError(() => err);
      }

      if (err.status === 500) {
        notifications.error(translate.instant('ERRORS.SERVER'));
        return throwError(() => err);
      }

      const isAuthEndpoint = AUTH_PATHS.some((p) => req.url.includes(p));
      if (err.status !== 401 || isAuthEndpoint || req.headers.has('X-Retry')) {
        return throwError(() => err);
      }

      return auth.refreshToken().pipe(
        switchMap((payload) => {
          const retryReq = req.clone({
            withCredentials: true,
            setHeaders: {
              Authorization: `Bearer ${payload.accessToken}`,
              'X-Retry': 'true',
            },
          });
          return next(retryReq);
        }),
        catchError((refreshErr) => {
          auth.logoutLocal();
          return throwError(() => refreshErr);
        }),
      );
    }),
  );
};
