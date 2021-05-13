/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import {
	NotEnoughPermissionError, RequiredParameterError,
} from '../../src/errors';

interface Context {
	mdb: MovieDB;
	guestSessionID: string;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test.before(async t => {
	const mdb = new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	});

	t.context.mdb = mdb;

	const guestSession = await mdb.authentication().newGuestSession();

	t.context.guestSessionID = guestSession.guest_session_id;
});

test('[v3:guest-session] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	let requiredParameterError = await t.throwsAsync<RequiredParameterError>(
		mdb.guestSession().ratedMovies(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredParameterError.parameter, 'guestSessionID');

	requiredParameterError = await t.throwsAsync<RequiredParameterError>(
		mdb.guestSession().ratedTVEpisodes(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredParameterError.parameter, 'guestSessionID');

	requiredParameterError = await t.throwsAsync<RequiredParameterError>(
		mdb.guestSession().ratedTVShows(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredParameterError.parameter, 'guestSessionID');

	let notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.guestSession().ratedMovies({ guestSessionID: t.context.guestSessionID }),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.guestSession().ratedTVEpisodes({ guestSessionID: t.context.guestSessionID }),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.guestSession().ratedTVShows({ guestSessionID: t.context.guestSessionID }),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);
});

test('[v3:guest-session] rated-movies', async t => {
	const {
		mdb,
		guestSessionID,
	} = t.context;
	const guestSession = mdb.guestSession({ guestSessionID });

	await t.notThrowsAsync(guestSession.ratedMovies({
		language: 'en-US',
		sortBy: 'created_at.asc',
	}));
	await t.notThrowsAsync(mdb.guestSession().ratedMovies({ guestSessionID }));

	const ratedMovies = await guestSession.ratedMovies();

	t.truthy(ratedMovies.results);
	t.is(ratedMovies.page, 1);
	t.is(ratedMovies.total_pages, 0);
	t.is(ratedMovies.total_results, 0);
});

test('[v3:guest-session] rated-tv-shows', async t => {
	const {
		mdb,
		guestSessionID,
	} = t.context;
	const guestSession = mdb.guestSession({ guestSessionID });

	await t.notThrowsAsync(guestSession.ratedTVShows({
		language: 'en-US',
		sortBy: 'created_at.asc',
	}));
	await t.notThrowsAsync(mdb.guestSession().ratedTVShows({ guestSessionID }));

	const ratedTVShows = await guestSession.ratedTVShows();

	t.truthy(ratedTVShows.results);
	t.is(ratedTVShows.page, 1);
	t.is(ratedTVShows.total_pages, 0);
	t.is(ratedTVShows.total_results, 0);
});

test('[v3:guest-session] rated-tv-episodes', async t => {
	const {
		mdb,
		guestSessionID,
	} = t.context;
	const guestSession = mdb.guestSession({ guestSessionID });

	await t.notThrowsAsync(guestSession.ratedTVEpisodes({
		language: 'en-US',
		sortBy: 'created_at.asc',
	}));
	await t.notThrowsAsync(mdb.guestSession().ratedTVEpisodes({ guestSessionID }));

	const ratedTVEpisodes = await guestSession.ratedTVEpisodes();

	t.truthy(ratedTVEpisodes.results);
	t.is(ratedTVEpisodes.page, 1);
	t.is(ratedTVEpisodes.total_pages, 0);
	t.is(ratedTVEpisodes.total_results, 0);
});
