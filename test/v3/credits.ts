/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import {
	NotEnoughPermissionError,
	RequiredParameterError,
} from '../../src/errors';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;
const CREDIT_ID = '53752474c3a3681efb000156'; // Barry Alen / The Flash

test.before(t => {
	const mdb = new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	});

	t.context.mdb = mdb;
});

test('[v3:credits] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.credits().details('1337'),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	const requiredCreditIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.credits().details(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredCreditIDError.parameter, 'creditID');
});

test('[v3:credits] details', async t => {
	const { mdb } = t.context;
	const credits = mdb.credits({ creditID: CREDIT_ID });

	await t.notThrowsAsync(credits.details());
	await t.notThrowsAsync(mdb.credits().details(CREDIT_ID));

	const details = await credits.details();

	t.truthy(details);
	t.is(details.id, CREDIT_ID);
});
