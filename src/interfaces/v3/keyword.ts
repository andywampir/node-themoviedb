/* eslint-disable camelcase */
import {
  ResultsWithPage, Movie,
} from '../common';

// Options
interface CommonParameters {
  keywordID?: number;
}

export interface KeywordDetailsOptions extends CommonParameters {}
export interface KeywordMoviesOptions extends CommonParameters {
  language?: string;
  includeAdult?: boolean;
}

// Return Types
export interface KeywordReturnType {
  details?: KeywordDetails[];
  movies?: KeywordMovies[];
}

interface KeywordDetails {
  id: number;
  name: string;
}

interface KeywordMovies extends ResultsWithPage<Movie> {
  id: number;
}
