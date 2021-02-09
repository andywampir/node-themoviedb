import type { IClient } from '../../utils/Client';
import type {
	ResultsWithPage, Movie,
} from '../common';

namespace TrendingEndpointNS {
	export interface Class {
		get(options: Options.Get): Promise<Results.Get>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
		}

		export interface Get {
			mediaType:
			| 'all'
			| 'movie'
			| 'tv'
			| 'person';
			timeWindow:
			| 'day'
			| 'week';
		}
	}

	export namespace Results {
		export type Get = ResultsWithPage<Movie>;
	}
}

export default TrendingEndpointNS;
