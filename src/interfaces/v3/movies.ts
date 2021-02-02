/* eslint-disable camelcase */
import {
	ImageWithISO639, Movie,
	ResultsWithPage, Review,
	ResponseWithCode, MovieExtended,
	CrewCredit, CastCredit,
	MovieVideo, ExternalIDs,
} from '../common';

// Options
interface CommonParameters {
	movieID?: number;
}

export interface MoviesConstructorOptions {
	apiKey: string;
	language: string;
	movieID?: number;
}

export interface MoviesDetailsOptions extends CommonParameters {
	language?: string;
	appendToResponse?: string;
}

export interface MoviesAccountStatesOptions extends CommonParameters {
	sessionID?: string;
	guestSessionID?: string;
}

export interface MoviesAlternativeTitlesOptions extends CommonParameters {
	country?: string;
}

export interface MoviesChangesOptions extends CommonParameters {
	startDate?: string;
	endDate?: string;
	page?: number;
}

export interface MoviesCreditsOptions extends CommonParameters {}
export interface MoviesExternalIDsOptions extends CommonParameters {}

export interface MoviesImagesOptions extends CommonParameters {
	language?: string;
	includeImageLanguage?: string;
}

export interface MoviesKeywordsOptions extends CommonParameters {}
export interface MoviesReleaseDatesOptions extends CommonParameters {}

export interface MoviesVideosOptions extends CommonParameters {
	language?: string;
}

export interface MoviesTranslationsOptions extends CommonParameters {}

export interface MoviesRecommendationsOptions extends CommonParameters {
	language?: string;
	page?: number;
}

export interface MoviesSimilarOptions extends CommonParameters {
	language?: string;
	page?: number;
}

export interface MoviesReviewsOptions extends CommonParameters {
	language?: string;
	page?: number;
}

export interface MoviesListsOptions extends CommonParameters {
	language?: string;
	page?: number;
}

export interface MoviesRateOptions extends CommonParameters {
	sessionID?: string;
	guestSessionID?: string;
	value: number;
}

export interface MoviesDeleteRatingOptions extends CommonParameters {
	sessionID?: string;
	guestSessionID?: string;
}

export interface MoviesLatestOptions {
	language?: string;
}

export interface MoviesNowPlayingOptions {
	language?: string;
	page?: number;
	region?: string;
}

export interface MoviesPopularOptions {
	language?: string;
	page?: number;
	region?: string;
}

export interface MoviesTopRatedOptions {
	language?: string;
	page?: number;
	region?: string;
}

export interface MoviesUpcomingOptions {
	language?: string;
	page?: number;
	region?: string;
}

// Return Types
export interface MoviesReturnType {
	details?: MoviesDetails[];
	accountState?: MoviesAccountStates[];
	alternativeTitles?: MoviesAlternativeTitles[];
	changes?: MoviesChanges[];
	credits?: MoviesCredits[];
	externalIDs?: MoviesExternalIDs[];
	images?: MoviesImages[];
	keywords?: MoviesKeywords[];
	releaseDates?: MoviesReleaseDates[];
	videos?: MoviesVideos[];
	translations?: MoviesTranslations[];
	recommendations?: MoviesRecommendations[];
	similar?: MoviesSimilar[];
	reviews?: MoviesReviews[];
	lists?: MoviesLists[];
	rate?: MoviesRate[];
	deleteRating?: MoviesDeleteRating[];
	latest?: MoviesLatest[];
	nowPlaying?: MoviesNowPlaying[];
	popular?: MoviesPopular[];
	topRated?: MoviesTopRated[];
	upcoming?: MoviesUpcoming[];
}

interface MoviesDetails extends MovieExtended {
	alternative_titles?: Omit<MoviesAlternativeTitles, 'id'>;
	changes?: MoviesChanges;
	credits?: Omit<MoviesCredits, 'id'>;
	external_ids?: Omit<MoviesExternalIDs, 'id'>;
	images?: Omit<MoviesImages, 'id'>;
	keywords?: Omit<MoviesKeywords, 'id'>;
	release_dates?: Omit<MoviesReleaseDates, 'id'>;
	videos?: Omit<MoviesVideos, 'id'>;
	translations?: Omit<MoviesTranslations, 'id'>;
	recommendations?: MoviesRecommendations;
	similar?: MoviesSimilar;
	reviews?: Omit<MoviesReviews, 'id' >;
	lists?: Omit<MoviesLists, 'id'>;
}

interface MoviesAccountStates {
	id: number;
	favorite: boolean;
	rated: {
		value: number;
	} | boolean;
	watchlist: boolean;
}

interface MoviesAlternativeTitles {
	id: number;
	titles: {
		iso_3166_1: string;
		title: string;
		type: string;
	}[];
}

interface MoviesChanges {
	changes: {
		key: string;
		items: {
			id: string;
			action: string;
			time: string;
			iso_3166_1: string;
			value: string;
			original_value: string;
		}[];
	}[];
}

interface MoviesCredits {
	id: number;
	cast: CastCredit & { cast_id: number }[];
	crew: CrewCredit[];
}

interface MoviesExternalIDs extends Omit<ExternalIDs, 'freebase_mid' | 'freebase_id' | 'tvdb_id' | 'tvrage_id'> {
	id: number;
}

interface MoviesImages {
	id: number;
	backdrops: ImageWithISO639[];
	posters: ImageWithISO639[];
}

interface MoviesKeywords {
	id: number;
	keywords: {
		id: number;
		name: string;
	}[];
}

interface MoviesReleaseDates {
	id: number;
	results: {
		iso_3166_1: string;
		release_dates: {
			certification: string;
			iso_639_1: string;
			release_date: string;
			type: number;
			note: string;
		}[];
	}[];
}

interface MoviesVideos {
	id: number;
	results: MovieVideo[];
}

interface MoviesTranslations {
	id: number;
	translations: {
		iso_639_1: string;
		iso_3166_1: string;
		name: string;
		english_name: string;
		data: {
			title: string;
			overview: string;
			homepage: string;
		};
	}[];
}

interface MoviesRecommendations extends ResultsWithPage<Movie> {}
interface MoviesSimilar extends ResultsWithPage<Movie> {}

interface MoviesReviews extends ResultsWithPage<Review> {
	id: number;
}

interface MoviesLists extends ResultsWithPage<MoviesList> {
	id: number;
}

interface MoviesList {
	description: string;
	favorite_count: number;
	id: number;
	item_count: number;
	iso_639_1: string;
	list_type: string;
	name: string;
	poster_path: string | null;
}

interface MoviesRate extends ResponseWithCode {}
interface MoviesDeleteRating extends ResponseWithCode {}
interface MoviesLatest extends MovieExtended {}

interface MoviesNowPlaying extends ResultsWithPage<Movie> {
	dates: {
		maximum: string;
		minimum: string;
	};
}

interface MoviesPopular extends ResultsWithPage<Movie> {}
interface MoviesTopRated extends ResultsWithPage<Movie> {}

interface MoviesUpcoming extends ResultsWithPage<Movie> {
	dates: {
		maximum: string;
		minimum: string;
	};
}
