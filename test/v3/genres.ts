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

test('[v3:genres] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	let notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.genres().movie(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.genres().tv(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);
});

test('[v3:genres] movie', async t => {
	const { mdb } = t.context;
	const genres = mdb.genres();

	await t.notThrowsAsync(genres.movie());
	await t.notThrowsAsync(mdb.genres().movie('en-US'));

	const movie = await genres.movie();

	t.truthy(movie.genres);
});

test('[v3:genres] tv', async t => {
	const { mdb } = t.context;
	const genres = mdb.genres();

	await t.notThrowsAsync(genres.tv());
	await t.notThrowsAsync(mdb.genres().tv('en-US'));

	const tv = await genres.tv();

	t.truthy(tv.genres);
});
