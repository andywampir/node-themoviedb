/* eslint-disable camelcase */
import {
	ResultsWithPage, Movie,
} from '../common';

// Options
export interface TrendingGetOptions {
	mediaType:
	| 'all'
	| 'movie'
	| 'tv'
	| 'person';
	timeWindow:
	| 'day'
	| 'week';
}

// Return Types
export interface TrendingReturnType {
	get?: TrendingGet[];
}

interface TrendingGet extends ResultsWithPage<Movie> {}
