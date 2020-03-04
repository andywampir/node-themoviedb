import {
  Response, CancelableRequest
} from 'got';

interface ExecutionList {
  [key: string]: CancelableRequest<Response<unknown>>;
}

interface ExecutionResult {
  [key: string]: unknown;
}

export default class Executor<ReturnType> {
  protected executionList: ExecutionList = {};

  protected async execute(): Promise<ReturnType> {
    const promises: CancelableRequest<Response<unknown>>[] = [];
    const keys: string[] = [];

    for (const key in this.executionList) {
      keys.push(key);
      promises.push(this.executionList[key]);
    }

    const responses: ExecutionResult = {};

    (await Promise.all(promises)).forEach((res, index) => {
      responses[keys[index]] = res;
    });

    return (responses as unknown) as ReturnType;
  }

  protected addToExecutionList<TKeys, TExecution>(
    key: keyof TKeys,
    execution: CancelableRequest<Response<TExecution>>,
  ): void {
    this.executionList[key as string] = execution;
  }
}
