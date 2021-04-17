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

test('[v3:configuration] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.configuration().api(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);
});

test('[v3:configuration] api', async t => {
	const { mdb } = t.context;
	const configuration = mdb.configuration();

	await t.notThrowsAsync(configuration.api());
	await t.notThrowsAsync(mdb.configuration().api());

	const api = await configuration.api();

	t.truthy(api);
	t.truthy(api.images);
	t.truthy(api.change_keys);
});

test('[v3:configuration] countries', async t => {
	const { mdb } = t.context;
	const configuration = mdb.configuration();

	await t.notThrowsAsync(configuration.countries());
	await t.notThrowsAsync(mdb.configuration().countries());

	const countries = await configuration.countries();

	t.truthy(countries);
});

test('[v3:configuration] jobs', async t => {
	const { mdb } = t.context;
	const configuration = mdb.configuration();

	await t.notThrowsAsync(configuration.jobs());
	await t.notThrowsAsync(mdb.configuration().countries());

	const jobs = await configuration.jobs();

	t.truthy(jobs);
});

test('[v3:configuration] languages', async t => {
	const { mdb } = t.context;
	const configuration = mdb.configuration();

	await t.notThrowsAsync(configuration.languages());
	await t.notThrowsAsync(mdb.configuration().languages());

	const languages = await configuration.languages();

	t.truthy(languages);
});

test('[v3:configuration] primary-translations', async t => {
	const { mdb } = t.context;
	const configuration = mdb.configuration();

	await t.notThrowsAsync(configuration.primaryTranslations());
	await t.notThrowsAsync(mdb.configuration().primaryTranslations());

	const primaryTranslations = await configuration.primaryTranslations();

	t.truthy(primaryTranslations);
});

test('[v3:configuration] timezones', async t => {
	const { mdb } = t.context;
	const configuration = mdb.configuration();

	await t.notThrowsAsync(configuration.timezones());
	await t.notThrowsAsync(mdb.configuration().timezones());

	const timezones = await configuration.timezones();

	t.truthy(timezones);
});
