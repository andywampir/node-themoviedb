/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import { NotEnoughPermissionError } from '../../src/errors';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test.before(t => {
	const mdb = new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	});

	t.context.mdb = mdb;
});

test('[v3:discover] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	let notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.discover().movie(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.discover().tv(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);
});

test('[v3:discover] movie', async t => {
	const { mdb } = t.context;
	const discover = mdb.discover();

	await t.notThrowsAsync(discover.movie());
	await t.notThrowsAsync(mdb.discover().movie());

	const movie = await discover.movie({
		language: 'ru-RU',
		page: 2,
	});

	t.truthy(movie);
	t.truthy(movie.results);
	t.is(movie.page, 2);
});

test('[v3:discover] tv', async t => {
	const { mdb } = t.context;
	const discover = mdb.discover();

	await t.notThrowsAsync(discover.tv());
	await t.notThrowsAsync(mdb.discover().tv());

	const tv = await discover.tv({
		language: 'ru-RU',
		page: 2,
	});

	t.truthy(tv);
	t.truthy(tv.results);
	t.is(tv.page, 2);
});
