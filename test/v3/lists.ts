/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test.todo('[v3:lists] details');

test.todo('[v3:lists] item-status');

test.todo('[v3:lists] create');

test.todo('[v3:lists] add-movie');

test.todo('[v3:lists] remove-movie');

test.todo('[v3:lists] clear');

test.todo('[v3:lists] delete');
