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

export type SearchParametrs = Record<string, string | number | boolean | null | undefined>;
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

export interface MovieExtended extends Omit<Movie, 'genre_ids'> {
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

export interface TVShowExtended extends Omit<TVShow, 'genre_ids'> {
	created_by: {
		id: number;
		credit_id: string;
		name: string;
		gender: number;
		profile_path: string;
	}[];
	episode_run_time: number[];
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: EpisodeToAir;
	next_episode_to_air: EpisodeToAir | null;
	networks: {
		name: string;
		id: number;
		logo_path: string;
		origin_country: string;
	}[];
	number_of_episodes: number;
	number_of_seasons: number;
	production_companies: {
		id: number;
		logo_path: string | null;
		name: string;
		origin_country: string;
	}[];
	seasons: {
		air_date: string;
		episode_count: number;
		id: number;
		name: string;
		overview: string;
		poster_path: string;
		season_number: number;
	}[];
	status: string; // TODO: Define statuses
	type: string; // TODO: Define types
}

export interface EpisodeToAir {
	air_date: string;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: string | null;
	season_number: number;
	show_id: number;
	still_path: string;
	vote_average: number;
	vote_count: number;
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

interface Credit {
	id: number;
	name: string;
	gender: number | null;
	credit_id: string;
	profile_path: string | null;
}

export interface CastCredit extends Credit {
	character: string;
	order: number;
}

export interface CrewCredit extends Credit {
	department: string;
	job: string;
}

interface Video {
	id: string;
	iso_3166_1: string;
	iso_639_1: string;
	key: string;
	name: string;
	site: string;
	size: 360 | 480 | 720 | 1080;
}

export interface MovieVideo extends Video {
	type:
	| 'Trailer'
	| 'Teaser'
	| 'Clip'
	| 'Featurette'
	| 'Behind the Scenes'
	| 'Bloopers';
}

export interface TVShowVideo extends Video {
	type:
	| 'Trailer'
	| 'Teaser'
	| 'Clip'
	| 'Featurette'
	| 'Behind the Scenes'
	| 'Bloopers'
	| 'Opening Credits';
}

export interface TVEpisode {
	air_date: string;
	crew: CrewCredit[];
	episode_number: number;
	guest_stars: CastCredit[];
	name: string;
	overview: string;
	id: number;
	production_code: string | null;
	season_number: number;
	still_path: string | null;
	vote_average: number;
	vote_count: number;
}

export interface ExternalIDs {
	imdb_id: string | null;
	freebase_mid: string | null;
	freebase_id: string | null;
	tvdb_id: number | null;
	tvrage_id: number | null;
	facebook_id: string | null;
	instagram_id: string | null;
	twitter_id: string | null;
}
