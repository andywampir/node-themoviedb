import type { IClient } from '../../utils/client';
import type { Image } from '../common';

namespace CompaniesEndpointNS {
	export interface Class {
		details(companyID?: number): Promise<Results.Details>;
		alternativeNames(companyID?: number): Promise<Results.AlternativeNames>;
		images(companyID?: number): Promise<Results.Images>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
			companyID?: number;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type AlternativeNames = Types.AlternativeNames;
		export type Images = Types.Images;
	}

	namespace Types {
		export interface Details {
			description: string;
			headquarters: string;
			homepage: string;
			id: number;
			logo_path: string;
			name: string;
			origin_country: string;
			parent_company: Details;
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
			logos: Logo[];
		}

		interface Logo extends Image {
			id: string;
			file_type: '.svg' | '.png';
		}
	}
}

export default CompaniesEndpointNS;
