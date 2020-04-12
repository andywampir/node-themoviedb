/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  ChangesReturnType, ChangesMovieOptions,
  ChangesPersonOptions, ChangesTVOptions,
} from '../../interfaces/changes';

export default class ChangesEndpoint extends Executor<ChangesReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super(rqst);

    this.apiKey = apiKey;
  }

  public movie(options?: ChangesMovieOptions): ChangesEndpoint {
    this.addToExecutionList(
      'movie',
      {
        uri: 'movie/changes',
        searchParams: {
          api_key: this.apiKey,
          end_date: options?.endDate ?? '',
          start_date: options?.startDate ?? '',
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
          end_date: options?.endDate ?? '',
          start_date: options?.startDate ?? '',
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
          end_date: options?.endDate ?? '',
          start_date: options?.startDate ?? '',
          page: options?.page ?? 1,
        },
      },
    );

    return this;
  }
}
