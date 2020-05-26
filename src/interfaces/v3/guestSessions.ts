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

export interface GuestSessionsRatedMoviesOptions extends CommonParameters {}
export interface GuestSessionsRatedTVShowsOptions extends CommonParameters {}
export interface GuestSessionsRatedTVEpisodesOptions extends CommonParameters {}

// Return Types
export interface GuestSessionsReturnType {
  ratedMovies?: GuestSessionsRatedMovies[];
  ratedTVShows?: GuestSessionsRatedTVShows[];
  ratedTVEpisodes?: ResultsWithPage<GuestSessionsRatedTVEpisode>[];
}

interface GuestSessionsRatedMovies extends ResultsWithPage<MovieWithRating> {}
interface GuestSessionsRatedTVShows extends ResultsWithPage<TVShowWithRating> {}

interface GuestSessionsRatedTVEpisode {
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
