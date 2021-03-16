import got, {
	Got, HTTPError,
} from 'got';

import normalizeSearchParams from './normalize-search-params';
import {
	UnknownError, NotEnoughPermissionError,
	NotFoundError, UnknownHTTPError,
} from '../errors';

import type {
	ResponseError, SearchParametrs,
} from '../interfaces/common';

export interface IClient {
	get<T>(url: string, options?: GetOptions): Promise<T>;
	post<T>(url: string, options?: PostOptions): Promise<T>;
	delete<T>(url: string, options?: DeleteOptions): Promise<T>;
	recreate(accessToken: string): void;
}

interface GetOptions {
	searchParams?: SearchParametrs;
}

interface PostOptions extends GetOptions {
	json?: Record<string, string | number | boolean>;
}

interface DeleteOptions extends PostOptions {}

const USER_AGENT = 'node-themoviedb/1.0.0';

export default class Client implements IClient {
	private readonly version: 3 | 4;
	private agent: Got;

	public constructor(accessToken: string, version: 3 | 4) {
		this.agent = got.extend({
			prefixUrl: `https://api.themoviedb.org/${version}`,
			headers: {
				'user-agent': USER_AGENT,
				authorization: `Bearer ${accessToken}`,
			},
			hooks: { init: [ normalizeSearchParams ] },
		});
		this.version = version;
	}

	private static handleError(error: Error | HTTPError): Error {
		if (error instanceof HTTPError) {
			switch (error.response.statusCode) {
				case 401: {
					const {
						status_code, status_message,
					} = error.response.body as ResponseError;

					return new NotEnoughPermissionError(status_message, status_code);
				}

				case 404: {
					const { status_code } = error.response.body as ResponseError;

					return new NotFoundError(status_code);
				}

				default: {
					return new UnknownHTTPError(
						error.response.statusMessage ?? error.message,
						error.response.statusCode,
					);
				}
			}
		} else {
			return new UnknownError(error.message);
		}
	}

	public async get<T>(uri: string, options?: GetOptions): Promise<T> {
		try {
			const response = await this.agent.get(uri, options).json<T>();

			return response;
		} catch (error) {
			throw Client.handleError(error);
		}
	}

	public async post<T>(uri: string, options?: PostOptions): Promise<T> {
		try {
			const response = await this.agent.post(uri, options).json<T>();

			return response;
		} catch (error) {
			throw Client.handleError(error);
		}
	}

	public async delete<T>(uri: string, options?: DeleteOptions): Promise<T> {
		try {
			const response = await this.agent.delete(uri, options).json<T>();

			return response;
		} catch (error) {
			throw Client.handleError(error);
		}
	}

	public recreate(accessToken: string): void {
		this.agent = got.extend({
			prefixUrl: `https://api.themoviedb.org/${this.version}`,
			headers: {
				'user-agent': USER_AGENT,
				authorization: `Bearer ${accessToken}`,
			},
			hooks: { init: [ normalizeSearchParams ] },
		});
	}
}
