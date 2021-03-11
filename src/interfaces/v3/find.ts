import type { IClient } from '../../utils/Client';
import type {
	Movie, TVShow,
	Person,
} from '../common';

namespace FindEndpointNS {
	export interface Class {
		byID(options: Options.ByID): Promise<Results.ByID>;
	}

	export namespace Options {
		export interface Constructor {
			language: string;
			client: IClient;
		}

		export interface ByID {
			externalID: string;
			externalSource:
			| 'imdb_id'
			| 'freebase_mid'
			| 'freebase_id'
			| 'tvdb_id'
			| 'tvrage_id'
			| 'facebook_id'
			| 'twitter_id'
			| 'instagram_id';
			language?: string;
		}
	}

	export namespace Results {
		export type ByID = Types.ByID;
	}

	namespace Types {
		export interface ByID {
			movie_results: Movie[];
			person_results: Person[];
			tv_results: TVShow[];
			tv_episode_results: unknown[];
			tv_season_results: unknown[];
		}
	}
}

export default FindEndpointNS;
