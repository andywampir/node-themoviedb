interface BaseHTTPErrorOptions {
	httpCode: number;
	shortMessage: string;
	message: string;
	statusCode?: number;
}

export default class BaseHTTPError extends Error {
	public readonly httpCode: number;
	public readonly shortMessage: string;
	public readonly statusCode?: number;

	public constructor(options: BaseHTTPErrorOptions) {
		super(options.message);

		this.httpCode = options.httpCode;
		this.shortMessage = options.shortMessage;
		this.statusCode = options.statusCode;
	}
}
