import type { IClient } from '../../utils/Client';
import type { EpisodeToAir } from '../common';

namespace TVEpisodeGroupsEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
	}

	export namespace Options {
		export interface Constructor {
			language: string;
			client: IClient;
			id?: string;
		}

		export interface Details {
			id?: string;
			language?: string;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
	}

	namespace Types {
		interface Episode extends EpisodeToAir {
			order: number;
		}

		export interface Details {
			id: string;
			name: string;
			description: string;
			episode_count: number;
			group_count: number;
			groups: {
				id: string;
				name: string;
				order: number;
				locked: boolean;
				episodes: Episode[];
			}[];
			network: {
				id: number;
				logo_path: string | null;
				name: string;
				origin_country: string;
			};
			type: number;
		}
	}
}

export default TVEpisodeGroupsEndpointNS;
