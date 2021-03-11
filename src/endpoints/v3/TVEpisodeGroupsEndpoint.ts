import { RequiredParameterError } from '../../errors';

import type TVEpisodeGroupsEndpointNS from '../../interfaces/v3/tvEpisodeGroups';
import type { IClient } from '../../utils/Client';

export default class TVEpisodeGroupsEndpoint implements TVEpisodeGroupsEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;
	private readonly id?: string;

	public constructor(options: TVEpisodeGroupsEndpointNS.Options.Constructor) {
		this.language = options.language;
		this.client = options.client;
		this.id = options.id;
	}

	public async details(
		options?: TVEpisodeGroupsEndpointNS.Options.Details,
	): Promise<TVEpisodeGroupsEndpointNS.Results.Details> {
		if (!this.id || !options?.id)
			throw new RequiredParameterError('id');

		return this.client.get(
			`tv/episode_groups/${options.id ?? this.id}`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}
}
