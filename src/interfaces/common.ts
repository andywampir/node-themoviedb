/* eslint-disable camelcase */

// Utilities types
export interface ResponseError {
  status_message: string;
  status_code: number;
}

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
  overview: string | null;
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

export interface MovieExtended extends Movie {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number | null;
  spoken_language: {
    iso_639_1: string;
    name: string;
  }[];
  status:
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';
  tagline: string | null;
}

export interface MovieWithRating extends Movie {
  rating: number;
}

export interface MovieWithMediaType extends Movie {
  media_type: 'movie';
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

export interface TVShowWithMediaType extends TVShow {
  media_type: 'tv';
}

export interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ImageWithISO639 extends Image {
  iso_639_1: string | null;
}

export interface Person {
  profile_path: string | null;
  adult: boolean;
  id: number;
  name: string;
  popularity: number;
  known_for: MovieWithMediaType[] | TVShowWithMediaType[];
}

export interface Review {
  id: string;
  author: string;
  content: string;
  url: string;
}

export interface PeopleCredit {
  id: number;
  original_language: string;
  popularity: number;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  credit_id: string;
  release_date: string;
  adult: boolean;
  video: boolean;
  vote_count: number;
  vote_average: number;
  genre_ids: number[];
}
