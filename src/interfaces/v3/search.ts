/* eslint-disable camelcase */
import {
  ResultsWithPage, Movie,
  TVShow, Person,
} from '../common';

// Options
interface CommonParameters {
  query: string;
  page?: number;
}

export interface SearchCompaniesOptions extends CommonParameters {}

export interface SearchCollectionsOptions extends CommonParameters {
  language?: string;
}

export interface SearchKeywordsOptions extends CommonParameters {}

export interface SearchMoviesOptions extends CommonParameters {
  language?: string;
  includeAdult?: boolean;
  region?: string;
  year?: number;
  primaryReleaseYear?: number;
}

export interface SearchMultiOptions extends CommonParameters {
  language?: string;
  includeAdult?: boolean;
  region?: string;
}

export interface SearchPeopleOptions extends CommonParameters {
  language?: string;
  includeAdult?: boolean;
  region?: string;
}

export interface SearchTVShowOptions extends CommonParameters {
  language?: string;
  includeAdult?: boolean;
  firstAirDateYear?: number;
}

// Return Types
export interface SearchReturnType {
  companies?: SearchCompanies[];
  collections?: SearchCollections[];
  keywords?: SearchKeywords[];
  movies?: SearchMovies[];
  multi?: SearchMulti[];
  people?: SearchPeople[];
  tvShows?: SearchTVShow[];
}

interface SearchCompanies extends ResultsWithPage<SearchCompany> {}

interface SearchCompany {
  id: number;
  logo_path: string | null;
  name: string;
}

interface SearchCollections extends ResultsWithPage<SearchCollection> {}

interface SearchCollection {
  id: number;
  backdrop_path: string | null;
  name: string;
  poster_path: string | null;
}

interface SearchKeywords extends ResultsWithPage<SearchKeyword> {}

interface SearchKeyword {
  id: number;
  name: string;
}

interface SearchMovies extends ResultsWithPage<Movie> {}
interface SearchMulti extends ResultsWithPage<Movie | TVShow | Person> {}
interface SearchPeople extends ResultsWithPage<Person> {}
interface SearchTVShow extends ResultsWithPage<TVShow> {}
