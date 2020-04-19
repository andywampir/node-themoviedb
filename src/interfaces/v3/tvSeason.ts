/* eslint-disable camelcase */
import {
  TVEpisode, CrewCredit,
  CastCredit, ExternalIDs,
  ImageWithISO639, TVShowVideo,
} from '../common';

// Options
interface CommonParameters {
  tvID?: number;
  seasonNumber?: number;
}

export interface TVSeasonDetailsOptions extends CommonParameters {
  language?: string;
  appendToResponse?: string;
}

export interface TVSeasonChangesOptions extends Omit<CommonParameters, 'tvID'> {
  startDate?: string;
  endDate?: string;
  page?: string;
}

export interface TVSeasonAccountStatesOptions extends CommonParameters {
  language?: string;
  guestSessionID?: string;
  sessinID?: string;
}

export interface TVSeasonCreditsOptions extends CommonParameters {
  language?: string;
}

export interface TVSeasonExternalIDsOptions extends CommonParameters {
  language?: string;
}

export interface TVSeasonImagesOptions extends CommonParameters {
  language?: string;
}

export interface TVSeasonVideosOptions extends CommonParameters {
  language?: string;
}

// Return Types
export interface TVSeasonReturnType {
  details?: TVSeasonDetails[];
  changes?: TVSeasonChanges[];
  accountStates?: TVSeasonAccountStates[];
  credits?: TVSeasonCredits[];
  externalIDs?: TVSeasonExternalIDs[];
  images?: TVSeasonImages[];
  videos?: TVSeasonVideos[];
}

interface TVSeasonDetails {
  _id: string;
  air_date: string;
  episodes: TVEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
  credits?: Omit<TVSeasonCredits, 'id'>;
  external_ids?: Omit<TVSeasonExternalIDs, 'id'>;
  images?: Omit<TVSeasonImages, 'id'>;
  videos?: Omit<TVSeasonVideos, 'id'>;
}

interface TVSeasonChanges {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
      value?: {
        episode_id: number;
        episode_number: number;
      } | string;
      iso_639_1: string;
      original_value?: string;
    }[];
  }[];
}

interface TVSeasonAccountStates {
  id: number;
  results: {
    id: number;
    episode_number: number;
    rated: {
      value: number;
    } | boolean;
  }[];
}

interface TVSeasonCredits {
  id: number;
  crew: CrewCredit[];
  cast: CastCredit[];
}

interface TVSeasonExternalIDs extends Omit<ExternalIDs, 'facebook_id' | 'instagram_id' | 'twitter_id' | 'imdb_id'> {
  id: number;
}

interface TVSeasonImages {
  id: number;
  posters: ImageWithISO639[];
}

interface TVSeasonVideos {
  id: number;
  results: TVShowVideo[];
}
