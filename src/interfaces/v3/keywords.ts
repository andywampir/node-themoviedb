/* eslint-disable camelcase */
import {
	ResultsWithPage, Movie,
} from '../common';

// Options
interface CommonParameters {
	keywordID?: number;
}

export interface KeywordsConstructorOptions {
	apiKey: string;
	language: string;
	keywordID?: number;
}

export interface KeywordsDetailsOptions extends CommonParameters {}
export interface KeywordsMoviesOptions extends CommonParameters {
	language?: string;
	includeAdult?: boolean;
}

// Return Types
export interface KeywordsReturnType {
	details?: KeywordsDetails[];
	movies?: KeywordsMovies[];
}

interface KeywordsDetails {
	id: number;
	name: string;
}

interface KeywordsMovies extends ResultsWithPage<Movie> {
	id: number;
}
