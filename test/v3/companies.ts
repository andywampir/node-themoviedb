/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import ava, { TestInterface } from 'ava';

import MovieDB from '../../src';
import {
	RequiredParameterError,
	NotEnoughPermissionError,
} from '../../src/errors';

interface Context {
	mdb: MovieDB;
}

const test = ava as TestInterface<Context>;

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN as string;
const COMPANY_ID = 420; // Marvel Studios

test.before(t => {
	const mdb = new MovieDB({
		accessToken: TMDB_ACCESS_TOKEN,
		language: 'ru-RU',
	});

	t.context.mdb = mdb;
});

test('[v3:companies] errors', async t => {
	const mdb = new MovieDB({ accessToken: 'fake_access_token' });

	const notEnoughPermissionError = await t.throwsAsync<NotEnoughPermissionError>(
		mdb.companies().details(1337),
		{ instanceOf: NotEnoughPermissionError },
	);

	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.message, 'Invalid API key: You must be granted a valid key.');
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
	t.is(notEnoughPermissionError.statusCode, 7);

	let requiredCompanyIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.companies().details(),
		{ instanceOf: RequiredParameterError },
	);

	t.is(requiredCompanyIDError.parameter, 'companyID');
	requiredCompanyIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.companies().images(),
		{ instanceOf: RequiredParameterError },
	);
	t.is(requiredCompanyIDError.parameter, 'companyID');
	requiredCompanyIDError = await t.throwsAsync<RequiredParameterError>(
		mdb.companies().alternativeNames(),
		{ instanceOf: RequiredParameterError },
	);
	t.is(requiredCompanyIDError.parameter, 'companyID');
});

test('[v3:companies] details', async t => {
	const { mdb } = t.context;
	const companies = mdb.companies({ companyID: COMPANY_ID });

	await t.notThrowsAsync(companies.details());
	await t.notThrowsAsync(mdb.companies().details(COMPANY_ID));

	const details = await companies.details();

	t.truthy(details);
	t.is(details.id, COMPANY_ID);
});

test('[v3:companies] images', async t => {
	const { mdb } = t.context;
	const companies = mdb.companies({ companyID: COMPANY_ID });

	await t.notThrowsAsync(companies.images());
	await t.notThrowsAsync(mdb.companies().images(COMPANY_ID));

	const images = await companies.images();

	t.truthy(images);
	t.is(images.id, COMPANY_ID);
});

test('[v3:companies] alternative-names', async t => {
	const { mdb } = t.context;
	const companies = mdb.companies({ companyID: COMPANY_ID });

	await t.notThrowsAsync(companies.alternativeNames());
	await t.notThrowsAsync(mdb.companies().alternativeNames(COMPANY_ID));

	const alternativeNames = await companies.alternativeNames();

	t.truthy(alternativeNames);
	t.is(alternativeNames.id, COMPANY_ID);
});
