import MoviesEndpointNS from '../../interfaces/v3/movies';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class MoviesEndpoint implements MoviesEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;
	private readonly movieID?: number;

	public constructor(options: MoviesEndpointNS.Options.Constructor) {
		this.language = options.language;
		this.movieID = options.movieID;
		this.client = options.client;
	}

	public async details(options: MoviesEndpointNS.Options.Details): Promise<MoviesEndpointNS.Results.Details> {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options.movieID ?? this.movieID}`,
			{
				searchParams: {
					language: options.language ?? this.language,
					append_to_response: options.appendToResponse,
				},
			},
		);
	}

	public async accountStates(
		options: MoviesEndpointNS.Options.AccountStates,
	): Promise<MoviesEndpointNS.Results.AccountStates> {
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options.movieID ?? this.movieID}/account_states`,
			{
				searchParams: {
					session_id: options.sessionID,
					guest_session_id: options.guestSessionID,
				},
			},
		);
	}

	public async alternativeTitles(
		options: MoviesEndpointNS.Options.AlternativeTitles,
	): Promise<MoviesEndpointNS.Results.AlternativeTitles> {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options.movieID ?? this.movieID}/alternative_titles`,
			{ searchParams: { country: options.country } },
		);
	}

	public async changes(options?: MoviesEndpointNS.Options.Changes): Promise<MoviesEndpointNS.Results.Changes> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/changes`,
			{
				searchParams: {
					start_date: options?.startDate,
					end_date: options?.endDate,
					page: options?.page,
				},
			},
		);
	}

	public async credits(options?: MoviesEndpointNS.Options.Credits): Promise<MoviesEndpointNS.Results.Credits> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(`movie/${options?.movieID ?? this.movieID}/credits`);
	}

	public async externalIDs(
		options?: MoviesEndpointNS.Options.ExternalIDs,
	): Promise<MoviesEndpointNS.Results.ExternalIDs> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(`movie/${options?.movieID ?? this.movieID}/external_ids`);
	}

	public async images(options?: MoviesEndpointNS.Options.Images): Promise<MoviesEndpointNS.Results.Images> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/images`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					include_image_language: options?.includeImageLanguage,
				},
			},
		);
	}

	public async keywords(options?: MoviesEndpointNS.Options.Keywords): Promise<MoviesEndpointNS.Results.Keywords> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(`movie/${options?.movieID ?? this.movieID}/keywords`);
	}

	public async releaseDates(
		options?: MoviesEndpointNS.Options.ReleaseDates,
	): Promise<MoviesEndpointNS.Results.ReleaseDates> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(`movie/${options?.movieID ?? this.movieID}/release_dates`);
	}

	public async videos(options?: MoviesEndpointNS.Options.Videos): Promise<MoviesEndpointNS.Results.Videos> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/videos`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async translations(
		options?: MoviesEndpointNS.Options.Translations,
	): Promise<MoviesEndpointNS.Results.Translations> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(`movie/${options?.movieID ?? this.movieID}/translations`);
	}

	public async recommendations(
		options?: MoviesEndpointNS.Options.Recommendations,
	): Promise<MoviesEndpointNS.Results.Recommendations> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/recommendations`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async similar(options?: MoviesEndpointNS.Options.Similar): Promise<MoviesEndpointNS.Results.Similar> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/similar`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async reviews(options?: MoviesEndpointNS.Options.Reviews): Promise<MoviesEndpointNS.Results.Reviews> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/reviews`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async lists(options?: MoviesEndpointNS.Options.Lists): Promise<MoviesEndpointNS.Results.Lists> {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`movie/${options?.movieID ?? this.movieID}/lists`,
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async rate(options: MoviesEndpointNS.Options.Rate): Promise<MoviesEndpointNS.Results.Rate> {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.post(
			`movie/${options.movieID ?? this.movieID}/rating`,
			{
				searchParams: {
					session_id: options.sessionID,
					guest_session_id: options.guestSessionID,
				},
				json: { value: options.value },
			},
		);
	}

	public async deleteRating(
		options: MoviesEndpointNS.Options.DeleteRating,
	): Promise<MoviesEndpointNS.Results.DeleteRating> {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		return this.client.delete(
			`movie/${options.movieID ?? this.movieID}/rating`,
			{
				searchParams: {
					session_id: options.sessionID,
					guest_session_id: options.guestSessionID,
				},
			},
		);
	}

	public async latest(options?: MoviesEndpointNS.Options.Latest): Promise<MoviesEndpointNS.Results.Latest> {
		return this.client.get(
			'movie/latest',
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async nowPlaying(
		options?: MoviesEndpointNS.Options.NowPlaying,
	): Promise<MoviesEndpointNS.Results.NowPlaying> {
		return this.client.get(
			'movie/now_playing',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region,
				},
			},
		);
	}

	public async popular(options?: MoviesEndpointNS.Options.Popular): Promise<MoviesEndpointNS.Results.Popular> {
		return this.client.get(
			'movie/popular',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page,
					region: options?.region,
				},
			},
		);
	}

	public async topRated(options?: MoviesEndpointNS.Options.TopRated): Promise<MoviesEndpointNS.Results.TopRated> {
		return this.client.get(
			'movie/top_rated',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region,
				},
			},
		);
	}

	public async upcoming(options?: MoviesEndpointNS.Options.Upcoming): Promise<MoviesEndpointNS.Results.Upcoming> {
		return this.client.get(
			'movie/upcoming',
			{
				searchParams: {
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region,
				},
			},
		);
	}
}
