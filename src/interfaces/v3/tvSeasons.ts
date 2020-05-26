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

export interface TVSeasonsDetailsOptions extends CommonParameters {
  language?: string;
  appendToResponse?: string;
}

export interface TVSeasonsChangesOptions extends Omit<CommonParameters, 'tvID'> {
  startDate?: string;
  endDate?: string;
  page?: string;
}

export interface TVSeasonsAccountStatesOptions extends CommonParameters {
  language?: string;
  guestSessionID?: string;
  sessinID?: string;
}

export interface TVSeasonsCreditsOptions extends CommonParameters {
  language?: string;
}

export interface TVSeasonsExternalIDsOptions extends CommonParameters {
  language?: string;
}

export interface TVSeasonsImagesOptions extends CommonParameters {
  language?: string;
}

export interface TVSeasonsVideosOptions extends CommonParameters {
  language?: string;
}

// Return Types
export interface TVSeasonsReturnType {
  details?: TVSeasonsDetails[];
  changes?: TVSeasonsChanges[];
  accountStates?: TVSeasonsAccountStates[];
  credits?: TVSeasonsCredits[];
  externalIDs?: TVSeasonsExternalIDs[];
  images?: TVSeasonsImages[];
  videos?: TVSeasonsVideos[];
}

interface TVSeasonsDetails {
  _id: string;
  air_date: string;
  episodes: TVEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
  credits?: Omit<TVSeasonsCredits, 'id'>;
  external_ids?: Omit<TVSeasonsExternalIDs, 'id'>;
  images?: Omit<TVSeasonsImages, 'id'>;
  videos?: Omit<TVSeasonsVideos, 'id'>;
}

interface TVSeasonsChanges {
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

interface TVSeasonsAccountStates {
  id: number;
  results: {
    id: number;
    episode_number: number;
    rated: {
      value: number;
    } | boolean;
  }[];
}

interface TVSeasonsCredits {
  id: number;
  crew: CrewCredit[];
  cast: CastCredit[];
}

interface TVSeasonsExternalIDs extends Omit<ExternalIDs, 'facebook_id' | 'instagram_id' | 'twitter_id' | 'imdb_id'> {
  id: number;
}

interface TVSeasonsImages {
  id: number;
  posters: ImageWithISO639[];
}

interface TVSeasonsVideos {
  id: number;
  results: TVShowVideo[];
}
