/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  CreditReturnType, CreditConstructorOptions,
} from '../../interfaces/v3/credit';
import { RequiredParameterError } from '../../errors';

export default class CreditEndpoint extends Executor<CreditReturnType> {
  private readonly apiKey: string;
  private readonly creditID?: string;

  public constructor(options: CreditConstructorOptions) {
    super(rqst);

    this.apiKey = options.apiKey;
    this.creditID = options.creditID;
  }

  public details(creditID?: string): CreditEndpoint {
    if (!creditID || !this.creditID)
      throw new RequiredParameterError('creditID');

    this.addToExecutionList(
      'details',
      {
        uri: `credit/${creditID ?? this.creditID}`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }
}
