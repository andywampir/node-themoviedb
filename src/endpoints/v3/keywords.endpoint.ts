import KeywordsEndpointNS from '../../interfaces/v3/keywords';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class KeywordsEndpoint implements KeywordsEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;
	private readonly keywordID?: number;

	public constructor(options: KeywordsEndpointNS.Options.Constructor) {
		this.keywordID = options.keywordID;
		this.language = options.language;
		this.client = options.client;
	}

	public async details(options?: KeywordsEndpointNS.Options.Details): Promise<KeywordsEndpointNS.Results.Details> {
		if (!options?.keywordID && !this.keywordID)
			throw new RequiredParameterError('keywordID');

		return this.client.get(`keyword/${options?.keywordID ?? this.keywordID}`);
	}

	public async movies(options?: KeywordsEndpointNS.Options.Movies): Promise<KeywordsEndpointNS.Results.Movies> {
		if (!options?.keywordID && !this.keywordID)
			throw new RequiredParameterError('keywordID');

		return this.client.get(
			`keyword/${options?.keywordID ?? this.keywordID}/movies`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					include_adult: options?.includeAdult,
				},
			},
		);
	}
}
