/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import {
	NotEnoughPermissionError, RequiredParameterError,
} from '../../src/errors';
// eslint-disable-next-line ava/no-import-test-files
import * as testUtils from '../helper';

interface Context {
	sessionID: string;
	userID: number;
	mdb: MovieDB;
	mdbWithoutSessionID: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;
const TMDB_LOGIN = process.env.TMDB_LOGIN as string;

test.before(async t => {
	const mdb = new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	});
	const session = await testUtils.getSession(mdb);
	const accountDetails = await mdb.account({ sessionID: session.session_id }).details();

	mdb.setSessionID(session.session_id);

	t.context.mdb = mdb;
	t.context.userID = accountDetails.id;
	t.context.sessionID = session.session_id;
	t.context.mdbWithoutSessionID = new MovieDB({ accessToken: TMDB_ACCESS_TOKEN });
});

test('[v3:account] errors', async t => {
	const mdb = new MovieDB({ accessToken: TMDB_ACCESS_TOKEN });

	// Access token
	await t.throwsAsync(
		mdb.account({ sessionID: 'fake_session_id' }).details(),
		{ instanceOf: NotEnoughPermissionError },
	);
	mdb.setAccessToken(TMDB_ACCESS_TOKEN);

	// Session ID
	t.notThrows(() => mdb.account({ sessionID: 'fake_session_id' }));
});

test('[v3:account] details', async t => {
	const {
		sessionID,
		mdb,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({ language: 'ru-RU' });

	await t.notThrowsAsync(account.details({ sessionID }));
	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().details(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');

	const accountDetails = await account.details();

	t.truthy(accountDetails);
	t.is(accountDetails.username, TMDB_LOGIN);
});

test('[v3:account] created-lists', async t => {
	const {
		sessionID,
		userID,
		mdb,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().createdLists(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().createdLists({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().createdLists({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.createdLists({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
		}),
	);

	const createdLists = await account.createdLists();

	t.truthy(createdLists);
	t.is(createdLists.page, 1);
});

test('[v3:account] favorite-movies', async t => {
	const {
		sessionID,
		userID,
		mdb,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().favoriteMovies(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().favoriteMovies({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().favoriteMovies({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.favoriteMovies({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
			sortBy: 'created_at.asc',
		}),
	);

	const favoriteMovies = await account.favoriteMovies();

	t.truthy(favoriteMovies);
	t.is(favoriteMovies.page, 1);
});

test('[v3:account] favorite-tv-shows', async t => {
	const {
		sessionID,
		userID,
		mdb,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().favoriteTVShows(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().favoriteTVShows({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().favoriteTVShows({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.favoriteTVShows({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
			sortBy: 'created_at.asc',
		}),
	);

	const favoriteTVShows = await account.favoriteTVShows();

	t.truthy(favoriteTVShows);
	t.is(favoriteTVShows.page, 1);
});

test('[v3:account] mark-as-favorite', async t => {
	const {
		sessionID,
		userID,
		mdb,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().markAsFavorite({
			favorite: false,
			mediaID: 1337,
			mediaType: 'tv',
		}),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().markAsFavorite({
			sessionID: 'fake_session_id',
			favorite: false,
			mediaID: 1337,
			mediaType: 'tv',
		}),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().markAsFavorite({
			sessionID: 'fake_session_id',
			userID: 1337,
			favorite: false,
			mediaID: 1337,
			mediaType: 'tv',
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.markAsFavorite({
			userID,
			sessionID,
			favorite: true,
			mediaID: 63247,
			mediaType: 'tv',
		}),
	);

	const markAsFavorite = await account.markAsFavorite({
		favorite: false,
		mediaID: 63247,
		mediaType: 'tv',
	});

	t.truthy(markAsFavorite);
	t.is(markAsFavorite.status_code, 13);
});

test('[v3:account] rated-movies', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().ratedMovies(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().ratedMovies({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().ratedMovies({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.ratedMovies({
			userID,
			language: 'ru-RU',
			page: 1,
			sessionID,
			sortBy: 'created_at.asc',
		}),
	);

	const ratedMovies = await account.ratedMovies();

	t.truthy(ratedMovies);
	t.is(ratedMovies.page, 1);
});

test('[v3:account] rated-tv-shows', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().ratedTVShows(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().ratedTVShows({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().ratedTVShows({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.ratedTVShows({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
			sortBy: 'created_at.asc',
		}),
	);

	const ratedTVShows = await account.ratedTVShows();

	t.truthy(ratedTVShows);
	t.is(ratedTVShows.page, 1);
});

test('[v3:account] rated-tv-episodes', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().ratedTVEpisodes(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().ratedTVEpisodes({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().ratedTVEpisodes({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.ratedTVEpisodes({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
			sortBy: 'created_at.asc',
		}),
	);

	const ratedTVEpisodes = await account.ratedTVEpisodes();

	t.truthy(ratedTVEpisodes);
	t.is(ratedTVEpisodes.page, 1);
});

test('[v3:account] movie-watchlist', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().movieWatchlist(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().movieWatchlist({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().movieWatchlist({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.movieWatchlist({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
			sortBy: 'created_at.asc',
		}),
	);

	const movieWatchlist = await account.movieWatchlist();

	t.truthy(movieWatchlist);
	t.is(movieWatchlist.page, 1);
});

test('[v3:account] tv-show-watchlist', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().tvShowWatchlist(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().tvShowWatchlist({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().tvShowWatchlist({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.tvShowWatchlist({
			userID,
			sessionID,
			language: 'ru-RU',
			page: 1,
			sortBy: 'created_at.asc',
		}),
	);

	const tvShowWatchlist = await account.tvShowWatchlist();

	t.truthy(tvShowWatchlist);
	t.is(tvShowWatchlist.page, 1);
});

test('[v3:account] add-to-watchlist', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		sessionID,
		userID,
		language: 'ru-RU',
	});

	const requiredSessionIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().addToWatchlist({
			mediaID: 1337,
			mediaType: 'tv',
			watchlist: false,
		}),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = await t.throwsAsync<RequiredParameterError>(
		mdbWithoutSessionID.account().addToWatchlist({
			sessionID: 'fake_session_id',
			mediaID: 1337,
			mediaType: 'tv',
			watchlist: false,
		}),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdbWithoutSessionID.account().addToWatchlist({
			sessionID: 'fake_session_id',
			userID: 1337,
			mediaID: 1337,
			mediaType: 'tv',
			watchlist: false,
		}),
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Authentication failed: You do not have permissions to access the service.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 3);

	await t.notThrowsAsync(
		account.addToWatchlist({
			userID,
			sessionID,
			mediaID: 63247,
			mediaType: 'tv',
			watchlist: true,
		}),
	);

	const addToWatchlist = await account.addToWatchlist({
		mediaID: 63247,
		mediaType: 'tv',
		watchlist: false,
	});

	t.truthy(addToWatchlist);
	t.is(addToWatchlist.status_code, 13);
});
