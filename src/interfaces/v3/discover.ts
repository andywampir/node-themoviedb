import type { IClient } from '../../utils/client';
import type {
	ResultsWithPage, Movie as IMovie,
	TVShow,
} from '../common';

namespace DiscoverEndpointNS {
	export interface Class {
		movie(options?: Options.Movie): Promise<Results.Movie>;
		tv(options?: Options.TV): Promise<Results.TV>;
	}

	export namespace Options {
		export interface Constructor {
			language: string;
			client: IClient;
		}

		type CommonSortBy =
			| 'popularity.asc'
			| 'popularity.desc'
			| 'vote_average.asc'
			| 'vote_average.desc';

		interface CommonOptions<TSortBy> {
			language?: string;
			sortBy?: TSortBy;
			page?: number;
			voteCountGTE?: number;
			voteAverageGTE?: number;
			withGenres?: string;
			withRuntimeLTE?: number;
			withRuntimeGTE?: number;
			withOriginalLanguage?: string;
			withCompanies?: string;
			withKeywords?: string;
			withoutKeywords?: string;
			withoutGenres?: string;
		}

		type MovieSortBy =
			| CommonSortBy
			| 'release_date.asc'
			| 'release_date.desc'
			| 'revenue.asc'
			| 'revenue.desc'
			| 'primary_release_date.asc'
			| 'primary_release_date.desc'
			| 'original_title.asc'
			| 'original_title.desc'
			| 'vote_count.asc'
			| 'vote_count.desc';

		export interface Movie extends CommonOptions<MovieSortBy> {
			region?: string;
			certificationCountry?: string;
			certification?: string;
			certificationLTE?: string;
			certificationGTE?: string;
			includeAdult?: boolean;
			includeVideo?: boolean;
			primaryReleaseYear?: number;
			primaryReleaseDateLTE?: string;
			primaryReleaseDateGTE?: string;
			releaseDateLTE?: string;
			releaseDateGTE?: string;
			withReleaseType?: string;
			year?: number;
			voteCountLTE?: number;
			voteAverageLTE?: number;
			withCast?: string;
			withCrew?: string;
			withPeople?: string;
		}

		type TVSortBy =
			| CommonSortBy
			| 'first_air_date.asc'
			| 'first_air_date.desc';

		export interface TV extends CommonOptions<TVSortBy> {
			airDateLTE?: string;
			airDateGTE?: string;
			firstAirDateLTE?: string;
			firstAirDateGTE?: string;
			firstAirDateYear?: number;
			timezone?: string;
			withNetworks?: string;
			includeNullFirstAirDates?: boolean;
			screenedTheatrically?: boolean;
		}
	}

	export namespace Results {
		export type Movie = Types.Movie;
		export type TV = Types.TV;
	}

	namespace Types {
		export interface Movie extends ResultsWithPage<IMovie> {}

		export interface TV extends ResultsWithPage<TVShow> {}
	}
}

export default DiscoverEndpointNS;
