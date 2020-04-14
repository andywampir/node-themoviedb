/* eslint-disable camelcase */
import MovieDB from '../src';

import {
  AuthenticationValidateToken, AuthenticationNewToken,
  AuthenticationNewSession,
} from '../src/interfaces/v3/authentication';

const TMDB_LOGIN = process.env.TMDB_LOGIN as string;
const TMDB_PASSWORD = process.env.TMDB_PASSWORD as string;

let session: AuthenticationNewSession | null = null;

export async function getRequestToken(mdb: MovieDB): Promise<AuthenticationNewToken | null> {
  const response = await mdb
    .authentication()
    .newToken()
    .execute();

  return response?.newToken?.[0] ?? null;
}

export async function getValidatedToken(mdb: MovieDB): Promise<AuthenticationValidateToken | null> {
  const requestToken = await getRequestToken(mdb);
  const response = await mdb
    .authentication()
    .validateToken({
      password: TMDB_PASSWORD,
      username: TMDB_LOGIN,
      requestToken: requestToken?.request_token as string,
    })
    .execute();

  return response?.validateToken?.[0] ?? null;
}

export async function getSession(mdb: MovieDB): Promise<AuthenticationNewSession | null> {
  if (!session) {
    const validatedToken = await getValidatedToken(mdb);
    const response = await mdb
      .authentication()
      .newSession(validatedToken?.request_token as string)
      .execute();

    // eslint-disable-next-line require-atomic-updates
    session = response?.newSession?.[0] ?? null;
  }

  return session;
}
