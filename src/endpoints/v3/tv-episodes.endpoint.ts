import { RequiredParameterError } from '../../errors';

import type TVEpisodesEndpointNS from '../../interfaces/v3/tv-episodes';
import type { IClient } from '../../utils/client';

export default class TVEpisodesEndpoint implements TVEpisodesEndpointNS.Class {
	private readonly client: IClient;
	private readonly language: string;
	private readonly tvID?: number;
	private readonly seasonNumber?: number;
	private readonly episodeNumber?: number;

	public constructor(options: TVEpisodesEndpointNS.Options.Constructor) {
		this.client = options.client;
		this.language = options.language;
		this.tvID = options.tvID;
		this.seasonNumber = options.seasonNumber;
		this.episodeNumber = options.episodeNumber;
	}

	public async details(
		options?: TVEpisodesEndpointNS.Options.Details,
	): Promise<TVEpisodesEndpointNS.Results.Details> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/season/${options?.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options?.episodeNumber ?? this.episodeNumber}`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					append_to_response: options?.appendToResponse,
				},
			},
		);
	}

	public async changes(options: TVEpisodesEndpointNS.Options.Changes): Promise<TVEpisodesEndpointNS.Results.Changes> {
		if (!options.episodeID)
			throw new RequiredParameterError('episodeID');

		return this.client.get(
			`tv/episode/${options.episodeID}/changes`,
			{
				searchParams: {
					start_date: options.startDate,
					end_date: options.endDate,
					page: options.page ?? 1,
				},
			},
		);
	}

	public async accountStates(
		options?: TVEpisodesEndpointNS.Options.AccountStates,
	): Promise<TVEpisodesEndpointNS.Results.AccountStates> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');
		if (!options?.guestSessionID && !options?.sessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options.episodeNumber ?? this.episodeNumber}/account_states`,
			{
				searchParams: {
					guest_session_id: options.guestSessionID,
					session_id: options.sessionID,
				},
			},
		);
	}

	public async credits(
		options?: TVEpisodesEndpointNS.Options.Credits,
	): Promise<TVEpisodesEndpointNS.Results.Credits> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/season/${options?.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options?.episodeNumber ?? this.episodeNumber}/credits`,
			{ searchParams: { language: options?.language } },
		);
	}

	public async externalIDs(
		options?: TVEpisodesEndpointNS.Options.ExternalIDs,
	): Promise<TVEpisodesEndpointNS.Results.ExternalIDs> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/season/${options?.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options?.episodeNumber ?? this.episodeNumber}/external_ids`,
		);
	}

	public async images(options?: TVEpisodesEndpointNS.Options.Images): Promise<TVEpisodesEndpointNS.Results.Images> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/season/${options?.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options?.episodeNumber ?? this.episodeNumber}/images`,
		);
	}

	public async translations(
		options?: TVEpisodesEndpointNS.Options.Translations,
	): Promise<TVEpisodesEndpointNS.Results.Translations> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/season/${options?.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options?.episodeNumber ?? this.episodeNumber}/translations`,
		);
	}

	public async rate(options: TVEpisodesEndpointNS.Options.Rate): Promise<TVEpisodesEndpointNS.Results.Rate> {
		if (!options.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.post(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options.episodeNumber ?? this.episodeNumber}/rating`,
			{
				searchParams: {
					guest_session_id: options.guestSessionID,
					session_id: options.sessionID,
				},
				json: { value: options.value },
			},
		);
	}

	public async deleteRating(
		options?: TVEpisodesEndpointNS.Options.DeleteRating,
	): Promise<TVEpisodesEndpointNS.Results.DeleteRating> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');
		if (!options?.sessionID || !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.delete(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options.episodeNumber ?? this.episodeNumber}/rating`,
			{
				searchParams: {
					guest_session_id: options.guestSessionID,
					session_id: options.sessionID,
				},
			},
		);
	}

	public async videos(options?: TVEpisodesEndpointNS.Options.Videos): Promise<TVEpisodesEndpointNS.Results.Videos> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.seasonNumber && !this.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options?.episodeNumber && !this.episodeNumber)
			throw new RequiredParameterError('episodeNumber');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/season/${options?.seasonNumber ?? this.seasonNumber}`
				+ `/episode/${options?.episodeNumber ?? this.episodeNumber}/videos`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}
}
