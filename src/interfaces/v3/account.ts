import type { IClient } from '../../utils/Client';
import type {
	ResultsWithPage, Movie,
	TVShow, ResponseWithCode,
	MovieWithRating, SortOrder,
	MediaType, TVShowWithRating,
} from '../common';

namespace AccountEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		createdLists(options?: Options.CreatedLists): Promise<Results.CreatedLists>;
		favoriteMovies(options?: Options.FavoriteMovies): Promise<Results.FavoriteMovies>;
		favoriteTVShows(options?: Options.FavoriteTVShows): Promise<Results.FavoriteTVShows>;
		markAsFavorite(options: Options.MarkAsFavorite): Promise<Results.MarkAsFavorite>;
		ratedMovies(options?: Options.RatedMovies): Promise<Results.RatedMovies>;
		ratedTVShows(options?: Options.RatedTVShows): Promise<Results.RatedTVShows>;
		ratedTVEpisodes(options?: Options.RatedTVEpisodes): Promise<Results.RatedTVEpisodes>;
		movieWatchlist(options?: Options.MovieWatchlist): Promise<Results.MovieWatchlist>;
		tvShowWatchlist(options?: Options.TVShowWatchlist): Promise<Results.TVShowWatchlist>;
		addToWatchlist(options: Options.AddToWatchlist): Promise<Results.AddToWatchlist>;
	}

	export namespace Options {
		interface Common {
			userID?: number;
			language?: string;
			page?: number;
			sessionID?: string;
		}

		export interface Constructor {
			client: IClient;
			apiKey: string;
			language: string;
			userID?: number;
			sessionID?: string;
		}

		export interface Details {
			sessionID?: string;
		}

		export interface CreatedLists extends Common {}

		export interface FavoriteMovies extends Common {
			sortBy?: SortOrder;
		}

		export interface FavoriteTVShows extends Common {
			sortBy?: SortOrder;
		}

		export interface MarkAsFavorite extends Common {
			sessionID?: string;
			mediaType: MediaType;
			mediaID: number;
			favorite: boolean;
		}

		export interface RatedMovies extends Common {
			sortBy?: SortOrder;
		}

		export interface RatedTVShows extends Common {
			sortBy?: SortOrder;
		}

		export interface RatedTVEpisodes extends Common {
			sortBy?: SortOrder;
		}

		export interface MovieWatchlist extends Common {
			sortBy?: SortOrder;
		}

		export interface TVShowWatchlist extends Common {
			sortBy?: SortOrder;
		}

		export interface AddToWatchlist extends Common {
			sessionID?: string;
			mediaType: MediaType;
			mediaID: number;
			watchlist: boolean;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type CreatedLists = ResultsWithPage<Types.CreatedLists>;
		export type FavoriteMovies = ResultsWithPage<Movie>;
		export type FavoriteTVShows = ResultsWithPage<TVShow>;
		export type MarkAsFavorite = ResponseWithCode;
		export type RatedMovies = ResultsWithPage<MovieWithRating>;
		export type RatedTVShows = ResultsWithPage<TVShowWithRating>;
		export type RatedTVEpisodes = ResultsWithPage<Types.FavoriteTVEpisodes>;
		export type MovieWatchlist = ResultsWithPage<Movie>;
		export type TVShowWatchlist = ResultsWithPage<TVShow>;
		export type AddToWatchlist = ResponseWithCode;
	}

	namespace Types {
		export interface Details {
			avatar: {
				gravatar: {
					hash: string;
				};
			};
			id: number;
			iso_639_1: string;
			iso_3166_1: string;
			name: string;
			include_adult: boolean;
			username: string;
		}

		export interface CreatedLists {
			description: string;
			favorite_count: number;
			id: number;
			item_count: number;
			iso_639_1: string;
			list_type: string;
			name: string;
			poster_path: null;
		}

		export interface FavoriteTVEpisodes {
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
	}
}

export default AccountEndpointNS;
