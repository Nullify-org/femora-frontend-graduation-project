import './polyfills.server.mjs';
import {
  environment
} from "./chunk-YG65EQOF.mjs";
import {
  StorageService
} from "./chunk-JJI23ZKM.mjs";
import {
  HttpClient,
  Injectable,
  Router,
  catchError,
  computed,
  inject,
  map,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-2K2LDCAY.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/core/auth/auth.service.ts
var AUTH_STORAGE_KEY = "femora_auth";
var PROFILES_STORAGE_KEY = "femora_pending_profiles";
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  storage = inject(StorageService);
  _accessToken = signal(null, ...ngDevMode ? [{ debugName: "_accessToken" }] : (
    /* istanbul ignore next */
    []
  ));
  _user = signal(null, ...ngDevMode ? [{ debugName: "_user" }] : (
    /* istanbul ignore next */
    []
  ));
  _activeProfile = signal(null, ...ngDevMode ? [{ debugName: "_activeProfile" }] : (
    /* istanbul ignore next */
    []
  ));
  _pendingProfiles = signal([], ...ngDevMode ? [{ debugName: "_pendingProfiles" }] : (
    /* istanbul ignore next */
    []
  ));
  accessToken = this._accessToken.asReadonly();
  user = this._user.asReadonly();
  activeProfile = this._activeProfile.asReadonly();
  pendingProfiles = this._pendingProfiles.asReadonly();
  isAuthenticated = computed(() => !!this._accessToken(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  displayName = computed(() => {
    const u = this._user();
    return u ? `${u.firstName} ${u.lastName}`.trim() : "";
  }, ...ngDevMode ? [{ debugName: "displayName" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.restoreSession();
  }
  register(payload) {
    return this.http.post(`${environment.apiUrl}/api/auth/register`, payload, {
      withCredentials: true
    }).pipe(map((res) => ({ requiresProfileSelection: false, auth: this.normalizeAuth(res.auth) })), tap((res) => {
      if (res.auth)
        this.setSession(res.auth);
    }), catchError((err) => throwError(() => err)));
  }
  signin(payload) {
    return this.http.post(`${environment.apiUrl}/api/auth/signin`, payload, {
      withCredentials: true
    }).pipe(map((res) => this.normalizeSigninResponse(res)), tap((res) => {
      if (res.requiresProfileSelection) {
        const token = res.accessToken ?? res.auth?.accessToken;
        if (token) {
          this._accessToken.set(token);
          this.storage.setString("femora_access_token", token);
        }
        this._pendingProfiles.set(res.availableProfiles ?? []);
        this.storage.set(PROFILES_STORAGE_KEY, res.availableProfiles ?? []);
        return;
      }
      if (res.auth)
        this.setSession(res.auth);
    }));
  }
  selectProfile(profile) {
    const body = { profile };
    return this.http.post(`${environment.apiUrl}/api/auth/select-profile`, body, { withCredentials: true }).pipe(map((res) => ({
      user: res.user,
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
      activeProfile: res.activeProfile
    })), tap((auth) => {
      this.setSession(auth);
      this.clearPendingProfiles();
    }));
  }
  refreshToken() {
    return this.http.post(`${environment.apiUrl}/api/auth/refresh`, {}, { withCredentials: true }).pipe(map((res) => ({
      user: res.user,
      accessToken: res.accessToken,
      activeProfile: this._activeProfile()
    })), tap((auth) => this.setSession(auth)));
  }
  logout() {
    return this.http.post(`${environment.apiUrl}/api/auth/logout`, {}, { withCredentials: true }).pipe(tap(() => this.clearSession()), catchError(() => {
      this.clearSession();
      return throwError(() => new Error("Logout failed"));
    }));
  }
  logoutLocal() {
    this.clearSession();
    this.router.navigate(["/login"]);
  }
  handlePostAuthNavigation() {
    if (this._pendingProfiles().length > 0) {
      this.router.navigate(["/select-profile"]);
      return;
    }
    this.router.navigate(["/dashboard"]);
  }
  setPendingEmail(email) {
    this.storage.setString("femora_pending_email", email);
  }
  getPendingEmail() {
    return this.storage.getString("femora_pending_email");
  }
  clearPendingEmail() {
    this.storage.remove("femora_pending_email");
  }
  normalizeSigninResponse(res) {
    if (res.auth) {
      return __spreadProps(__spreadValues({}, res), { auth: this.normalizeAuth(res.auth) });
    }
    return res;
  }
  normalizeAuth(auth) {
    return __spreadProps(__spreadValues({}, auth), {
      user: __spreadProps(__spreadValues({}, auth.user), {
        id: String(auth.user.id)
      })
    });
  }
  setSession(auth) {
    this._accessToken.set(auth.accessToken);
    this._user.set(auth.user);
    this._activeProfile.set(auth.activeProfile ?? null);
    this.storage.setString("femora_access_token", auth.accessToken);
    this.storage.set(AUTH_STORAGE_KEY, {
      user: auth.user,
      activeProfile: auth.activeProfile ?? null
    });
  }
  restoreSession() {
    const token = this.storage.getString("femora_access_token");
    const saved = this.storage.get(AUTH_STORAGE_KEY);
    const profiles = this.storage.get(PROFILES_STORAGE_KEY);
    if (token)
      this._accessToken.set(token);
    if (saved?.user)
      this._user.set(saved.user);
    if (saved?.activeProfile)
      this._activeProfile.set(saved.activeProfile);
    if (profiles?.length)
      this._pendingProfiles.set(profiles);
  }
  clearPendingProfiles() {
    this._pendingProfiles.set([]);
    this.storage.remove(PROFILES_STORAGE_KEY);
  }
  clearSession() {
    this._accessToken.set(null);
    this._user.set(null);
    this._activeProfile.set(null);
    this.clearPendingProfiles();
    this.storage.remove("femora_access_token");
    this.storage.remove(AUTH_STORAGE_KEY);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-RERPWI7G.mjs.map
