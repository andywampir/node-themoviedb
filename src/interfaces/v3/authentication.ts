import type { IClient } from '../../utils/Client';

namespace AuthenticationEndpointNS {
	export interface Class {
		newGuestSession(): Promise<Results.NewGuestSession>;
		newToken(): Promise<Results.NewToken>;
		newSession(options: Options.NewSession): Promise<Results.NewSession>;
		validateToken(options: Options.ValidateToken): Promise<Results.ValidateToken>;
		convertToken(options: Options.ConvertToken): Promise<Results.ConvertToken>;
		deleteSession(options: Options.DeleteSession): Promise<Results.DeleteSession>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
		}

		export interface NewSession {
			requestToken: string;
		}

		export interface ValidateToken {
			username: string;
			password: string;
			requestToken: string;
		}

		export interface ConvertToken {
			accessToken: string;
		}

		export interface DeleteSession {
			sessionID: string;
		}
	}

	export namespace Results {
		export type NewGuestSession = Types.NewGuestSession;
		export type NewToken = Types.NewToken;
		export type NewSession = Types.NewSession;
		export type ValidateToken = Types.ValidateToken;
		export type ConvertToken = Types.ConvertToken;
		export type DeleteSession = Types.DeleteSession;
	}

	namespace Types {
		export interface NewGuestSession {
			success: boolean;
			guest_session_id: string;
			expires_at: string;
		}

		export interface NewToken {
			success: boolean;
			expires_at: string;
			request_token: string;
		}

		export interface NewSession {
			success: boolean;
			session_id: string;
		}

		export interface ValidateToken extends NewToken {}
		export interface ConvertToken extends NewSession {}

		export type DeleteSession =
      | DeleteSessionSuccess
      | DeleteSessionFailure;

		interface DeleteSessionSuccess {
			success: boolean;
		}

		interface DeleteSessionFailure {
			status_code: number;
			status_message: string;
		}
	}
}

export default AuthenticationEndpointNS;
