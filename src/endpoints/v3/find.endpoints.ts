import FindEndpointNS from '../../interfaces/v3/find';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class FindEndpoint implements FindEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;

	public constructor(options: FindEndpointNS.Options.Constructor) {
		this.language = options.language;
		this.client = options.client;
	}

	public async byID(options: FindEndpointNS.Options.ByID): Promise<FindEndpointNS.Results.ByID> {
		if (!options.externalID)
			throw new RequiredParameterError('externalID');
		if (!options.externalSource)
			throw new RequiredParameterError('externalSource');

		return this.client.get(
			`find/${options.externalID}`,
			{
				searchParams: {
					language: options.language ?? this.language,
					external_source: options.externalSource,
				},
			},
		);
	}
}
