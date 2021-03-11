import type { IClient } from '../../utils/Client';
import type {
	ResultsWithPage, Movie,
	TVShow,
} from '../common';

namespace AccountEndpointNS {
	export interface Class {
		lists(options?: Options.Lists): Promise<Results.Lists>;
		favoriteMovies(options?: Options.FavoriteMovies): Promise<Results.FavoriteMovies>;
		favoriteTVShows(options?: Options.FavoriteTVShows): Promise<Results.FavoriteTVShows>;
		movieRecommendations(options?: Options.MovieRecommendations): Promise<Results.MovieRecommendations>;
		tvShowRecommendations(options?: Options.TVShowRecommendations): Promise<Results.TVShowRecommendations>;
		movieWatchlist(options?: Options.MovieWatchlist): Promise<Results.MovieWatchlist>;
		tvShowWatchlist(options?: Options.TVShowWatchlist): Promise<Results.TVShowWatchlist>;
		ratedMovies(options?: Options.RatedMovies): Promise<Results.FavoriteMovies>;
		ratedTVShows(options?: Options.RatedTVShows): Promise<Results.RatedTVShows>;
	}

	export namespace Options {
		interface Common {
			accountID?: string;
			page?: number;
		}

		type MovieSortBy =
			| 'created_at.asc'
			| 'created_at.desc'
			| 'release_date.asc'
			| 'release_date.desc'
			| 'title.asc'
			| 'title.desc'
			| 'vote_average.asc'
			| 'vote_average.desc';

		type TVShowSortBy =
			| 'first_air_date.asc'
			| 'first_air_date.desc'
			| 'name.asc'
			| 'name.desc'
			| 'vote_average.asc'
			| 'vote_average.desc';

		export interface Constructor {
			client: IClient;
			accountID?: string;
		}

		export interface Lists extends Common {}

		export interface FavoriteMovies extends Common {
			sortBy?: MovieSortBy;
		}

		export interface FavoriteTVShows extends Common {
			sortBy?: TVShowSortBy;
		}

		export interface MovieRecommendations extends Common {
			sortBy?: MovieSortBy;
		}

		export interface TVShowRecommendations extends Common {
			sortBy?:
				| TVShowSortBy
				| 'release_date.asc'
				| 'release_date.desc'
				| 'title.asc'
				| 'title.desc';
		}

		export interface MovieWatchlist extends Common {
			sortBy?: MovieSortBy;
		}

		export interface TVShowWatchlist extends Common {
			sortBy?: TVShowSortBy;
		}

		export interface RatedMovies extends Common {
			sortBy?: MovieSortBy;
		}

		export interface RatedTVShows extends Common {
			sortBy?: TVShowSortBy;
		}
	}

	export namespace Results {
		export type Lists = ResultsWithPage<Types.List>;
		export type FavoriteMovies = ResultsWithPage<Movie>;
		export type FavoriteTVShows = ResultsWithPage<TVShow>;
		export type MovieRecommendations = ResultsWithPage<Movie>;
		export type TVShowRecommendations = ResultsWithPage<TVShow>;
		export type MovieWatchlist = ResultsWithPage<Movie>;
		export type TVShowWatchlist = ResultsWithPage<TVShow>;
		export type RatedMovies = ResultsWithPage<Types.RatedMovie>;
		export type RatedTVShows = ResultsWithPage<Types.RatedTVShow>;
	}

	namespace Types {
		export interface List {
			iso_639_1: string;
			id: number;
			featured: number;
			description: string;
			revenue: string;
			public: number;
			name: string;
			updated_at: string;
			created_at: string;
			sort_by: number;
			backdrop_path: string;
			runtime: number;
			average_rating: number;
			iso_3166_1: string;
			adult: number;
			number_of_items: number;
			poster_path: string;
		}

		export interface RatedMovie extends Movie {
			account_rating: {
				value: number;
				created_at: string;
			};
		}

		export interface RatedTVShow extends TVShow {
			account_rating: {
				value: number;
				created_at: string;
			};
		}
	}
}

export default AccountEndpointNS;
