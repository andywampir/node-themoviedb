/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../src';

import { NotEnoughPermissionError } from '../src/errors';
import { AuthenticationDeleteSessionFailure } from '../src/interfaces/v3/authentication';
// eslint-disable-next-line ava/no-import-test-files
import * as testUtils from './helper';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;
const TMDB_LOGIN = process.env.TMDB_LOGIN as string;
const TMDB_PASSWORD = process.env.TMDB_PASSWORD as string;

test.before(t => {
	t.context.mdb = new MovieDB({ apiKey: TMDB_API_KEY });
});

test('errors', async t => {
	const mdb = new MovieDB({ apiKey: 'fake_api_key' });

	await t.throwsAsync(
		mdb
			.authentication()
			.newGuestSession()
			.execute(),
		{ instanceOf: NotEnoughPermissionError },
	);
	mdb.setAccessToken(TMDB_API_KEY);
	await t.notThrowsAsync(
		mdb
			.authentication()
			.newGuestSession()
			.execute(),
	);
});

test('guest session', async t => {
	const { mdb } = t.context;
	const authentication = mdb.authentication();

	await t.notThrowsAsync(
		authentication
			.newGuestSession()
			.execute(),
	);

	const response = await authentication
		.newGuestSession()
		.execute();
	const guestSession = response?.newGuestSession?.[0];

	t.truthy(guestSession);
	t.truthy(guestSession?.guest_session_id);
});

test('user session', async t => {
	const { mdb } = t.context;
	const authentication = mdb.authentication();

	await t.notThrowsAsync(
		authentication
			.newToken()
			.execute(),
	);

	const validateTokenTest = await t.try('validate token with login', async tt => {
		const requestToken = await testUtils.getRequestToken(mdb);

		tt.truthy(requestToken);
		await tt.throwsAsync(
			authentication
				.validateToken({
					password: 'fake_password',
					username: 'fake_username',
					requestToken: 'fake_request_token',
				})
				.execute(),
			{ instanceOf: NotEnoughPermissionError },
		);
		await tt.notThrowsAsync(
			authentication
				.validateToken({
					password: TMDB_PASSWORD,
					username: TMDB_LOGIN,
					requestToken: requestToken?.request_token as string,
				})
				.execute(),
		);
	});
	const createSessionTest = await t.try('create session', async tt => {
		const validatedToken = await testUtils.getValidatedToken(mdb);

		tt.truthy(validatedToken);
		await tt.throwsAsync(
			authentication
				.newSession('fake_request_token')
				.execute(),
			{ instanceOf: NotEnoughPermissionError },
		);
		await tt.notThrowsAsync(
			authentication
				.newSession(validatedToken?.request_token as string)
				.execute(),
		);
	});

	validateTokenTest.commit();
	createSessionTest.commit();
});

test('delete session', async t => {
	const { mdb } = t.context;
	const authentication = mdb.authentication();

	const response = await authentication
		.newGuestSession()
		.deleteSession('fake_session_id')
		.execute();
	const guestSession = response?.newGuestSession?.[0];
	const deleteSession = response?.deleteSession?.[0] as AuthenticationDeleteSessionFailure;

	t.truthy(guestSession);
	t.is(deleteSession.status_code, 6);
	t.truthy(deleteSession.status_message);

	await t.notThrowsAsync(
		authentication
			.deleteSession(guestSession?.guest_session_id as string)
			.execute(),
	);
});

test.todo('convert token from v4');
