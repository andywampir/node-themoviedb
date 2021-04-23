/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import {
	NotEnoughPermissionError, RequiredParameterError,
} from '../../src/errors';

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

test('[v3:find] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.find().byID({
			externalID: 'fake',
			externalSource: 'imdb_id',
		}),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	let requiredParameterError = await t.throwsAsync<RequiredParameterError>(
		// eslint-disable-next-line lines-around-comment
		// @ts-ignore
		mdb.find().byID({}),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredParameterError.parameter, 'externalID');

	requiredParameterError = await t.throwsAsync<RequiredParameterError>(
		// eslint-disable-next-line lines-around-comment
		// @ts-ignore
		mdb.find().byID({ externalID: 'fake' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredParameterError.parameter, 'externalSource');
});

test('[v3:find] by-id', async t => {
	const { mdb } = t.context;
	const find = mdb.find();
	const options = {
		externalID: 'tt12361974',
		externalSource: 'imdb_id' as 'imdb_id',
		language: 'en-US',
	};

	await t.notThrowsAsync(find.byID(options));
	await t.notThrowsAsync(mdb.find().byID(options));

	const byID = await find.byID(options);

	t.truthy(byID.movie_results);
});
