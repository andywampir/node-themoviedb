/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../src';
import {
  NotEnoughPermissionError, RequiredParameterError,
} from '../src/errors';

interface Context {
  mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;
const COLLECTION_ID = 86311;

test.before(t => {
  const mdb = new MovieDB({
    apiKey: TMDB_API_KEY,
    language: 'ru-RU',
  });

  t.context.mdb = mdb;
});

test('errors', async t => {
  const mdb = new MovieDB({ apiKey: 'fake_api_key' });

  await t.throwsAsync(
    mdb
      .collections()
      .details({ collectionID: 1 })
      .execute(),
    { instanceOf: NotEnoughPermissionError },
  );
  let requiredCollectionIDError = t.throws<RequiredParameterError>(
    () => mdb
      .collections()
      .details(),
    { instanceOf: RequiredParameterError },
  );

  t.is(requiredCollectionIDError.parameter, 'collectionID');
  requiredCollectionIDError = t.throws(
    () => mdb
      .collections()
      .images(),
    { instanceOf: RequiredParameterError },
  );
  t.is(requiredCollectionIDError.parameter, 'collectionID');
  requiredCollectionIDError = t.throws(
    () => mdb
      .collections()
      .translations(),
    { instanceOf: RequiredParameterError },
  );
  t.is(requiredCollectionIDError.parameter, 'collectionID');
});

test('details', async t => {
  const { mdb } = t.context;
  const collection = mdb.collections({
    collectionID: COLLECTION_ID,
    language: 'ru-RU',
  });

  await t.notThrowsAsync(
    collection
      .details()
      .execute(),
  );
  t.notThrows(
    () => mdb
      .collections()
      .details({
        collectionID: COLLECTION_ID,
        language: 'ru-RU',
      }),
  );

  const response = await collection
    .details()
    .execute();
  const details = response?.details?.[0];

  t.truthy(details);
  t.is(details?.id, COLLECTION_ID);
});

test('images', async t => {
  const { mdb } = t.context;
  const collection = mdb.collections({
    collectionID: COLLECTION_ID,
    language: 'ru-RU',
  });

  await t.notThrowsAsync(
    collection
      .images()
      .execute(),
  );
  t.notThrows(
    () => mdb
      .collections()
      .images({
        collectionID: COLLECTION_ID,
        language: 'ru-RU',
      }),
  );

  const response = await collection
    .images()
    .execute();
  const images = response?.images?.[0];

  t.truthy(images);
  t.is(images?.id, COLLECTION_ID);
});

test('translations', async t => {
  const { mdb } = t.context;
  const collection = mdb.collections({
    collectionID: COLLECTION_ID,
    language: 'ru-RU',
  });

  await t.notThrowsAsync(
    collection
      .translations()
      .execute(),
  );
  t.notThrows(
    () => mdb
      .collections()
      .translations({
        collectionID: COLLECTION_ID,
        language: 'ru-RU',
      }),
  );

  const response = await collection
    .translations()
    .execute();
  const translations = response?.translations?.[0];

  t.truthy(translations);
  t.is(translations?.id, COLLECTION_ID);
});
