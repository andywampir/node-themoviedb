/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import { SearchParametrs } from '../../interfaces/common';
import { CerificationReturnType } from '../../interfaces/certification';

export default class CertificationEndpoint extends Executor<CerificationReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super();

    this.apiKey = apiKey;
  }

  public movie(): CertificationEndpoint {
    const searchParams: SearchParametrs = { api_key: this.apiKey };

    this.addToExecutionList(
      'movie',
      rqst('certification/movie/list', { searchParams }),
    );

    return this;
  }

  public tv(): CertificationEndpoint {
    const searchParams: SearchParametrs = { api_key: this.apiKey };

    this.addToExecutionList(
      'tv',
      rqst('certification/tv/list', { searchParams }),
    );

    return this;
  }
}
