import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import type {
  NetworksReturnType, NetworksConstructorOptions,
} from '../../interfaces/v3/networks';
import { RequiredParameterError } from '../../errors';

export default class NetworksEndpoint extends Executor<NetworksReturnType> {
  private readonly apiKey: string;
  private readonly networkID: number | undefined;

  public constructor(options: NetworksConstructorOptions) {
    super(client);
    this.apiKey = options.apiKey;
  }

  public details(networkID?: number): NetworksEndpoint {
    if (!networkID && !this.networkID)
      throw new RequiredParameterError('networkID');

    this.addToExecutionList(
      'details',
      {
        uri: `network/${networkID ?? this.networkID}`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public alternativeNames(networkID?: number): NetworksEndpoint {
    if (!networkID && !this.networkID)
      throw new RequiredParameterError('networkID');

    this.addToExecutionList(
      'alternativeNames',
      {
        uri: `network/${networkID ?? this.networkID}/alternative_names`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public images(networkID?: number): NetworksEndpoint {
    if (!networkID && !this.networkID)
      throw new RequiredParameterError('networkID');

    this.addToExecutionList(
      'images',
      {
        uri: `network/${networkID ?? this.networkID}/images`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }
}
