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

test('[v3:changes] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	// Access token
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.changes().tv(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);
});

test('[v3:changes] movie', async t => {
	const changes = t.context.mdb.changes();

	await t.notThrowsAsync(changes.movie());

	const movie = await changes.movie({
		startDate: '',
		endDate: '',
		page: 1,
	});

	t.truthy(movie);
	t.is(movie.page, 1);
	t.is(typeof movie.results, 'object');
	t.is(typeof movie.total_pages, 'number');
	t.is(typeof movie.total_results, 'number');
});

test('[v3:changes] tv', async t => {
	const changes = t.context.mdb.changes();

	await t.notThrowsAsync(changes.tv());

	const tv = await changes.tv({
		startDate: '',
		endDate: '',
		page: 1,
	});

	t.truthy(tv);
	t.is(tv.page, 1);
	t.is(typeof tv.results, 'object');
	t.is(typeof tv.total_pages, 'number');
	t.is(typeof tv.total_results, 'number');
});

test('[v3:changes] person', async t => {
	const changes = t.context.mdb.changes();

	await t.notThrowsAsync(changes.person());

	const person = await changes.person({
		startDate: '',
		endDate: '',
		page: 1,
	});

	t.truthy(person);
	t.is(person.page, 1);
	t.is(typeof person.results, 'object');
	t.is(typeof person.total_pages, 'number');
	t.is(typeof person.total_results, 'number');
});
