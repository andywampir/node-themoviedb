import BaseHTTPError from './base-http-error';

export default class InternalServerError extends BaseHTTPError {
	public constructor(message: string, code: number) {
		super({
			message,
			httpCode: 500,
			statusCode: code,
			shortMessage: 'Internal Server Error',
		});
	}
}
