import { RequiredParameterError } from '../../errors';

import type TVShowEndpointNS from '../../interfaces/v3/tv-show';
import type { IClient } from '../../utils/client';

export default class TVShowEndpoint implements TVShowEndpointNS.Class {
	private readonly client: IClient;
	private readonly language: string;
	private readonly tvID?: number;
	private readonly sessionID?: string;

	public constructor(options: TVShowEndpointNS.Options.Constructor) {
		this.client = options.client;
		this.language = options.language;
		this.tvID = options.tvID;
		this.sessionID = options.sessionID;
	}

	public async details(options?: TVShowEndpointNS.Options.Details): Promise<TVShowEndpointNS.Results.Details> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					append_to_response: options?.appendToResponse,
				},
			},
		);
	}

	public async accountStates(
		options?: TVShowEndpointNS.Options.AccountStates,
	): Promise<TVShowEndpointNS.Results.AccountStates> {
		if (!options?.sessionID && !options?.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.get(
			`tv/${options.tvID ?? this.tvID}/account_states`,
			{
				searchParams: {
					language: options.language ?? this.language,
					session_id: options.sessionID,
					guest_session_id: options.guestSessionID,
				},
			},
		);
	}

	public async alternativeTiles(
		options?: TVShowEndpointNS.Options.AlternativeTitles,
	): Promise<TVShowEndpointNS.Results.AlternativeTitles> {
		if (!options?.tvID && !this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/alternative_titles`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async changes(options?: TVShowEndpointNS.Options.Changes): Promise<TVShowEndpointNS.Results.Changes> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/changes`,
			{
				searchParams: {
					start_date: options?.startDate,
					end_date: options?.endDate,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async contentRatings(
		options?: TVShowEndpointNS.Options.ContentRatings,
	): Promise<TVShowEndpointNS.Results.ContentRatings> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/content_ratings`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async credits(options?: TVShowEndpointNS.Options.Credits): Promise<TVShowEndpointNS.Results.Credits> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async episodeGroups(
		options?: TVShowEndpointNS.Options.EpisodeGroups,
	): Promise<TVShowEndpointNS.Results.EpisodeGroups> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/episode_groups`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async externalIDs(
		options?: TVShowEndpointNS.Options.ExternalIDs,
	): Promise<TVShowEndpointNS.Results.ExternalIDs> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/external_ids`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async images(options?: TVShowEndpointNS.Options.Images): Promise<TVShowEndpointNS.Results.Images> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/images`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async keywords(options?: TVShowEndpointNS.Options.Keywords): Promise<TVShowEndpointNS.Results.Keywords> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(`tv/${options?.tvID ?? this.tvID}`);
	}

	public async recommendations(
		options?: TVShowEndpointNS.Options.Recommendations,
	): Promise<TVShowEndpointNS.Results.Recommendations> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/recommendations`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async reviews(options?: TVShowEndpointNS.Options.Reviews): Promise<TVShowEndpointNS.Results.Reviews> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/reviews`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async screenedTheatrically(
		options?: TVShowEndpointNS.Options.ScreenedTheatrically,
	): Promise<TVShowEndpointNS.Results.ScreenedTheatrically> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(`tv/${options?.tvID ?? this.tvID}/screened_theatrically`);
	}

	public async similar(options?: TVShowEndpointNS.Options.Similar): Promise<TVShowEndpointNS.Results.Similar> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/similar`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async translations(
		options?: TVShowEndpointNS.Options.Translations,
	): Promise<TVShowEndpointNS.Results.Translations> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(`tv/${options?.tvID ?? this.tvID}/translations`);
	}

	public async videos(options?: TVShowEndpointNS.Options.Videos): Promise<TVShowEndpointNS.Results.Videos> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');

		return this.client.get(
			`tv/${options?.tvID ?? this.tvID}/videos`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async rate(options: TVShowEndpointNS.Options.Rate): Promise<TVShowEndpointNS.Results.Rate> {
		if (!options.tvID && this.tvID)
			throw new RequiredParameterError('tvID');
		if (!('value' in options))
			throw new RequiredParameterError('value');
		if (!options.sessionID && !options.guestSessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.post(
			`tv/${options.tvID ?? this.tvID}`,
			{
				searchParams: {
					session_id: options.sessionID ?? this.sessionID,
					guest_session_id: options.guestSessionID,
				},
				json: { value: options.value },
			},
		);
	}

	public async deleteRating(
		options?: TVShowEndpointNS.Options.DeleteRating,
	): Promise<TVShowEndpointNS.Results.DeleteRating> {
		if (!options?.tvID && this.tvID)
			throw new RequiredParameterError('tvID');
		if (!options?.sessionID && !options?.guestSessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.delete(
			`tv/${options?.tvID ?? this.tvID}/rating`,
			{
				searchParams: {
					guest_session_id: options?.guestSessionID,
					session_id: options?.sessionID,
				},
			},
		);
	}

	public async latest(options?: TVShowEndpointNS.Options.Latest): Promise<TVShowEndpointNS.Results.Latest> {
		return this.client.get(
			'tv/latest',
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async airingToday(
		options?: TVShowEndpointNS.Options.AiringToday,
	): Promise<TVShowEndpointNS.Results.AiringToday> {
		return this.client.get(
			'tv/airing_today',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async onTheAir(options?: TVShowEndpointNS.Options.OnTheAir): Promise<TVShowEndpointNS.Results.OnTheAir> {
		return this.client.get(
			'tv/on_the_air',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async popular(options?: TVShowEndpointNS.Options.Popular): Promise<TVShowEndpointNS.Results.Popular> {
		return this.client.get(
			'tv/popular',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async topRated(options?: TVShowEndpointNS.Options.TopRated): Promise<TVShowEndpointNS.Results.TopRated> {
		return this.client.get(
			'tv/top_rated',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}
}
