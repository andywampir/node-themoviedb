import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import type {
  TrendingGetOptions, TrendingReturnType,
} from '../../interfaces/v3/trending';
import { RequiredParameterError } from '../../errors';

export default class TrendingEndpoint extends Executor<TrendingReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super(client);
    this.apiKey = apiKey;
  }

  public get(options: TrendingGetOptions): TrendingEndpoint {
    if (!options.mediaType)
      throw new RequiredParameterError('mediaType');
    if (!options.timeWindow)
      throw new RequiredParameterError('timeWindow');

    this.addToExecutionList(
      'get',
      {
        uri: `trending/${options.mediaType}/${options.timeWindow}`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }
}
