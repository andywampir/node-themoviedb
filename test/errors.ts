import test from 'ava';

import * as errors from '../src/errors';

test('[error] not enough permission error', t => {
	const notEnoughPermissionError = t.throws<errors.NotEnoughPermissionError>(() => {
		throw new errors.NotEnoughPermissionError('you can not touch this', 1337);
	}, { instanceOf: errors.NotEnoughPermissionError });

	t.is(notEnoughPermissionError.message, 'you can not touch this');
	t.is(notEnoughPermissionError.statusCode, 1337);
	t.is(notEnoughPermissionError.httpCode, 401);
	t.is(notEnoughPermissionError.shortMessage, 'Not Enough Permission');
});

test('[error] not-found-error', t => {
	const notFoundError = t.throws<errors.NotFoundError>(() => {
		throw new errors.NotFoundError(1337);
	}, { instanceOf: errors.NotFoundError });

	t.is(notFoundError.statusCode, 1337);
	t.is(notFoundError.message, 'The resource you request could not be found');
	t.is(notFoundError.httpCode, 404);
	t.is(notFoundError.shortMessage, 'Not Found');
});

test('[error] required-parameter-error', t => {
	const requiredParameterError = t.throws<errors.RequiredParameterError>(() => {
		throw new errors.RequiredParameterError('exampleParam');
	}, { instanceOf: errors.RequiredParameterError });

	t.is(requiredParameterError.message, 'You must specify a parameter: exampleParam');
	t.is(requiredParameterError.parameter, 'exampleParam');
});

test('[error] unknown-error', t => {
	const unknownError = t.throws<errors.UnknownError>(() => {
		throw new errors.UnknownError('what kind this error?');
	}, { instanceOf: errors.UnknownError });

	t.is(unknownError.message, 'what kind this error?');
});

test('[error] unknown-http-error', t => {
	const unknownHTTPError = t.throws<errors.UnknownHTTPError>(() => {
		throw new errors.UnknownHTTPError('i am teapot', 418);
	}, { instanceOf: errors.UnknownHTTPError });

	t.is(unknownHTTPError.httpCode, 418);
	t.is(unknownHTTPError.message, 'i am teapot');
	t.is(unknownHTTPError.shortMessage, 'Unknown HTTP Error');
});

test('[error] internal-server-error', t => {
	const internalServerError = t.throws<errors.InternalServerError>(() => {
		throw new errors.InternalServerError('Test message', 21);
	}, { instanceOf: errors.InternalServerError });

	t.is(internalServerError.httpCode, 500);
	t.is(internalServerError.message, 'Test message');
	t.is(internalServerError.shortMessage, 'Internal Server Error');
	t.is(internalServerError.statusCode, 21);
});
