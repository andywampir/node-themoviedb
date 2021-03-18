import AuthEndpointNS from '../../interfaces/v4/auth';

import type { IClient } from '../../utils/client';

export default class AuthEndpoint implements AuthEndpointNS.Class {
	private readonly client: IClient;

	public constructor(options: AuthEndpointNS.Options.Constructor) {
		this.client = options.client;
	}

	public async createRequestToken(redirectTo: string): Promise<AuthEndpointNS.Results.CreateRequestToken> {
		return this.client.post(
			'auth/request_token',
			{ json: { redirect_to: redirectTo } },
		);
	}

	public async createAccessToken(requestToken: string): Promise<AuthEndpointNS.Results.CreateAccessToken> {
		return this.client.post(
			'auth/access_token',
			{ json: { request_token: requestToken } },
		);
	}

	public async deleteAccessToken(accessToken: string): Promise<AuthEndpointNS.Results.DeleteAccessToken> {
		return this.client.delete(
			'auth/access_token',
			{ json: { access_token: accessToken } },
		);
	}
}
