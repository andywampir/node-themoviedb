/* eslint-disable camelcase */
import {
  TVShow, CrewCredit,
  CastCredit, ImageWithISO639,
  ResultsWithPage, Review,
  TVShowVideo, ResponseWithCode,
  TVShowExtended, ExternalIDs,
} from '../common';

// Options
interface CommonParameters {
  tvID?: number;
}

export interface TVShowDetailsOptions extends CommonParameters {
  language?: string;
  appendToResponse?: string;
}

export interface TVShowAccountStatesOptions extends CommonParameters {
  language?: string;
  guestSessionID?: string;
  sessionID?: string;
}

export interface TVShowAlternativeTitlesOptions extends CommonParameters {
  language?: string;
}

export interface TVShowChangesOptions extends CommonParameters {
  startDate?: string;
  endDate?: string;
  page?: number;
}

export interface TVShowContentRatingsOptions extends CommonParameters {
  language?: string;
}

export interface TVShowCreditsOptions extends CommonParameters {
  language?: string;
}

export interface TVShowEpisodeGroupsOptions extends CommonParameters {
  language?: string;
}

export interface TVShowExternalIDsOptions extends CommonParameters {
  language?: string;
}

export interface TVShowImagesOptions extends CommonParameters {
  language?: string;
}

export interface TVShowKeywordsOptions extends CommonParameters {}

export interface TVShowRecommendationsOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface TVShowReviewsOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface TVShowScreenedTheatricallyOptions extends CommonParameters {}

export interface TVShowSimilarOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface TVShowTranslationsOptions extends CommonParameters {}

export interface TVShowVideosOptions extends CommonParameters {
  language?: string;
}

export interface TVShowRateOptions extends CommonParameters {
  value: number;
  guestSessionID?: string;
  sessionID?: string;
}

export interface TVShowDeleteRatingOptions extends CommonParameters {
  guestSessionID?: string;
  sessionID?: string;
}

export interface TVShowLatestOptions {
  language?: string;
}

export interface TVShowAiringTodayOptions {
  language?: string;
  page?: number;
}

export interface TVShowOnTheAirOptions {
  language?: string;
  page?: number;
}

export interface TVShowPopularOptins {
  language?: string;
  page?: number;
}

export interface TVShowTopRatedOptions {
  language?: string;
  page?: number;
}

// Return Types
export interface TVShowReturnType {
  details?: TVShowDetails[];
  accountStates?: TVShowAccountStates[];
  alternativeTiles?: TVShowAlternativeTitles[];
  changes?: TVShowChanges[];
  contentRatings?: TVShowContentRatings[];
  credits?: TVShowCredits[];
  episodeGroups?: TVShowEpisodeGroups[];
  externalIDs?: TVShowExternalIDs[];
  images?: TVShowImages[];
  keywords?: TVShowKeywords[];
  recommendations?: TVShowRecommendations[];
  reviews?: TVShowReviews[];
  screenedTheatrically?: TVShowScreenedTheatrically[];
  similar?: TVShowSimilar[];
  translations?: TVShowTranslations[];
  videos?: TVShowVideos[];
  rate?: TVShowRate[];
  deleteRating?: TVShowDeleteRating[];
  latest?: TVShowLatest[];
  airingToday?: TVShowAiringToday[];
  onTheAir?: TVShowOnTheAir[];
  popular?: TVShowPopular[];
  topRated?: TVShowTopRated[];
}

interface TVShowDetails extends TVShowExtended {
  alternative_titles?: Omit<TVShowAlternativeTitles, 'id'>;
  changes?: TVShowChanges;
  content_ratings?: Omit<TVShowContentRatings, 'id'>;
  credits?: Omit<TVShowCredits, 'id'>;
  episode_groups?: Omit<TVShowEpisodeGroups, 'id'>;
  external_ids?: Omit<TVShowExternalIDs, 'id'>;
  images?: Omit<TVShowImages, 'id'>;
  keywords?: Omit<TVShowKeywords, 'id'>;
  recommendations?: TVShowRecommendations;
  reviews?: Omit<TVShowReviews, 'id'>;
  screened_theatrically?: Omit<TVShowScreenedTheatrically, 'id'>;
  similar?: TVShowSimilar;
  translations?: Omit<TVShowTranslations, 'id'>;
  videos?: Omit<TVShowVideos, 'id'>;
}

interface TVShowAccountStates {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  } | boolean;
  watchlist: boolean;
}

interface TVShowAlternativeTitles {
  id: number;
  results: {
    title: string;
    iso_3166_1: string;
    type: string;
  }[];
}

interface TVShowChanges {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
    }[];
  }[];
}

interface TVShowContentRatings {
  id: number;
  results: {
    iso_3166_1: string;
    rating: string;
  }[];
}

interface TVShowCredits {
  id: number;
  cast: CastCredit[];
  crew: CrewCredit[];
}

interface TVShowEpisodeGroups {
  id: number;
  results: {
    description: string;
    episode_count: number;
    group_count: number;
    id: string;
    name: string;
    network: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    } | null;
  }[];
}

interface TVShowExternalIDs extends ExternalIDs {
  id: number;
}

interface TVShowImages {
  id: number;
  backdrops: ImageWithISO639[];
  posters: ImageWithISO639[];
}

interface TVShowKeywords {
  id: number;
  results: {
    id: number;
    name: string;
  }[];
}

interface TVShowRecommendations extends ResultsWithPage<TVShow> {}
interface TVShowReviews extends ResultsWithPage<Review & { id: number }> {}

interface TVShowScreenedTheatrically {
  id: number;
  results: {
    id: number;
    episode_number: number;
    season_number: number;
  }[];
}

interface TVShowSimilar extends ResultsWithPage<TVShow> {}

interface TVShowTranslations {
  id: number;
  translations: {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      name: string;
      overview: string;
      homepage: string;
    };
  }[];
}

interface TVShowVideos {
  id: number;
  results: TVShowVideo[];
}

interface TVShowRate extends ResponseWithCode {}
interface TVShowDeleteRating extends ResponseWithCode {}
interface TVShowLatest extends Omit<TVShowExtended, 'last_episode_to_air' & 'next_episode_to_air'> {}
interface TVShowAiringToday extends ResultsWithPage<TVShow> {}
interface TVShowOnTheAir extends ResultsWithPage<TVShow> {}
interface TVShowPopular extends ResultsWithPage<TVShow> {}
interface TVShowTopRated extends ResultsWithPage<TVShow> {}
