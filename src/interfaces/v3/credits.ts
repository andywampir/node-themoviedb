import type { IClient } from '../../utils/client';

namespace CreditsEndpointNS {
	export interface Class {
		details(creditID?: number): Promise<Results.Details>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
			creditID?: string;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
	}

	namespace Types {
		export interface Details {
			credit_type: string;
			department: string;
			job: string;
			media: {
				id: number;
				name: string;
				original_name: string;
				character: string;
				episodes: unknown[];
				seasons: {
					air_date: string;
					poster_path: string;
					season_number: number;
				}[];
			};
			media_type: string;
			id: string;
			person: {
				name: string;
				id: number;
			};
		}
	}
}

export default CreditsEndpointNS;
