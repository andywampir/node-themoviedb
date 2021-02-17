import TrendingEndpointNS from '../../interfaces/v3/trending';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class TrendingEndpoint implements TrendingEndpointNS.Class {
	private readonly apiKey: string;
	private readonly client: IClient;

	public constructor(options: TrendingEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.client = options.client;
	}

	public async get(options: TrendingEndpointNS.Options.Get): Promise<TrendingEndpointNS.Results.Get> {
		if (!options.mediaType)
			throw new RequiredParameterError('mediaType');
		if (!options.timeWindow)
			throw new RequiredParameterError('timeWindow');

		return this.client.get(
			`trending/${options.mediaType}/${options.timeWindow}`,
			{ searchParams: { api_key: this.apiKey } },
		);
	}
}
