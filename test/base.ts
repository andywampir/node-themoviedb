import test from 'ava';

import MovieDB from '../src';
import { RequiredParameterError } from '../src/errors';

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test('[instance] creating', t => {
	t.throws(() => new MovieDB({ accessToken: '' }), { instanceOf: RequiredParameterError });
	t.notThrows(() => new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	}));
});

test('[instance] setter functions', t => {
	const mdb = new MovieDB({ accessToken: TMDB_ACCESS_TOKEN });

	// Access token
	t.throws(() => mdb.setAccessToken(''), { instanceOf: RequiredParameterError });
	t.notThrows(() => mdb.setAccessToken(TMDB_ACCESS_TOKEN));

	// Language
	t.notThrows(() => mdb.setLanguage('ru-RU'));

	// Session ID
	t.throws(() => mdb.setSessionID(''), { instanceOf: RequiredParameterError });
	t.notThrows(() => mdb.setSessionID('fake_session_id'));
});
