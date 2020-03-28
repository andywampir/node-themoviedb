/* eslint-disable camelcase */
import test from 'ava';

import MovieDB from '../src';

import { NotEnoughPermissionError } from '../src/errors';
import {
  AuthenticationNewToken, AuthenticationValidateToken
} from '../src/interfaces/authentication';

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;
const TMDB_LOGIN = process.env.TMDB_LOGIN as string;
const TMDB_PASSWORD = process.env.TMDB_PASSWORD as string;

test('errors', async t => {
  const mdb = new MovieDB({ apiKey: 'fake_api_key' });

  await t.throwsAsync(
    mdb
      .authentication()
      .newGuestSession()
      .execute(),
    { instanceOf: NotEnoughPermissionError },
  );
  mdb.setApiKey(TMDB_API_KEY);
  await t.notThrowsAsync(
    mdb
      .authentication()
      .newGuestSession()
      .execute(),
  );
});

test('guest session', async t => {
  const mdb = new MovieDB({ apiKey: TMDB_API_KEY });

  await t.notThrowsAsync(
    mdb
      .authentication()
      .newGuestSession()
      .execute(),
  );

  const response = await mdb
    .authentication()
    .newGuestSession()
    .execute();
  const guestSession = response?.newGuestSession?.[0];

  t.truthy(guestSession);
  t.truthy(guestSession?.guest_session_id);

  t.log('guest session id', guestSession?.guest_session_id);
});

test('user session', async t => {
  const mdb = new MovieDB({ apiKey: TMDB_API_KEY });
  const createRequestTokenTest = await t.try('create request token', async tt => {
    await tt.notThrowsAsync(
      mdb
        .authentication()
        .newToken()
        .execute(),
    );
  });
  const validateTokenTest = await t.try('validate token with login', async tt => {
    const requestToken = await getRequestToken(mdb);

    tt.truthy(requestToken);
    await tt.throwsAsync(
      mdb
        .authentication()
        .validateToken({
          password: 'fake_password',
          username: 'fake_username',
          requestToken: 'fake_request_token',
        })
        .execute(),
      { instanceOf: NotEnoughPermissionError },
    );
    await tt.notThrowsAsync(
      mdb
        .authentication()
        .validateToken({
          password: TMDB_PASSWORD,
          username: TMDB_LOGIN,
          requestToken: requestToken?.request_token as string,
        })
        .execute(),
    );
  });
  const createSessionTest = await t.try('create session', async tt => {
    const validatedToken = await getValidatedToken(mdb);

    tt.truthy(validatedToken);
    await tt.throwsAsync(
      mdb
        .authentication()
        .newSession('fake_request_token')
        .execute(),
    );
    await tt.notThrowsAsync(
      mdb
        .authentication()
        .newSession(validatedToken?.request_token as string)
        .execute(),
    );
  });

  createRequestTokenTest.commit();
  validateTokenTest.commit();
  createSessionTest.commit();
});

test('delete session', async t => {
  const mdb = new MovieDB({ apiKey: TMDB_API_KEY });
  const validatedToken = await getValidatedToken(mdb);
  const response = await mdb
    .authentication()
    .newSession(validatedToken?.request_token as string)
    .newGuestSession()
    .execute();
  const sessionID = response?.newSession?.[0];
  const guestSessionID = response?.newGuestSession?.[0];

  t.truthy(sessionID);
  t.truthy(guestSessionID);

  // TODO: Incorrect behavior, it's must throws error
  await t.notThrowsAsync(
    mdb
      .authentication()
      .deleteSession('fake_session_id')
      .execute(),
  );

  await t.notThrowsAsync(
    mdb
      .authentication()
      .deleteSession(sessionID?.session_id as string)
      .deleteSession(guestSessionID?.guest_session_id as string)
      .execute(),
  );
});

test.todo('convert token from v4');

async function getRequestToken(mdb: MovieDB): Promise<AuthenticationNewToken | null> {
  const response = await mdb
    .authentication()
    .newToken()
    .execute();

  return response?.newToken?.[0] ?? null;
}

async function getValidatedToken(mdb: MovieDB): Promise<AuthenticationValidateToken | null> {
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
