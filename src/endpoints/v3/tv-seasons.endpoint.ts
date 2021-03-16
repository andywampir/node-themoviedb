import { RequiredParameterError } from '../../errors';

import type TVSeasonsEndpointNS from '../../interfaces/v3/tv-seasons';
import type { IClient } from '../../utils/client';

export default class TVSeasonsEndpoint implements TVSeasonsEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;
	private readonly tvID?: number;
	private readonly seasonNumber?: number;

	public constructor(options: TVSeasonsEndpointNS.Options.Constructor) {
		this.language = options.language;
		this.client = options.client;
		this.tvID = options.tvID;
		this.seasonNumber = options.seasonNumber;
	}

	public async details(options?: TVSeasonsEndpointNS.Options.Details): Promise<TVSeasonsEndpointNS.Results.Details> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}`,
			{
				searchParams: {
					language: options.language ?? this.language,
					append_to_response: options.appendToResponse,
				},
			},
		);
	}

	public async changes(options: TVSeasonsEndpointNS.Options.Changes): Promise<TVSeasonsEndpointNS.Results.Changes> {
		if (!options.seasonID)
			throw new RequiredParameterError('seasonID');

		return this.client.get(
			`tv/season/${options.seasonID}/changes`,
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
		options?: TVSeasonsEndpointNS.Options.AccountStates,
	): Promise<TVSeasonsEndpointNS.Results.AccountStates> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');
		if (!options.guestSessionID || !options.sessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}/account_states`,
			{
				searchParams: {
					language: options.language ?? this.language,
					guest_session_id: options.guestSessionID,
					session_id: options.sessionID,
				},
			},
		);
	}

	public async credits(options?: TVSeasonsEndpointNS.Options.Credits): Promise<TVSeasonsEndpointNS.Results.Credits> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}/credits`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async externalIDs(
		options?: TVSeasonsEndpointNS.Options.ExternalIDs,
	): Promise<TVSeasonsEndpointNS.Results.ExternalIDs> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}/external_ids`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async images(options?: TVSeasonsEndpointNS.Options.Images): Promise<TVSeasonsEndpointNS.Results.Images> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}/images`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async translations(
		options?: TVSeasonsEndpointNS.Options.Translations,
	): Promise<TVSeasonsEndpointNS.Results.Translations> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}/translations`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async videos(options?: TVSeasonsEndpointNS.Options.Videos): Promise<TVSeasonsEndpointNS.Results.Videos> {
		if (!this.tvID || !options?.tvID)
			throw new RequiredParameterError('tvID');
		if (!this.seasonNumber || !options.seasonNumber)
			throw new RequiredParameterError('seasonNumber');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/season/${options.seasonNumber ?? this.seasonNumber}/videos`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}
}
