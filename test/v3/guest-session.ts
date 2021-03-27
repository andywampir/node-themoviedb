/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test.todo('[v3:guest-session] rated-movies');

test.todo('[v3:guest-session] rated-tv-shows');

test.todo('[v3:guest-session] rated-tv-episodes');
