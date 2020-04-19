/* eslint-disable camelcase */
import {
  PeopleCredit, Image,
  ResultsWithPage, TVShowWithMediaType,
  MovieWithMediaType, ImageWithISO639,
  Person, ExternalIDs,
} from '../common';

// Options
interface CommonParameters {
  personID?: number;
}

export interface PeopleDetailsOptions extends CommonParameters {
  language?: string;
  appendToResponse?: string;
}

export interface PeopleChangesOptions extends CommonParameters {
  endDate?: string;
  startDate?: string;
  page?: number;
}

export interface PeopleMovieCreditsOptions extends CommonParameters {
  language?: string;
}

export interface PeopleTVCreditsOptions extends CommonParameters {
  language?: string;
}

export interface PeopleCombinedCreditsOptions extends CommonParameters {
  language?: string;
}

export interface PeopleExternalIDsOptions extends CommonParameters {
  language?: string;
}

export interface PeopleImagesOptions extends CommonParameters {}

export interface PeopleTaggedImagesOptions extends CommonParameters {
  language?: string;
  page?: number;
}

export interface PeopleTranslationsOptions extends CommonParameters {
  language?: string;
}

export interface PeopleLatestOptions {
  language?: string;
}

export interface PeoplePopularOptions {
  language?: string;
  page?: number;
}

// Return Type
export interface PeopleReturnType {
  details?: PeopleDetails[];
  changes?: PeopleChanges[];
  movieCredits?: PeopleMovieCredits[];
  tvCredits?: PeopleTVCredits[];
  combinedCredits?: PeopleCombinedCredits[];
  externalIDs?: PeopleExternalIDs[];
  images?: PeopleImages[];
  taggedImages?: PeopleTaggedImages[];
  translations?: PeopleTranslations[];
  latest?: PeopleLatest[];
  popular?: PeoplePopular[];
}

interface PeopleDetails {
  birthday: string | null;
  known_for_department?: string;
  deathday: string | null;
  id: number;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string | null;
  profile_path: string | null;
  adult: boolean;
  imdb_id: string;
  homepage: string | null;
  changes?: PeopleChanges;
  movie_credits?: Omit<PeopleMovieCredits, 'id'>;
  tv_credits?: Omit<PeopleTVCredits, 'id'>;
  combined_credits?: Omit<PeopleCombinedCredits, 'id'>;
  external_ids?: Omit<PeopleExternalIDs, 'id'>;
  images?: Omit<PeopleImages, 'id'>;
  tagged_images?: PeopleTaggedImages;
  translations?: Omit<PeopleTranslations, 'id'>;
}

interface PeopleChanges {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
      original_value: {
        profile: {
          file_path: string;
        };
      };
    }[];
  }[];
}

interface PeopleMovieCredits {
  id: number;
  cast: PeopleMovieCreditCast[];
  crew: PeopleMovieCreditCrew[];
}

interface PeopleMovieCreditCast extends PeopleCredit {
  character: string;
  title: string;
  original_title: string;
}

interface PeopleMovieCreditCrew extends PeopleCredit {
  job: string;
  department: string;
  title: string;
  original_title: string;
}

interface PeopleTVCredits {
  id: number;
  cast: PeopleTVCreditCast[];
  crew: PeopleTVCreditCrew[];
}

interface PeopleTVCreditCast extends PeopleCredit {
  character: string;
  original_name: string;
  name: string;
  first_air_date: string;
  episode_count: string;
  origin_country: string[];
}

interface PeopleTVCreditCrew extends PeopleCredit {
  department: string;
  episode_count: string;
  job: string;
  origin_country: string[];
  original_name: string;
  name: string;
  first_air_date: string;
}

interface PeopleCombinedCredits {
  id: number;
  cast: PeopleCombinedCreditCast[];
  crew: PeopleCombinedCreditCrew[];
}

interface PeopleCombinedCreditCast extends PeopleCredit {
  character: string;
  title: string;
  original_title: string;
  episode_count: number;
  original_name: string;
  name: string;
  first_air_date: string;
  origin_country: string[];
}

interface PeopleCombinedCreditCrew extends PeopleCredit {
  department: string;
  episode_count: string;
  job: string;
  origin_country: string[];
  original_name: string;
  name: string;
  first_air_date: string;
  title: string;
  original_title: string;
}

interface PeopleExternalIDs extends ExternalIDs {
  id: number;
}

interface PeopleImages {
  id: number;
  profiles: PeopleImage[];
}

interface PeopleImage extends Image {
  iso_639_1: null;
}

interface PeopleTaggedImages extends ResultsWithPage<PeopleTaggedImage> {
  id: number;
}

interface PeopleTaggedImage extends ImageWithISO639 {
  id: string;
  image_type: string;
  media: TVShowWithMediaType | MovieWithMediaType;
  media_type:
  | 'tv'
  | 'movie';
}

interface PeopleTranslations {
  id: number;
  translations: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    data: {
      biography: string;
    };
    english_name: string;
  }[];
}

interface PeopleLatest extends Omit<Person, 'known_for'> {
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  imdb_id: string | null;
  place_of_birth: string | null;
}

interface PeoplePopular extends ResultsWithPage<Person> {}
