/* eslint-disable camelcase */

// Utilities types
export interface ResultsWithPage<TResults> {
  page: number;
  total_pages: number;
  total_results: number;
  results: TResults[];
}

export interface ResponseWithCode {
  status_message: string;
  status_code: number;
}

export type SearchParametrs = Record<string, string | number>;

export type MediaType = 'movie' | 'tv';

export type SortOrder = 'created_at.asc' | 'created_at.desc';

// Object types
export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieWithRating extends Movie {
  rating: number;
}

export interface TVShow {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface TVShowWithRating extends TVShow {
  rating: number;
}
