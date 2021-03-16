import AuthenticationEndpointNS from '../../interfaces/v3/authentication';

import type { IClient } from '../../utils/client';

export default class AuthenticationEndpoint implements AuthenticationEndpointNS.Class {
	private readonly client: IClient;

	public constructor(options: AuthenticationEndpointNS.Options.Constructor) {
		this.client = options.client;
	}

	public async newGuestSession(): Promise<AuthenticationEndpointNS.Results.NewGuestSession> {
		return this.client.get('authentication/guest_session/new');
	}

	public async newToken(): Promise<AuthenticationEndpointNS.Results.NewToken> {
		return this.client.get('authentication/token/new');
	}

	public async newSession(
		options: AuthenticationEndpointNS.Options.NewSession,
	): Promise<AuthenticationEndpointNS.Results.NewSession> {
		return this.client.post(
			'authentication/session/new',
			{ json: { request_token: options.requestToken } },
		);
	}

	public async validateToken(
		options: AuthenticationEndpointNS.Options.ValidateToken,
	): Promise<AuthenticationEndpointNS.Results.ValidateToken> {
		return this.client.post(
			'authentication/token/validate_with_login',
			{
				json: {
					username: options.username,
					password: options.password,
					request_token: options.requestToken,
				},
			},
		);
	}

	public async convertToken(
		options: AuthenticationEndpointNS.Options.ConvertToken,
	): Promise<AuthenticationEndpointNS.Results.ConvertToken> {
		return this.client.post(
			'authentication/session/convert/4',
			{ json: { access_token: options.accessToken } },
		);
	}

	public async deleteSession(
		options: AuthenticationEndpointNS.Options.DeleteSession,
	): Promise<AuthenticationEndpointNS.Results.DeleteSession> {
		return this.client.delete(
			'authentication/session',
			{ json: { session_id: options.sessionID } },
		);
	}
}
