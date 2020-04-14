/* eslint-disable camelcase */

// Options
export interface AuthenticationValidateTokenOptions {
  username: string;
  password: string;
  requestToken: string;
}

// Return types
export interface AuthenticationReturnType {
  newGuestSession?: AuthenticationNewGuestSession[];
  newToken?: AuthenticationNewToken[];
  newSession?: AuthenticationNewSession[];
  validateToken?: AuthenticationValidateToken[];
  convertToken?: AuthenticationConvertToken[];
  deleteSession?: AuthenticationDeleteSession[];
}

export interface AuthenticationNewGuestSession {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface AuthenticationNewToken {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface AuthenticationNewSession {
  success: boolean;
  session_id: string;
}

export interface AuthenticationValidateToken extends AuthenticationNewToken {}
export interface AuthenticationConvertToken extends AuthenticationNewSession {}

export type AuthenticationDeleteSession =
  AuthenticationDeleteSessionSuccess
  | AuthenticationDeleteSessionFailure;

export interface AuthenticationDeleteSessionSuccess {
  success: boolean;
}

export interface AuthenticationDeleteSessionFailure {
  status_code: number;
  status_message: string;
}
