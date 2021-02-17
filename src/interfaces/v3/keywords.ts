import type { IClient } from '../../utils/Client';
import type {
	ResultsWithPage, Movie,
} from '../common';

namespace KeywordsEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		movies(options?: Options.Movies): Promise<Results.Movies>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			language: string;
			client: IClient;
			keywordID?: number;
		}

		export interface Details {
			keywordID?: number;
		}

		export interface Movies extends Details {
			language?: string;
			includeAdult?: boolean;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type Movies = Types.Movies;
	}

	namespace Types {
		export interface Details {
			id: number;
			name: string;
		}

		export interface Movies extends ResultsWithPage<Movie> {
			id: number;
		}
	}
}

export default KeywordsEndpointNS;
