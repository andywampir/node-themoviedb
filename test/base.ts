import test from 'ava';

import MovieDB from '../src';
import { RequiredParameterError } from '../src/errors';

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;

test('instance creating', t => {
	t.throws(() => new MovieDB({ apiKey: '' }), { instanceOf: RequiredParameterError });
	t.notThrows(() => new MovieDB({
		apiKey: TMDB_API_KEY,
		language: 'ru-RU',
	}));
});

test('base functions', t => {
	const mdb = new MovieDB({ apiKey: TMDB_API_KEY });

	// Api key
	t.throws(() => mdb.setApiKey(''), { instanceOf: RequiredParameterError });
	t.notThrows(() => mdb.setApiKey(TMDB_API_KEY));

	// Language
	t.notThrows(() => mdb.setLanguage('ru-RU'));

	// Session ID
	t.throws(() => mdb.setSessionID(''), { instanceOf: RequiredParameterError });
	t.notThrows(() => mdb.setSessionID('fake_session_id'));
});
