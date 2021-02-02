import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	MoviesReturnType, MoviesConstructorOptions,
	MoviesAccountStatesOptions, MoviesAlternativeTitlesOptions,
	MoviesChangesOptions, MoviesCreditsOptions,
	MoviesDeleteRatingOptions, MoviesDetailsOptions,
	MoviesExternalIDsOptions, MoviesImagesOptions,
	MoviesKeywordsOptions, MoviesLatestOptions,
	MoviesListsOptions, MoviesNowPlayingOptions,
	MoviesPopularOptions, MoviesRateOptions,
	MoviesRecommendationsOptions, MoviesReleaseDatesOptions,
	MoviesReviewsOptions, MoviesSimilarOptions,
	MoviesTopRatedOptions, MoviesTranslationsOptions,
	MoviesUpcomingOptions, MoviesVideosOptions,
} from '../../interfaces/v3/movies';
import { RequiredParameterError } from '../../errors';

export default class MoviesEndpoint extends Executor<MoviesReturnType> {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly movieID?: number;

	public constructor(options: MoviesConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.language = options.language;
		this.movieID = options.movieID;
	}

	public details(options: MoviesDetailsOptions): MoviesEndpoint {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'details',
			{
				uri: `movie/${options.movieID ?? this.movieID}`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					append_to_response: options.appendToResponse ?? null,
				},
			},
		);

		return this;
	}

	public accountState(options: MoviesAccountStatesOptions): MoviesEndpoint {
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'accountState',
			{
				uri: `movie/${options.movieID ?? this.movieID}/account_states`,
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? null,
					guest_session_id: options.guestSessionID ?? null,
				},
			},
		);

		return this;
	}

	public alternativeTitles(options: MoviesAlternativeTitlesOptions): MoviesEndpoint {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'alternativeTitles',
			{
				uri: `movie/${options.movieID ?? this.movieID}/alternative_titles`,
				searchParams: {
					api_key: this.apiKey,
					country: options.country ?? null,
				},
			},
		);

		return this;
	}

	public changes(options?: MoviesChangesOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'changes',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/changes`,
				searchParams: {
					api_key: this.apiKey,
					start_date: options?.startDate ?? null,
					end_date: options?.endDate ?? null,
					page: options?.page ?? 1,
				},
			},
		);

		return this;
	}

	public credits(options?: MoviesCreditsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'credits',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/credits`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public externalIDs(options?: MoviesExternalIDsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'externalIDs',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/external_ids`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public images(options?: MoviesImagesOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'images',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/images`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					include_image_language: options?.includeImageLanguage ?? null,
				},
			},
		);

		return this;
	}

	public keywords(options?: MoviesKeywordsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'keywords',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/keywords`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public releaseDates(options?: MoviesReleaseDatesOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'releaseDates',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/release_dates`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public videos(options?: MoviesVideosOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'videos',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/videos`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
				},
			},
		);

		return this;
	}

	public translations(options?: MoviesTranslationsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'translations',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/translations`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public recommendations(options?: MoviesRecommendationsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'recommendations',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/recommendations`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);

		return this;
	}

	public similar(options?: MoviesSimilarOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'similar',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/similar`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);

		return this;
	}

	public reviews(options?: MoviesReviewsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'reviews',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/reviews`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);

		return this;
	}

	public lists(options?: MoviesListsOptions): MoviesEndpoint {
		if (!options?.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');

		this.addToExecutionList(
			'lists',
			{
				uri: `movie/${options?.movieID ?? this.movieID}/lists`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);

		return this;
	}

	public rate(options: MoviesRateOptions): MoviesEndpoint {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		this.addToExecutionList(
			'rate',
			{
				uri: `movie/${options.movieID ?? this.movieID}/rating`,
				method: 'post',
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? null,
					guest_session_id: options.guestSessionID ?? null,
				},
				json: { value: options.value },
			},
		);

		return this;
	}

	public deleteRating(options: MoviesDeleteRatingOptions): MoviesEndpoint {
		if (!options.movieID && !this.movieID)
			throw new RequiredParameterError('movieID');
		if (!options.sessionID && !options.guestSessionID)
			throw new RequiredParameterError('sessionID or guestSessionID');

		this.addToExecutionList(
			'deleteRating',
			{
				uri: `movie/${options.movieID ?? this.movieID}/rating`,
				method: 'delete',
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? null,
					guest_session_id: options.guestSessionID ?? null,
				},
			},
		);

		return this;
	}

	public latest(options?: MoviesLatestOptions): MoviesEndpoint {
		this.addToExecutionList(
			'latest',
			{
				uri: 'movie/latest',
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
				},
			},
		);

		return this;
	}

	public nowPlaying(options?: MoviesNowPlayingOptions): MoviesEndpoint {
		this.addToExecutionList(
			'nowPlaying',
			{
				uri: 'movie/now_playing',
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region ?? null,
				},
			},
		);

		return this;
	}

	public popular(options?: MoviesPopularOptions): MoviesEndpoint {
		this.addToExecutionList(
			'popular',
			{
				uri: 'movie/popular',
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region ?? null,
				},
			},
		);

		return this;
	}

	public topRated(options?: MoviesTopRatedOptions): MoviesEndpoint {
		this.addToExecutionList(
			'topRated',
			{
				uri: 'movie/top_rated',
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region ?? null,
				},
			},
		);

		return this;
	}

	public upcoming(options?: MoviesUpcomingOptions): MoviesEndpoint {
		this.addToExecutionList(
			'upcoming',
			{
				uri: 'movie/upcoming',
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					region: options?.region ?? null,
				},
			},
		);

		return this;
	}
}
