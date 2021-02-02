/* eslint-disable camelcase */
import {
	Response, CancelableRequest,
	HTTPError, Got,
} from 'got';

import {
	NotEnoughPermissionError, NotFoundError,
	UnknownHTTPError, UnknownError,
} from '../errors';
import {
	ResponseError, SearchParametrs,
} from '../interfaces/common';
import normalizeSearchParams from './normalizeSearchParams';

interface ExecutionItem<TKeys> {
	key: keyof TKeys;
	value: ExecutionItemValue;
}

interface ExecutionItemValue {
	uri: string;
	searchParams?: SearchParametrs;
	json?: { [key: string]: unknown };
	method?: 'get' | 'post' | 'delete';
}

export interface ExecutionResult {
	[key: string]: unknown[];
}

export default class Executor<ReturnType> {
	private executionList: ExecutionItem<ReturnType>[] = [];
	private readonly httpClient: Got;

	protected constructor(httpClient: Got) {
		this.httpClient = httpClient;
	}

	public async execute(): Promise<ReturnType | null> {
		const promises: CancelableRequest<Response<unknown>>[] = [];
		const keys: string[] = [];

		for (const item of this.executionList) {
			keys.push(item.key as string);
			promises.push(
				this.httpClient[item.value.method ?? 'get'](
					item.value.uri,
					{
						searchParams: normalizeSearchParams(item.value.searchParams),
						json: item.value.json,
					},
				).json(),
			);
		}

		const responses: ExecutionResult = {};

		try {
			(await Promise.all(promises)).forEach((res, index) => {
				if (!responses[keys[index]])
					responses[keys[index]] = [];
				responses[keys[index]].push(res);
			});
		} catch (error) {
			if (error instanceof HTTPError) {
				if (error.response.statusCode === 401) {
					const {
						body: {
							status_code,
							status_message,
						},
					} = error.response as Response<ResponseError>;

					throw new NotEnoughPermissionError(
						status_message, status_code,
					);
				} else if (error.response.statusCode === 404) {
					const { body: { status_code } } = error.response as Response<ResponseError>;

					throw new NotFoundError(status_code);
				} else {
					throw new UnknownHTTPError(error.message, error.response.statusCode);
				}
			} else {
				throw new UnknownError(error.message);
			}
		} finally {
			this.executionList = [];
		}

		return (responses as unknown) as ReturnType;
	}

	public cancelAll(): void {
		this.executionList = [];
	}

	protected addToExecutionList(
		key: keyof ReturnType,
		value: ExecutionItemValue,
	): void {
		this.executionList.push({
			key,
			value,
		});
	}
}
