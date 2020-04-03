/* eslint-disable camelcase */
import {
  Response, CancelableRequest,
  HTTPError,
} from 'got';

import {
  NotEnoughPermissionError, NotFoundError,
  UnknownHTTPError, UnknownError,
} from '../errors';
import { ResponseError } from '../interfaces/common';

interface ExecutionItem<TKeys> {
  key: keyof TKeys;
  value: CancelableRequest<Response<unknown>>;
}

export interface ExecutionResult {
  [key: string]: unknown[];
}

export default class Executor<ReturnType> {
  private executionList: ExecutionItem<ReturnType>[] = [];

  public async execute(): Promise<ReturnType | null> {
    const promises: CancelableRequest<Response<unknown>>[] = [];
    const keys: string[] = [];

    for (const item of this.executionList) {
      keys.push(item.key as string);
      promises.push(item.value.json());
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

  protected addToExecutionList<TExecution>(
    key: keyof ReturnType,
    execution: CancelableRequest<Response<TExecution>>,
  ): void {
    this.executionList.push({
      key,
      value: execution,
    });
  }
}
