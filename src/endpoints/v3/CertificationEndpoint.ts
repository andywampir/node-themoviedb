/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import { CerificationReturnType } from '../../interfaces/v3/certification';

export default class CertificationEndpoint extends Executor<CerificationReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super(rqst);

    this.apiKey = apiKey;
  }

  public movie(): CertificationEndpoint {
    this.addToExecutionList(
      'movie',
      {
        uri: 'certification/movie/list',
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public tv(): CertificationEndpoint {
    this.addToExecutionList(
      'tv',
      {
        uri: 'certification/tv/list',
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }
}
