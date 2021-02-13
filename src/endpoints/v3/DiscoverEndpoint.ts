import DiscoverEndpointNS from '../../interfaces/v3/discover';

import type { IClient } from '../../utils/Client';

export default class DiscoverEndpoint implements DiscoverEndpointNS.Class {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly client: IClient;

	public constructor(options: DiscoverEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.language = options.language;
		this.client = options.client;
	}

	public async movie(options?: DiscoverEndpointNS.Options.Movie): Promise<DiscoverEndpointNS.Results.Movie> {
		return this.client.get(
			'discover/movie',
			{
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					region: options?.region,
					sort_by: options?.sortBy,
					certification_country: options?.certificationCountry,
					certification: options?.certification,
					'certification.lte': options?.certificationLTE,
					'certification.gte': options?.certificationGTE,
					include_adult: options?.includeAdult,
					include_video: options?.includeVideo,
					page: options?.page ?? 1,
					primary_release_year: options?.primaryReleaseYear,
					'primary_release_date.gte': options?.primaryReleaseDateGTE,
					'primary_release_date.lte': options?.primaryReleaseDateLTE,
					'release_date.gte': options?.releaseDateGTE,
					'release_date.lte': options?.releaseDateLTE,
					with_release_type: options?.withReleaseType,
					year: options?.year,
					'vote_count.gte': options?.voteAverageGTE,
					'vote_count.lte': options?.voteAverageLTE,
					'vote_average.gte': options?.voteAverageGTE,
					'vote_average.lte': options?.voteAverageLTE,
					with_cast: options?.withCast,
					with_crew: options?.withCrew,
					with_people: options?.withPeople,
					with_companies: options?.withCompanies,
					with_genres: options?.withGenres,
					without_genres: options?.withoutGenres,
					with_keywords: options?.withKeywords,
					without_keywords: options?.withoutKeywords,
					'with_runtime.gte': options?.withRuntimeGTE,
					'with_runtime.lte': options?.withRuntimeLTE,
					with_original_language: options?.withOriginalLanguage,
				},
			},
		);
	}

	public async tv(options?: DiscoverEndpointNS.Options.TV): Promise<DiscoverEndpointNS.Results.TV> {
		return this.client.get(
			'discover/tv',
			{
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy,
					'air_date.gte': options?.airDateGTE,
					'air_date.lte': options?.airDateLTE,
					'first_air_date.gte': options?.firstAirDateGTE,
					'first_air_date.lte': options?.firstAirDateLTE,
					first_air_date_year: options?.firstAirDateYear,
					page: options?.page ?? 1,
					timezone: options?.timezone,
					'vote_average.gte': options?.voteAverageGTE,
					'vote_count.gte': options?.voteCountGTE,
					with_genres: options?.withGenres,
					with_networks: options?.withNetworks,
					without_genres: options?.withoutGenres,
					'with_runtime.gte': options?.withRuntimeGTE,
					'with_runtime.lte': options?.withRuntimeLTE,
					include_null_first_air_dates: options?.includeNullFirstAirDates,
					with_original_language: options?.withOriginalLanguage,
					without_keywords: options?.withoutKeywords,
					screened_theatrically: options?.screenedTheatrically,
					with_companies: options?.withCompanies,
					with_keywords: options?.withKeywords,
				},
			},
		);
	}
}
