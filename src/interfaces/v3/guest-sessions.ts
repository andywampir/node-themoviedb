import type { IClient } from '../../utils/client';
import type {
	ResultsWithPage, MovieWithRating,
	TVShowWithRating,
} from '../common';

namespace GuestSessionEndpointNS {
	export interface Class {
		ratedMovies(options?: Options.RatedMovies): Promise<Results.RatedMovies>;
		ratedTVShows(options?: Options.RatedTVShows): Promise<Results.RatedTVShows>;
		ratedTVEpisodes(options?: Options.RatedTVEpisodes): Promise<Results.RatedTVEpisodes>;
	}

	export namespace Options {
		export interface Constructor {
			language: string;
			client: IClient;
			guestSessionID?: string;
		}

		export interface RatedMovies {
			guestSessionID?: string;
			language?: string;
			sortBy?:
			| 'created_at.asc'
			| 'created_at.desc';
		}

		export interface RatedTVShows extends RatedMovies {}

		export interface RatedTVEpisodes extends RatedMovies {}
	}

	export namespace Results {
		export type RatedMovies = ResultsWithPage<MovieWithRating>;
		export type RatedTVShows = ResultsWithPage<TVShowWithRating>;
		export type RatedTVEpisodes = ResultsWithPage<Types.RatedTVEpisodes>;
	}

	namespace Types {
		export interface RatedTVEpisodes {
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

export default GuestSessionEndpointNS;
