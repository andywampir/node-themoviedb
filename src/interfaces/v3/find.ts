/* eslint-disable camelcase */
import {
  Movie, TVShow,
  Person,
} from '../common';

// Options
export interface FindByIDOptions {
  externalID: string;
  externalSource:
  | 'imdb_id'
  | 'freebase_mid'
  | 'freebase_id'
  | 'tvdb_id'
  | 'tvrage_id'
  | 'facebook_id'
  | 'twitter_id'
  | 'instagram_id';
  language?: string;
}

// Return Types
export interface FindReturnType {
  byID?: FindByID[];
}

interface FindByID {
  movie_results: Movie[];
  person_results: Person[];
  tv_results: TVShow[];
  tv_episode_results: unknown[];
  tv_season_results: unknown[];
}
