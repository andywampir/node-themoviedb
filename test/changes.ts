/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../src';
import { NotEnoughPermissionError } from '../src/errors';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;

test.before(t => {
	const mdb = new MovieDB({
		apiKey: TMDB_API_KEY,
		language: 'ru-RU',
	});

	t.context.mdb = mdb;
});

test('errors', async t => {
	const mdb = new MovieDB({ apiKey: 'fake_api_key' });

	// API key
	await t.throwsAsync(
		mdb
			.changes()
			.tv()
			.execute(),
		{ instanceOf: NotEnoughPermissionError },
	);
});

test('movie', async t => {
	const changes = t.context.mdb.changes();

	await t.notThrowsAsync(
		changes
			.movie()
			.execute(),
	);

	const response = await changes
		.movie({
			startDate: '',
			endDate: '',
			page: 1,
		})
		.execute();
	const movie = response?.movie?.[0];

	t.truthy(movie);
	t.is(movie?.page, 1);
	t.is(typeof movie?.results, 'object');
});

test('tv', async t => {
	const changes = t.context.mdb.changes();

	await t.notThrowsAsync(
		changes
			.tv()
			.execute(),
	);

	const response = await changes
		.tv({
			startDate: '',
			endDate: '',
			page: 1,
		})
		.execute();
	const tv = response?.tv?.[0];

	t.truthy(tv);
	t.is(tv?.page, 1);
	t.is(typeof tv?.results, 'object');
});

test('person', async t => {
	const changes = t.context.mdb.changes();

	await t.notThrowsAsync(
		changes
			.person()
			.execute(),
	);

	const response = await changes
		.person({
			startDate: '',
			endDate: '',
			page: 1,
		})
		.execute();
	const person = response?.person?.[0];

	t.truthy(person);
	t.is(person?.page, 1);
	t.is(typeof person?.results, 'object');
});
