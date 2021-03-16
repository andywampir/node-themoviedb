import BaseHTTPError from './base-http-error';

export default class NotEnoughPermissionError extends BaseHTTPError {
	public constructor(message: string, code: number) {
		super({
			message,
			statusCode: code,
			shortMessage: 'Not Enough Permission',
			httpCode: 401,
		});
	}
}
