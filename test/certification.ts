import test from 'ava';

import MovieDB from '../src';
import { NotEnoughPermissionError } from '../src/errors';

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;

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
  const mdb = new MovieDB({ apiKey: TMDB_API_KEY });

  await t.notThrowsAsync(
    mdb
      .certification()
      .movie()
      .execute(),
  );

  const response = await mdb
    .certification()
    .movie()
    .execute();
  const movieCertifications = response?.movie?.[0];

  t.truthy(movieCertifications?.certifications);
});

test('tv certifications', async t => {
  const mdb = new MovieDB({ apiKey: TMDB_API_KEY });

  await t.notThrowsAsync(
    mdb
      .certification()
      .tv()
      .execute(),
  );

  const response = await mdb
    .certification()
    .tv()
    .execute();
  const tvCertifications = response?.tv?.[0];

  t.truthy(tvCertifications?.certifications);
});
