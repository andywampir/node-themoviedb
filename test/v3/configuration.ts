/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test.todo('[v3:configuration] errors');

test.todo('[v3:configuration] api');

test.todo('[v3:configuration] countries');

test.todo('[v3:configuration] jobs');

test.todo('[v3:configuration] languages');

test.todo('[v3:configuration] primary-translations');

test.todo('[v3:configuration] timezones');
