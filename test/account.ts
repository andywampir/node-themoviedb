/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../src';
import {
	NotEnoughPermissionError, RequiredParameterError,
} from '../src/errors';
// eslint-disable-next-line ava/no-import-test-files
import * as testUtils from './helper';

interface Context {
	sessionID: string;
	userID: number;
	mdb: MovieDB;
	mdbWithoutSessionID: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;
const TMDB_LOGIN = process.env.TMDB_LOGIN as string;

test.before(async t => {
	const mdb = new MovieDB({
		apiKey: TMDB_API_KEY,
		language: 'ru-RU',
	});
	const session = await testUtils.getSession(mdb);
	const response = await mdb
		.account({ sessionID: session?.session_id as string })
		.details()
		.execute();

	mdb.setSessionID(session?.session_id ?? '');

	t.context.mdb = mdb;
	t.context.userID = response?.details?.[0].id ?? -1;
	t.context.sessionID = session?.session_id ?? '';
	t.context.mdbWithoutSessionID = new MovieDB({ apiKey: TMDB_API_KEY });
});

test('errors', async t => {
	const mdb = new MovieDB({ apiKey: 'fake_api_key' });

	// API key
	await t.throwsAsync(
		mdb
			.account({ sessionID: 'fake_session_id' })
			.details()
			.execute(),
		{ instanceOf: NotEnoughPermissionError },
	);
	mdb.setApiKey(TMDB_API_KEY);

	// Session ID
	t.notThrows(
		() => mdb.account({ sessionID: 'fake_session_id' }),
	);
});

test('details', async t => {
	const {
		sessionID,
		mdb,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({ language: 'ru-RU' });

	await t.notThrowsAsync(
		account
			.details(sessionID)
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.details(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	const response = await account
		.details()
		.execute();
	const details = response?.details?.[0];

	t.truthy(details);
	t.is(details?.username, TMDB_LOGIN);
});

test('created lists', async t => {
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

	await t.notThrowsAsync(
		account
			.createdLists({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.createdLists(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.createdLists({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.createdLists({
			sessionID: 'fake_session_id',
			userID: 1337,
		})
		.cancelAll(),
	);

	const response = await account
		.createdLists()
		.execute();
	const createdLists = response?.createdLists?.[0];

	t.truthy(createdLists);
	t.is(createdLists?.page, 1);
});

test('favorite movies', async t => {
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

	await t.notThrowsAsync(
		account
			.favoriteMovies({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.favoriteMovies(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.favoriteMovies({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.favoriteMovies({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.favoriteMovies()
		.execute();
	const favoriteMovies = response?.favoriteMovies?.[0];

	t.truthy(favoriteMovies);
	t.is(favoriteMovies?.page, 1);
});

test('favorite tv shows', async t => {
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

	await t.notThrowsAsync(
		account
			.favoriteTVShows({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.favoriteTVShows(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.favoriteTVShows({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.favoriteTVShows({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.favoriteTVShows()
		.execute();
	const favoriteTVShows = response?.favoriteTVShows?.[0];

	t.truthy(favoriteTVShows);
	t.is(favoriteTVShows?.page, 1);
});

test('mark as favorite', async t => {
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

	await t.notThrowsAsync(
		account
			.markAsFavorite({
				userID,
				favorite: true,
				mediaID: 63247,
				mediaType: 'tv',
				sessionID,
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.markAsFavorite({
				favorite: false,
				mediaID: 1337,
				mediaType: 'tv',
			}),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.markAsFavorite({
				sessionID: 'fake_session_id',
				favorite: false,
				mediaID: 1337,
				mediaType: 'tv',
			}),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.markAsFavorite({
			sessionID: 'fake_session_id',
			userID: 1337,
			favorite: false,
			mediaID: 1337,
			mediaType: 'tv',
		}),
	);

	const response = await account
		.markAsFavorite({
			favorite: false,
			mediaID: 63247,
			mediaType: 'tv',
		})
		.execute();
	const markAsFavorite = response?.markAsFavorite?.[0];

	t.truthy(markAsFavorite);
	t.is(markAsFavorite?.status_code, 13);
});

test('rated movies', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	await t.notThrowsAsync(
		account
			.ratedMovies({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.ratedMovies(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.ratedMovies({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.ratedMovies({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.ratedMovies()
		.execute();
	const ratedMovies = response?.ratedMovies?.[0];

	t.truthy(ratedMovies);
	t.is(ratedMovies?.page, 1);
});

test('rated tv shows', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	await t.notThrowsAsync(
		account
			.ratedTVShows({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.ratedTVShows(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.ratedTVShows({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.ratedTVShows({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.ratedTVShows()
		.execute();
	const ratedTVShows = response?.ratedTVShows?.[0];

	t.truthy(ratedTVShows);
	t.is(ratedTVShows?.page, 1);
});

test('rated tv episodes', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	await t.notThrowsAsync(
		account
			.ratedTVEpisodes({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.ratedTVEpisodes(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.ratedTVEpisodes({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.ratedTVEpisodes({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.ratedTVEpisodes()
		.execute();
	const ratedTVEpisodes = response?.ratedTVEpisodes?.[0];

	t.truthy(ratedTVEpisodes);
	t.is(ratedTVEpisodes?.page, 1);
});

test('movie watchlist', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	await t.notThrowsAsync(
		account
			.movieWatchlist({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.movieWatchlist(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.movieWatchlist({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.movieWatchlist({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.movieWatchlist()
		.execute();
	const movieWatchlist = response?.movieWatchlist?.[0];

	t.truthy(movieWatchlist);
	t.is(movieWatchlist?.page, 1);
});

test('tv show watchlist', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	await t.notThrowsAsync(
		account
			.tvShowWatchlist({
				userID,
				language: 'ru-RU',
				page: 1,
				sessionID,
				sortBy: 'created_at.asc',
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.tvShowWatchlist(),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.tvShowWatchlist({ sessionID: 'fake_session_id' }),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.tvShowWatchlist({
			sessionID: 'fake_session_id',
			userID: 1337,
		}),
	);

	const response = await account
		.tvShowWatchlist()
		.execute();
	const tvShowWatchlist = response?.tvShowWatchlist?.[0];

	t.truthy(tvShowWatchlist);
	t.is(tvShowWatchlist?.page, 1);
});

test('add to watchlist', async t => {
	const {
		mdb,
		sessionID,
		userID,
		mdbWithoutSessionID,
	} = t.context;
	const account = mdb.account({
		language: 'ru-RU',
		sessionID,
		userID,
	});

	await t.notThrowsAsync(
		account
			.addToWatchlist({
				userID,
				mediaID: 63247,
				mediaType: 'tv',
				watchlist: true,
				sessionID,
			})
			.execute(),
	);
	const requiredSessionIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.addToWatchlist({
				mediaID: 1337,
				mediaType: 'tv',
				watchlist: false,
			}),
		{ instanceOf: RequiredParameterError },
	);
	const requiredUserIDError = t.throws<RequiredParameterError>(
		() => mdbWithoutSessionID
			.account()
			.addToWatchlist({
				sessionID: 'fake_session_id',
				mediaID: 1337,
				mediaType: 'tv',
				watchlist: false,
			}),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredSessionIDError.parameter, 'sessionID');
	t.is(requiredUserIDError.parameter, 'userID');
	t.notThrows(() => mdbWithoutSessionID
		.account()
		.addToWatchlist({
			sessionID: 'fake_session_id',
			userID: 1337,
			mediaID: 1337,
			mediaType: 'tv',
			watchlist: false,
		}),
	);

	const response = await account
		.addToWatchlist({
			mediaID: 63247,
			mediaType: 'tv',
			watchlist: false,
		})
		.execute();
	const addToWatchlist = response?.addToWatchlist?.[0];

	t.truthy(addToWatchlist);
	t.is(addToWatchlist?.status_code, 13);
});
