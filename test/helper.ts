/* eslint-disable camelcase */
import MovieDB from '../src';

import type AuthenticationEndpointNS from '../src/interfaces/v3/authentication';

const TMDB_LOGIN = process.env.TMDB_LOGIN as string;
const TMDB_PASSWORD = process.env.TMDB_PASSWORD as string;

let session: AuthenticationEndpointNS.Results.NewSession | null = null;

export async function getRequestToken(mdb: MovieDB): Promise<AuthenticationEndpointNS.Results.NewToken> {
	return mdb.authentication().newToken();
}

export async function getValidatedToken(mdb: MovieDB): Promise<AuthenticationEndpointNS.Results.ValidateToken> {
	const requestToken = await getRequestToken(mdb);

	return mdb
		.authentication()
		.validateToken({
			password: TMDB_PASSWORD,
			username: TMDB_LOGIN,
			requestToken: requestToken.request_token as string,
		});
}

export async function getSession(mdb: MovieDB): Promise<AuthenticationEndpointNS.Results.NewSession> {
	if (!session) {
		const validatedToken = await getValidatedToken(mdb);
		const newSession = await mdb.authentication().newSession({ requestToken: validatedToken.request_token });

		// eslint-disable-next-line require-atomic-updates
		session = newSession;
	}

	return session;
}
