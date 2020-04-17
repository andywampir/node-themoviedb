/* eslint-disable camelcase */
import {
  ImageWithISO639, Movie,
  ResultsWithPage, Review,
  ResponseWithCode, MovieExtended,
} from '../common';

// Options
interface CommonParameters {
  movieID?: number;
}

export interface MovieDetailsOptions extends CommonParameters {
  language?: string;
  appendToResponse?: string;
}

export interface MovieAccountStatesOptions extends CommonParameters {
  sessionID?: string;
  guestSessionID?: string;
}

export interface MovieAlternativeTitlesOptions extends CommonParameters {
  country?: string;
}

export interface MovieChangesOptions extends CommonParameters {
  startDate?: string;
  endDate?: string;
  page?: number;
}

export interface MovieCreditsOptions extends CommonParameters {}
export interface MovieExternalIDsOptions extends CommonParameters {}

export interface MovieImagesOptions extends CommonParameters {
  language?: string;
  includeImageLanguage?: string;
}

export interface MovieKeywordsOptions extends CommonParameters {}
export interface MovieReleaseDatesOptions extends CommonParameters {}

export interface MovieVideosOptions extends CommonParameters {
  language?: string;
}

export interface MovieTranslationsOptions extends CommonParameters {}

export interface MovieRecommendationsOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface MovieSimilarOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface MovieReviewsOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface MovieListsOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface MovieRateOptions extends CommonParameters {
  sessionID?: string;
  guestSessionID?: string;
  value: number;
}

export interface MovieDeleteRateOptions extends CommonParameters {
  sessionID?: string;
  guestSessionID?: string;
}

export interface MovieLatestOptions {
  language?: string;
}

export interface MovieNowPlayingOptions {
  language?: string;
  page?: number;
  region?: string;
}

export interface MoviePopularOptions {
  language?: string;
  page?: number;
  region?: string;
}

export interface MovieTopRatedOptions {
  language?: string;
  page?: number;
  region?: string;
}

export interface MovieUpcomingOptions {
  language?: string;
  page?: number;
  region?: string;
}

// Return Types
export interface MovieReturnType {
  details?: MovieDetails[];
  accountState?: MovieAccountStates[];
  alternativeTitles?: MovieAlternativeTitles[];
  changes?: MovieChanges[];
  credits?: MovieCredits[];
  externalIDs?: MovieExternalIDs[];
  images?: MovieImages[];
  keywords?: MovieKeywords[];
  releaseDates?: MovieReleaseDates[];
  videos?: MovieVideos[];
  translations?: MovieTranslations[];
  recommendations?: MovieRecommendations[];
  similar?: MovieSimilar[];
  reviews?: MovieReviews[];
  lists?: MovieLists[];
  rate?: MovieRate[];
  deleteRate?: MovieDeleteRate[];
  latest?: MovieLatest[];
  nowPlaying?: MovieNowPlaying[];
  popular?: MoviePopular[];
  topRated?: MovieTopRated[];
  upcoming?: MovieUpcoming[];
}

interface MovieDetails extends MovieExtended {
  alternative_titles?: Omit<MovieAlternativeTitles, 'id'>;
  changes?: MovieChanges;
  credits?: Omit<MovieCredits, 'id'>;
  external_ids?: Omit<MovieExternalIDs, 'id'>;
  images?: Omit<MovieImages, 'id'>;
  keywords?: Omit<MovieKeywords, 'id'>;
  release_dates?: Omit<MovieReleaseDates, 'id'>;
  videos?: Omit<MovieVideos, 'id'>;
  translations?: Omit<MovieTranslations, 'id'>;
  recommendations?: MovieRecommendations;
  similar?: MovieSimilar;
  reviews?: Omit<MovieReviews, 'id' >;
  lists?: Omit<MovieLists, 'id'>;
}

interface MovieAccountStates {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  } | boolean;
  watchlist: boolean;
}

interface MovieAlternativeTitles {
  id: number;
  titles: {
    iso_3166_1: string;
    title: string;
    type: string;
  }[];
}

interface MovieChanges {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
      iso_3166_1: string;
      value: string;
      original_value: string;
    }[];
  }[];
}

interface MovieCredits {
  id: number;
  case: {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number | null;
    id: number;
    name: string;
    order: number;
    profile_path: string | null;
  }[];
  crew: {
    credit_id: string;
    department: string;
    gender: number | null;
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
  }[];
}

interface MovieExternalIDs {
  imdb_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
  id: number;
}

interface MovieImages {
  id: number;
  backdrops: ImageWithISO639[];
  posters: ImageWithISO639[];
}

interface MovieKeywords {
  id: number;
  keywords: {
    id: number;
    name: string;
  }[];
}

interface MovieReleaseDates {
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      iso_639_1: string;
      release_date: string;
      type: number;
      note: string;
    }[];
  }[];
}

interface MovieVideos {
  id: number;
  results: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: 360 | 480 | 720 | 1080;
    type:
    | 'Trailer'
    | 'Teaser'
    | 'Clip'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Bloopers';
  }[];
}

interface MovieTranslations {
  id: number;
  translations: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    english_name: string;
    data: {
      title: string;
      overview: string;
      homepage: string;
    };
  }[];
}

interface MovieRecommendations extends ResultsWithPage<Movie> {}
interface MovieSimilar extends ResultsWithPage<Movie> {}

interface MovieReviews extends ResultsWithPage<Review> {
  id: number;
}

interface MovieLists extends ResultsWithPage<MovieList> {
  id: number;
}

interface MovieList {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: string | null;
}

interface MovieRate extends ResponseWithCode {}
interface MovieDeleteRate extends ResponseWithCode {}
interface MovieLatest extends MovieExtended {}

interface MovieNowPlaying extends ResultsWithPage<Movie> {
  dates: {
    maximum: string;
    minimum: string;
  };
}

interface MoviePopular extends ResultsWithPage<Movie> {}
interface MovieTopRated extends ResultsWithPage<Movie> {}

interface MovieUpcoming extends ResultsWithPage<Movie> {
  dates: {
    maximum: string;
    minimum: string;
  };
}
