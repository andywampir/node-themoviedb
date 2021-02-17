import test from 'ava';

import * as errors from '../src/errors';

test('not enough permission error', t => {
	const notEnoughPermissionError = t.throws<errors.NotEnoughPermissionError>(() => {
		throw new errors.NotEnoughPermissionError('you can not touch this', 1337);
	}, { instanceOf: errors.NotEnoughPermissionError });

	t.is(notEnoughPermissionError.message, 'you can not touch this');
	t.is(notEnoughPermissionError.code, 1337);
});

test('not found error', t => {
	const notFoundError = t.throws<errors.NotFoundError>(() => {
		throw new errors.NotFoundError(1337);
	}, { instanceOf: errors.NotFoundError });

	t.is(notFoundError.code, 1337);
	t.is(notFoundError.message, 'The resource you requested could not be found');
});

test('required parameter', t => {
	const requiredParameterError = t.throws<errors.RequiredParameterError>(() => {
		throw new errors.RequiredParameterError('exampleParam');
	}, { instanceOf: errors.RequiredParameterError });

	t.is(requiredParameterError.message, 'You must specify a parameter: exampleParam');
	t.is(requiredParameterError.parameter, 'exampleParam');
});

test('unknown error', t => {
	const unknownError = t.throws<errors.UnknownError>(() => {
		throw new errors.UnknownError('what kind this error?');
	}, { instanceOf: errors.UnknownError });

	t.is(unknownError.message, 'what kind this error?');
});

test('unknown http error', t => {
	const unknownHTTPError = t.throws<errors.UnknownHTTPError>(() => {
		throw new errors.UnknownHTTPError('i am teapot', 418);
	}, { instanceOf: errors.UnknownHTTPError });

	t.is(unknownHTTPError.httpCode, 418);
	t.is(unknownHTTPError.message, 'i am teapot');
});
