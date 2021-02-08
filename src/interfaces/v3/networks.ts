import type { IClient } from '../../utils/Client';

namespace NetworksEndpointNS {
	export interface Class {
		details(networkID?: number): Promise<Results.Details>;
		alternativeNames(networkID?: number): Promise<Results.AlternativeNames>;
		images(networkID?: number): Promise<Results.Images>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
			networkID?: number;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type AlternativeNames = Types.AlternativeNames;
		export type Images = Types.Images;
	}

	namespace Types {
		export interface Details {
			headquarters: string;
			homepage: string;
			id: number;
			name: string;
			origin_country: string;
		}

		export interface AlternativeNames {
			id: number;
			results: {
				name: string;
				type: string;
			}[];
		}

		export interface Images {
			id: number;
			logos: {
				aspect_ratio: number;
				file_path: string;
				height: number;
				id: string;
				file_type: '.svg' | '.png';
				vote_average: number;
				vote_count: number;
				width: number;
			}[];
		}
	}
}

export default NetworksEndpointNS;
