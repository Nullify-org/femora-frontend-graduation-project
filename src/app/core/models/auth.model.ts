import { AvailableProfile, ProfileType, User } from './user.model';

export interface AuthPayload {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: string;
  activeProfile?: ProfileType | null;
  user: User;
}

export interface SigninResponse {
  requiresProfileSelection: boolean;
  auth?: AuthPayload;
  accessToken?: string;
  availableProfiles?: AvailableProfile[];
}

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
}

export interface SelectProfileRequest {
  profile: ProfileType;
}
