/* eslint-disable camelcase */
import {
  TVEpisode, CastCredit,
  CrewCredit, ExternalIDs,
  ImageWithISO639, ResponseWithCode,
  TVShowVideo,
} from '../common';

// Options
interface CommonParameters {
  tvID?: number;
  seasonNumber?: number;
  episodeNumber?: number;
}

export interface TVEpisodeDetailsOptions extends CommonParameters {
  language?: string;
  appendToResponse?: string;
}

export interface TVEpisodeChangesOptions {
  episodeID?: number;
}

export interface TVEpisodeAccountStatesOptions extends CommonParameters {
  guestSessionID?: string;
  sessionID?: string;
}

export interface TVEpisodeCreditsOptions extends CommonParameters {}
export interface TVEpisodeExternalIDsOptions extends CommonParameters {}
export interface TVEpisodeImagesOptions extends CommonParameters {}
export interface TVEpisodeTranslationsOptions extends CommonParameters {}

export interface TVEpisodeRateOptions extends CommonParameters {
  guestSessionID?: string;
  sessionID?: string;
}

export interface TVEpisodeDeleteRatingOptions extends CommonParameters {
  guestSessionID?: string;
  sessionID?: string;
}

export interface TVEpisodeVideosOptions extends CommonParameters {
  language?: string;
}

// Return Types
export interface TVEpisodeReturnType {
  details?: TVEpisodeDetails[];
  changes?: TVEpisodeChanges[];
  accountStates?: TVEpisodeAccountStates[];
  credits?: TVEpisodeCredits[];
  externalIDs?: TVEpisodeExternalIDs[];
  images?: TVEpisodeImages[];
  translations?: TVEpisodeTranslations[];
  rate?: TVEpisodeRate[];
  deleteRating?: TVEpisodeDeleteRating[];
  videos?: TVEpisodeVideos[];
}

interface TVEpisodeDetails extends TVEpisode {
  credits?: Omit<TVEpisodeCredits, 'id'>;
  external_ids?: Omit<TVEpisodeExternalIDs, 'id'>;
  images?: Omit<TVEpisodeImages, 'id'>;
  translations?: Omit<TVEpisodeTranslations, 'id'>;
  videos?: Omit<TVEpisodeVideos, 'id'>;
}

interface TVEpisodeChanges {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
      value: string;
      iso_639_1: string;
    }[];
  }[];
}

interface TVEpisodeAccountStates {
  id: number;
  rated: { value: number } | boolean;
}

interface TVEpisodeCredits {
  id: number;
  cast: CastCredit[];
  crew: CrewCredit[];
  guest_stars: CastCredit[];
}

interface TVEpisodeExternalIDs extends Omit<ExternalIDs, 'twitter_id' | 'facebook_id' | 'instagram_id'> {
  id: number;
}

interface TVEpisodeImages {
  id: number;
  stills: ImageWithISO639[];
}

interface TVEpisodeTranslations {
  id: number;
  translations: {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      name: string;
      overview: string;
    };
  }[];
}

interface TVEpisodeRate extends ResponseWithCode {}
interface TVEpisodeDeleteRating extends ResponseWithCode {}

interface TVEpisodeVideos {
  id: number;
  results: TVShowVideo[];
}
