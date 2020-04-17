/* eslint-disable camelcase */
import {
  ResultsWithPage, MovieWithRating,
  TVShowWithRating,
} from '../common';

// Options
interface CommonParameters {
  guestSessionID?: string;
  language?: string;
  sortBy?:
  | 'created_at.asc'
  | 'created_at.desc';
}

export interface GuestSessionRatedMoviesOptions extends CommonParameters {}
export interface GuestSessionRatedTVShowsOptions extends CommonParameters {}
export interface GuestSessionRatedTVEpisodesOptions extends CommonParameters {}

// Return Types
export interface GuestSessionReturnType {
  ratedMovies?: GuestSessionRatedMovies[];
  ratedTVShows?: GuestSessionRatedTVShows[];
  ratedTVEpisodes?: ResultsWithPage<GuestSessionRatedTVEpisode>[];
}

interface GuestSessionRatedMovies extends ResultsWithPage<MovieWithRating> {}
interface GuestSessionRatedTVShows extends ResultsWithPage<TVShowWithRating> {}

interface GuestSessionRatedTVEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  rating: number;
}
