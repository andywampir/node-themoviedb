import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
  ChangesReturnType, ChangesMovieOptions,
  ChangesPersonOptions, ChangesTVOptions,
} from '../../interfaces/v3/changes';

export default class ChangesEndpoint extends Executor<ChangesReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super(client);

    this.apiKey = apiKey;
  }

  public movie(options?: ChangesMovieOptions): ChangesEndpoint {
    this.addToExecutionList(
      'movie',
      {
        uri: 'movie/changes',
        searchParams: {
          api_key: this.apiKey,
          end_date: options?.endDate ?? null,
          start_date: options?.startDate ?? null,
          page: options?.page ?? 1,
        },
      },
    );

    return this;
  }

  public tv(options?: ChangesTVOptions): ChangesEndpoint {
    this.addToExecutionList(
      'tv',
      {
        uri: 'tv/changes',
        searchParams: {
          api_key: this.apiKey,
          end_date: options?.endDate ?? null,
          start_date: options?.startDate ?? null,
          page: options?.page ?? 1,
        },
      },
    );

    return this;
  }

  public person(options?: ChangesPersonOptions): ChangesEndpoint {
    this.addToExecutionList(
      'person',
      {
        uri: 'person/changes',
        searchParams: {
          api_key: this.apiKey,
          end_date: options?.endDate ?? null,
          start_date: options?.startDate ?? null,
          page: options?.page ?? 1,
        },
      },
    );

    return this;
  }
}
