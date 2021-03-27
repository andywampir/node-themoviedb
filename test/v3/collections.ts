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
const COLLECTION_ID = 86311; // Marvel's Avangers

test.before(t => {
	const mdb = new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	});

	t.context.mdb = mdb;
});

test('[v3:collections] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.collections().details({ collectionID: 1 }),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	let requiredCollectionIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.collections().details(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredCollectionIDError.parameter, 'collectionID');
	requiredCollectionIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.collections().images(),
		{ instanceOf: RequiredParameterError },
	);
	t.is(requiredCollectionIDError.parameter, 'collectionID');
	requiredCollectionIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.collections().translations(),
		{ instanceOf: RequiredParameterError },
	);
	t.is(requiredCollectionIDError.parameter, 'collectionID');
});

test('[v3:collections] details', async t => {
	const { mdb } = t.context;
	const collection = mdb.collections({
		collectionID: COLLECTION_ID,
		language: 'ru-RU',
	});

	await t.notThrowsAsync(collection.details());
	await t.notThrowsAsync(mdb.collections().details({
		collectionID: COLLECTION_ID,
		language: 'ru-RU',
	}));

	const details = await collection.details();

	t.truthy(details);
	t.is(details.id, COLLECTION_ID);
});

test('[v3:collections] images', async t => {
	const { mdb } = t.context;
	const collection = mdb.collections({
		collectionID: COLLECTION_ID,
		language: 'ru-RU',
	});

	await t.notThrowsAsync(collection.images());
	await t.notThrowsAsync(mdb.collections().images({
		collectionID: COLLECTION_ID,
		language: 'ru-RU',
	}));

	const images = await collection.images();

	t.truthy(images);
	t.is(images.id, COLLECTION_ID);
});

test('[v3:collections] translations', async t => {
	const { mdb } = t.context;
	const collection = mdb.collections({
		collectionID: COLLECTION_ID,
		language: 'ru-RU',
	});

	await t.notThrowsAsync(collection.translations());
	await t.notThrowsAsync(mdb.collections().translations({
		collectionID: COLLECTION_ID,
		language: 'ru-RU',
	}));

	const translations = await collection.translations();

	t.truthy(translations);
	t.is(translations.id, COLLECTION_ID);
});
