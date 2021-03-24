import got, {
	Got, HTTPError,
} from 'got';

import normalizeSearchParams from './normalize-search-params';
import {
	UnknownError, NotEnoughPermissionError,
	NotFoundError, UnknownHTTPError,
	InternalServerError,
} from '../errors';

import type {
	ResponseError, SearchParametrs,
} from '../interfaces/common';

export interface IClient {
	get<T>(url: string, options?: GetOptions): Promise<T>;
	post<T>(url: string, options?: PostOptions): Promise<T>;
	delete<T>(url: string, options?: DeleteOptions): Promise<T>;
	put<T>(url: string, options?: PutOptions): Promise<T>;
	recreate(accessToken: string): void;
}

interface GetOptions {
	searchParams?: SearchParametrs;
}

interface PostOptions extends GetOptions {
	json?: Record<string, string | number | boolean | Record<string, string | number | boolean>[] | undefined>;
}

interface DeleteOptions extends PostOptions {}

interface PutOptions extends PostOptions {}

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
				'content-type': 'application/json;charset=utf-8',
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
					} = JSON.parse(error.response.body as string) as ResponseError;

					return new NotEnoughPermissionError(status_message, status_code);
				}

				case 404: {
					const { status_code } = JSON.parse(error.response.body as string) as ResponseError;

					return new NotFoundError(status_code);
				}

				case 500: {
					const {
						status_code, status_message,
					} = JSON.parse(error.response.body as string) as ResponseError;

					return new InternalServerError(
						status_message ?? 'Internal error: Something went wrong, contact TMDb.',
						status_code ?? 11,
					);
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

	public async get<T>(url: string, options?: GetOptions): Promise<T> {
		try {
			return await this.agent.get(url, options).json<T>();
		} catch (error) {
			throw Client.handleError(error);
		}
	}

	public async post<T>(url: string, options?: PostOptions): Promise<T> {
		try {
			return await this.agent.post(url, options).json<T>();
		} catch (error) {
			throw Client.handleError(error);
		}
	}

	public async delete<T>(url: string, options?: DeleteOptions): Promise<T> {
		try {
			return await this.agent.delete(url, options).json<T>();
		} catch (error) {
			throw Client.handleError(error);
		}
	}

	public async put<T>(url: string, options?: PutOptions): Promise<T> {
		try {
			return await this.agent.put(url, options).json<T>();
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
