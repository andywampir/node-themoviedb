import type { IClient } from '../../utils/Client';
import type {
	ResultsWithPage, Movie,
	TVShow as ITVShow, Person,
} from '../common';

namespace SearchEndpointNS {
	export interface Class {
		companies(options: Options.Companies): Promise<Results.Companies>;
		collections(options: Options.Collections): Promise<Results.Collections>;
		keywords(options: Options.Keywords): Promise<Results.Keywords>;
		movies(options: Options.Movies): Promise<Results.Movies>;
		multi(options: Options.Multi): Promise<Results.Multi>;
		people(options: Options.People): Promise<Results.People>;
		tvShows(options: Options.TVShow): Promise<Results.TVShows>;
	}

	export namespace Options {
		export interface Constructor {
			language: string;
			client: IClient;
		}

		interface Common {
			query: string;
			page?: number;
		}

		export interface Companies extends Common {}

		export interface Collections extends Common {
			language?: string;
		}

		export interface Keywords extends Common {}

		export interface Movies extends Common {
			language?: string;
			includeAdult?: boolean;
			region?: string;
			year?: number;
			primaryReleaseYear?: number;
		}

		export interface Multi extends Common {
			language?: string;
			includeAdult?: boolean;
			region?: string;
		}

		export interface People extends Common {
			language?: string;
			includeAdult?: boolean;
			region?: string;
		}

		export interface TVShow extends Common {
			language?: string;
			includeAdult?: boolean;
			firstAirDateYear?: number;
		}
	}

	export namespace Results {
		export type Companies = Types.Companies;
		export type Collections = Types.Collections;
		export type Keywords = Types.Keywords;
		export type Movies = ResultsWithPage<Movie>;
		export type Multi = ResultsWithPage<Movie | ITVShow | Person>;
		export type People = ResultsWithPage<Person>;
		export type TVShows = ResultsWithPage<ITVShow>;
	}

	namespace Types {
		interface Company {
			id: number;
			logo_path: string | null;
			name: string;
		}

		export interface Companies extends ResultsWithPage<Company> {}

		interface Collection {
			id: number;
			backdrop_path: string | null;
			name: string;
			poster_path: string | null;
		}

		export interface Collections extends ResultsWithPage<Collection> {}

		interface Keyword {
			id: number;
			name: string;
		}

		export interface Keywords extends ResultsWithPage<Keyword> {}
	}
}

export default SearchEndpointNS;
