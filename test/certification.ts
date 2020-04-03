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
  t.context.mdb = new MovieDB({ apiKey: TMDB_API_KEY });
});

test('errors', async t => {
  const mdb = new MovieDB({ apiKey: 'fake_api_key' });

  await t.throwsAsync(
    mdb
      .certification()
      .tv()
      .execute(),
    { instanceOf: NotEnoughPermissionError },
  );
});

test('movie certifications', async t => {
  const { mdb } = t.context;
  const certification = mdb.certification();

  await t.notThrowsAsync(
    certification
      .movie()
      .execute(),
  );

  const response = await certification
    .movie()
    .execute();
  const movieCertifications = response?.movie?.[0];

  t.truthy(movieCertifications?.certifications);
});

test('tv certifications', async t => {
  const { mdb } = t.context;
  const certification = mdb.certification();

  await t.notThrowsAsync(
    certification
      .tv()
      .execute(),
  );

  const response = await certification
    .tv()
    .execute();
  const tvCertifications = response?.tv?.[0];

  t.truthy(tvCertifications?.certifications);
});
