import BaseHTTPError from './base-http-error';

export default class UnknownHTTPError extends BaseHTTPError {
	public constructor(message: string, httpCode: number) {
		super({
			httpCode,
			message,
			shortMessage: 'Unknown HTTP Error',
		});
	}
}
