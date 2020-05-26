/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import { CerificationsReturnType } from '../../interfaces/v3/certifications';

export default class CertificationsEndpoint extends Executor<CerificationsReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super(rqst);

    this.apiKey = apiKey;
  }

  public movie(): CertificationsEndpoint {
    this.addToExecutionList(
      'movie',
      {
        uri: 'certification/movie/list',
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public tv(): CertificationsEndpoint {
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
