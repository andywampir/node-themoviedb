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

interface AuthenticationNewGuestSession {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

interface AuthenticationNewToken {
  success: boolean;
  expires_at: string;
  request_token: string;
}

interface AuthenticationNewSession {
  success: boolean;
  session_id: string;
}

interface AuthenticationValidateToken extends AuthenticationNewToken {}

interface AuthenticationConvertToken extends AuthenticationNewSession {}

interface AuthenticationDeleteSession {
  success: boolean;
}
