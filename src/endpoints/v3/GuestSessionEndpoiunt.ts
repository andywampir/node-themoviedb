import GuestSessionEndpointNS from '../../interfaces/v3/guestSessions';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class GuestSessionEndpoint implements GuestSessionEndpointNS.Class {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly client: IClient;
	private readonly guestSessionID?: string;

	public constructor(options: GuestSessionEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.language = options.language;
		this.guestSessionID = options.guestSessionID;
		this.client = options.client;
	}

	public async ratedMovies(
		options?: GuestSessionEndpointNS.Options.RatedMovies,
	): Promise<GuestSessionEndpointNS.Results.RatedMovies> {
		if (!options?.guestSessionID && !this.guestSessionID)
			throw new RequiredParameterError('guestSessionID');

		return this.client.get(
			`guest_session/${options?.guestSessionID ?? this.guestSessionID}/rated/movies`,
			{
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async ratedTVShows(
		options?: GuestSessionEndpointNS.Options.RatedTVShows,
	): Promise<GuestSessionEndpointNS.Results.RatedTVShows> {
		if (!options?.guestSessionID && !this.guestSessionID)
			throw new RequiredParameterError('guestSessionID');

		return this.client.get(
			`guest_session/${options?.guestSessionID ?? this.guestSessionID}/rated/tv`,
			{
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async ratedTVEpisodes(
		options?: GuestSessionEndpointNS.Options.RatedTVEpisodes,
	): Promise<GuestSessionEndpointNS.Results.RatedTVEpisodes> {
		if (!options?.guestSessionID && !this.guestSessionID)
			throw new RequiredParameterError('guestSessionID');

		return this.client.get(
			`guest_session/${options?.guestSessionID ?? this.guestSessionID}/rated/tv/episodes`,
			{
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy,
				},
			},
		);
	}
}
