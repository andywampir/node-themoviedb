/* eslint-disable camelcase */
import {
  ResultsWithPage, Movie,
  TVShow,
} from '../common';

// Options
export interface DiscoverConstructorOptions {
  apiKey: string;
  language: string;
}

type CommonSortBy =
| 'popularity.asc'
| 'popularity.desc'
| 'vote_average.asc'
| 'vote_average.desc';

interface CommonParameters<TSortBy> {
  language?: string;
  sortBy?: TSortBy;
  page?: number;
  voteCountGTE?: number;
  voteAverageGTE?: number;
  withGenres?: string;
  withRuntimeLTE?: number;
  withRuntimeGTE?: number;
  withOriginalLanguage?: string;
  withCompanies?: string;
  withKeywords?: string;
  withoutKeywords?: string;
  withoutGenres?: string;
}

export interface DiscoverMovieOptions extends CommonParameters<DiscoverMovieSortBy> {
  region?: string;
  certificationCountry?: string;
  certification?: string;
  certificationLTE?: string;
  certificationGTE?: string;
  includeAdult?: boolean;
  includeVideo?: boolean;
  primaryReleaseYear?: number;
  primaryReleaseDateLTE?: string;
  primaryReleaseDateGTE?: string;
  releaseDateLTE?: string;
  releaseDateGTE?: string;
  withReleaseType?: string;
  year?: number;
  voteCountLTE?: number;
  voteAverageLTE?: number;
  withCast?: string;
  withCrew?: string;
  withPeople?: string;
}

type DiscoverMovieSortBy =
| CommonSortBy
| 'release_date.asc'
| 'release_date.desc'
| 'revenue.asc'
| 'revenue.desc'
| 'primary_release_date.asc'
| 'primary_release_date.desc'
| 'original_title.asc'
| 'original_title.desc'
| 'vote_count.asc'
| 'vote_count.desc';

export interface DiscoverTVOptions extends CommonParameters<DiscoverTVSortBy> {
  airDateLTE?: string;
  airDateGTE?: string;
  firstAirDateLTE?: string;
  firstAirDateGTE?: string;
  firstAirDateYear?: number;
  timezone?: string;
  withNetworks?: string;
  includeNullFirstAirDates?: boolean;
  screenedTheatrically?: boolean;
}

type DiscoverTVSortBy =
| CommonSortBy
| 'first_air_date.asc'
| 'first_air_date.desc';

// Return Types
export interface DiscoverReturnType {
  movie?: DiscoverMovie[];
  tv?: DiscoverTV[];
}

interface DiscoverMovie extends ResultsWithPage<Movie> {}
interface DiscoverTV extends ResultsWithPage<TVShow> {}
