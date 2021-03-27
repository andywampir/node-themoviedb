/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import { NotEnoughPermissionError } from '../../src/errors';
// eslint-disable-next-line ava/no-import-test-files
import * as testUtils from '../helper';

import type AuthenticationEndpointNS from '../../src/interfaces/v3/authentication';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;
const TMDB_LOGIN = process.env.TMDB_LOGIN as string;
const TMDB_PASSWORD = process.env.TMDB_PASSWORD as string;

test.before(t => {
	t.context.mdb = new MovieDB({ accessToken: TMDB_ACCESS_TOKEN });
});

test('[v3:authentication] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_api_key' });

	// Access token
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.authentication().newGuestSession(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	mdb.setAccessToken(TMDB_ACCESS_TOKEN);

	await t.notThrowsAsync(mdb.authentication().newGuestSession());
});

test('[v3:authentication] guest-session', async t => {
	const { mdb } = t.context;
	const authentication = mdb.authentication();

	await t.notThrowsAsync(authentication.newGuestSession());

	const newGuestSession = await authentication.newGuestSession();

	t.truthy(newGuestSession);
	t.true(newGuestSession.success);
	t.truthy(newGuestSession.guest_session_id);
	t.truthy(newGuestSession.expires_at);
});

test('[v3:authentication] user-session', async t => {
	const { mdb } = t.context;
	const authentication = mdb.authentication();

	await t.notThrowsAsync(authentication.newToken());

	const validateTokenTest = await t.try('[v3:authentication] validate-token-with-login', async tt => {
		const requestToken = await testUtils.getRequestToken(mdb);

		tt.truthy(requestToken);
		tt.true(requestToken.success);
		tt.truthy(requestToken.request_token);
		tt.truthy(requestToken.expires_at);
		const notEnoughPermissionError = await tt.throwsAsync<NotEnoughPermissionError>(
			authentication.validateToken({
				password: 'fake_password',
				username: 'fake_username',
				requestToken: 'fake_request_token',
			}),
			{ instanceOf: NotEnoughPermissionError },
		);

		tt.is(notEnoughPermissionError.httpCode, 401);
		tt.is(
			notEnoughPermissionError.message,
			'Invalid request token: The request token is either expired or invalid.',
		);
		tt.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
		tt.is(notEnoughPermissionError.statusCode, 33);

		await tt.notThrowsAsync(authentication.validateToken({
			password: TMDB_PASSWORD,
			username: TMDB_LOGIN,
			requestToken: requestToken.request_token as string,
		}));
	});

	const createSessionTest = await t.try('[v3:authentication] create-session', async tt => {
		const validatedToken = await testUtils.getValidatedToken(mdb);

		tt.truthy(validatedToken);
		tt.truthy(validatedToken.success);
		tt.truthy(validatedToken.expires_at);
		tt.truthy(validatedToken.request_token);
		const notEnoughPermissionError = await tt.throwsAsync<NotEnoughPermissionError>(
			authentication.newSession({ requestToken: 'fake_request_token' }),
			{ instanceOf: NotEnoughPermissionError },
		);

		tt.is(notEnoughPermissionError.httpCode, 401);
		tt.is(notEnoughPermissionError.message, 'Session denied.');
		tt.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
		tt.is(notEnoughPermissionError.statusCode, 17);

		await tt.notThrowsAsync(authentication.newSession({ requestToken: validatedToken.request_token }));
	});

	validateTokenTest.commit();
	createSessionTest.commit();
});

test('[v3:authentication] delete-session', async t => {
	const { mdb } = t.context;
	const mdbWithFakeAccessToken = new MovieDB({ accessToken: 'fake_access_token' });
	const authentication = mdb.authentication();
	const newGuestSession = await authentication.newGuestSession();

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithFakeAccessToken.authentication().deleteSession({ sessionID: 'fake_session_id' }),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	const failureResponse
		= await authentication
			.deleteSession({ sessionID: 'fake_session_id' }) as AuthenticationEndpointNS.Types.DeleteSessionFailure;

	t.false(failureResponse.success);
	t.is(failureResponse.status_code, 6);
	t.is(failureResponse.status_message, 'Invalid id: The pre-requisite id is invalid or not found.');

	await t.notThrowsAsync(authentication.deleteSession({ sessionID: newGuestSession.guest_session_id }));
});

test.todo('[v3:authentication] convert-token-from-v4');
