import { AvailableProfile, ProfileType, User } from './user.model';

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SigninRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SelectProfileRequest {
  profile: ProfileType;
}

export interface AuthPayload {
  user: User;
  accessToken: string;
  refreshToken?: string;
  activeProfile?: ProfileType | null;
}

export interface SigninResponse {
  requiresProfileSelection: boolean;
  auth?: AuthPayload;
  accessToken?: string;
  availableProfiles?: AvailableProfile[];
}

export interface GoogleAuthRequest {
  idToken?: string;
  token?: string;
}

export interface FacebookAuthRequest {
  accessToken?: string;
  token?: string;
}

// ── New models for new endpoints ──────────────────────────────────────────────

export interface ExternalLoginRequest {
  provider: 'Google' | 'Facebook';
  idToken: string;
}

export interface VerifyEmailRequest {
  userId: string;
  token: string;
}

export interface ResendVerificationRequest {
  email: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  newPassword: string;
  confirmPassword: string;
}
