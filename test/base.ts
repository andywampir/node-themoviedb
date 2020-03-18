import test from 'ava';

import MovieDB from '../src';
import {
  RequiredApiKeyError, RequiredSessionIDError,
} from '../src/errors';

test('instance creating', t => {
  t.throws(() => new MovieDB({ apiKey: '' }), { instanceOf: RequiredApiKeyError });
  t.notThrows(() => new MovieDB({ apiKey: process.env.TMDB_API_KEY as string }));
});

test('base functions', t => {
  const mdb = new MovieDB({ apiKey: process.env.TMDB_API_KEY as string });

  // Api key
  t.throws(() => mdb.setApiKey(''), { instanceOf: RequiredApiKeyError });
  t.notThrows(() => mdb.setApiKey(process.env.TMDB_API_KEY as string));

  // Language
  t.notThrows(() => mdb.setLanguage('ru-RU'));

  // Session ID
  t.throws(() => mdb.setSessionID(''), { instanceOf: RequiredSessionIDError });
  t.notThrows(() => mdb.setSessionID('fake_session_id'));
});
