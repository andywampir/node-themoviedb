/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  ChangesReturnType, ChangesMovieOptions,
  ChangesPersonOptions, ChangesTVOptions,
} from '../../interfaces/changes';
import { SearchParametrs } from '../../interfaces/common';

export default class ChangesEndpoint extends Executor<ChangesReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super();

    this.apiKey = apiKey;
  }

  public movie(options?: ChangesMovieOptions): ChangesEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      end_date: options?.endDate ?? '',
      start_date: options?.startDate ?? '',
      page: options?.page ?? 1,
    };

    this.addToExecutionList(
      'movie',
      rqst('movie/changes', { searchParams }),
    );

    return this;
  }

  public tv(options?: ChangesTVOptions): ChangesEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      end_date: options?.endDate ?? '',
      start_date: options?.startDate ?? '',
      page: options?.page ?? 1,
    };

    this.addToExecutionList(
      'tv',
      rqst('tv/changes', { searchParams }),
    );

    return this;
  }

  public person(options?: ChangesPersonOptions): ChangesEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      end_date: options?.endDate ?? '',
      start_date: options?.startDate ?? '',
      page: options?.page ?? 1,
    };

    this.addToExecutionList(
      'person',
      rqst('person/changes', { searchParams }),
    );

    return this;
  }
}
