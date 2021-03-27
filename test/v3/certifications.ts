// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import { NotEnoughPermissionError } from '../../src/errors';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;

test.before(t => {
	t.context.mdb = new MovieDB({ accessToken: TMDB_ACCESS_TOKEN });
});

test('[v3:certifications] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	// Access token
	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.certifications().tv(),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);
});

test('[v3:certifications] movie-certifications', async t => {
	const { mdb } = t.context;
	const certification = mdb.certifications();

	await t.notThrowsAsync(certification.movie());

	const movieCertifications = await certification.movie();

	t.truthy(movieCertifications);
	t.truthy(movieCertifications.certifications);
	t.is(typeof movieCertifications.certifications, 'object');
});

test('[v3:certifications] tv-certifications', async t => {
	const { mdb } = t.context;
	const certification = mdb.certifications();

	await t.notThrowsAsync(certification.tv());

	const tvCertifications = await certification.tv();

	t.truthy(tvCertifications);
	t.truthy(tvCertifications.certifications);
	t.is(typeof tvCertifications.certifications, 'object');
});
