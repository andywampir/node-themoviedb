/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  DiscoverReturnType, DiscoverMovieOptions,
  DiscoverTVOptions, DiscoverConstructorOptions,
} from '../../interfaces/v3/discover';

export default class DiscoverEndpoint extends Executor<DiscoverReturnType> {
  private readonly apiKey: string;
  private readonly language: string;

  public constructor(options: DiscoverConstructorOptions) {
    super(rqst);

    this.apiKey = options.apiKey;
    this.language = options.language;
  }

  public movie(options?: DiscoverMovieOptions): DiscoverEndpoint {
    this.addToExecutionList(
      'movie',
      {
        uri: 'discover/movie',
        searchParams: {
          api_key: this.apiKey,
          language: options?.language ?? this.language,
          region: options?.region ?? null,
          sort_by: options?.sortBy ?? null,
          certification_country: options?.certificationCountry ?? null,
          certification: options?.certification ?? null,
          'certification.lte': options?.certificationLTE ?? null,
          'certification.gte': options?.certificationGTE ?? null,
          include_adult: options?.includeAdult ?? null,
          include_video: options?.includeVideo ?? null,
          page: options?.page ?? 1,
          primary_release_year: options?.primaryReleaseYear ?? null,
          'primary_release_date.gte': options?.primaryReleaseDateGTE ?? null,
          'primary_release_date.lte': options?.primaryReleaseDateLTE ?? null,
          'release_date.gte': options?.releaseDateGTE ?? null,
          'release_date.lte': options?.releaseDateLTE ?? null,
          with_release_type: options?.withReleaseType ?? null,
          year: options?.year ?? null,
          'vote_count.gte': options?.voteAverageGTE ?? null,
          'vote_count.lte': options?.voteAverageLTE ?? null,
          'vote_average.gte': options?.voteAverageGTE ?? null,
          'vote_average.lte': options?.voteAverageLTE ?? null,
          with_cast: options?.withCast ?? null,
          with_crew: options?.withCrew ?? null,
          with_people: options?.withPeople ?? null,
          with_companies: options?.withCompanies ?? null,
          with_genres: options?.withGenres ?? null,
          without_genres: options?.withoutGenres ?? null,
          with_keywords: options?.withKeywords ?? null,
          without_keywords: options?.withoutKeywords ?? null,
          'with_runtime.gte': options?.withRuntimeGTE ?? null,
          'with_runtime.lte': options?.withRuntimeLTE ?? null,
          with_original_language: options?.withOriginalLanguage ?? null,
        },
      },
    );

    return this;
  }

  public tv(options?: DiscoverTVOptions): DiscoverEndpoint {
    this.addToExecutionList(
      'tv',
      {
        uri: 'discover/tv',
        searchParams: {
          api_key: this.apiKey,
          language: options?.language ?? this.language,
          sort_by: options?.sortBy ?? null,
          'air_date.gte': options?.airDateGTE ?? null,
          'air_date.lte': options?.airDateLTE ?? null,
          'first_air_date.gte': options?.firstAirDateGTE ?? null,
          'first_air_date.lte': options?.firstAirDateLTE ?? null,
          first_air_date_year: options?.firstAirDateYear ?? null,
          page: options?.page ?? 1,
          timezone: options?.timezone ?? null,
          'vote_average.gte': options?.voteAverageGTE ?? null,
          'vote_count.gte': options?.voteCountGTE ?? null,
          with_genres: options?.withGenres ?? null,
          with_networks: options?.withNetworks ?? null,
          without_genres: options?.withoutGenres ?? null,
          'with_runtime.gte': options?.withRuntimeGTE ?? null,
          'with_runtime.lte': options?.withRuntimeLTE ?? null,
          include_null_first_air_dates: options?.includeNullFirstAirDates ?? null,
          with_original_language: options?.withOriginalLanguage ?? null,
          without_keywords: options?.withoutKeywords ?? null,
          screened_theatrically: options?.screenedTheatrically ?? null,
          with_companies: options?.withCompanies ?? null,
          with_keywords: options?.withKeywords ?? null,
        },
      },
    );

    return this;
  }
}
