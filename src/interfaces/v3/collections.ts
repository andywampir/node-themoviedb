import type { IClient } from '../../utils/Client';
import type { Image } from '../common';

namespace CollectionsEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		images(options?: Options.Images): Promise<Results.Images>;
		translations(options?: Options.Translations): Promise<Results.Translations>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			language: string;
			client: IClient;
			collectionID?: number;
		}

		export interface Details {
			collectionID?: number;
			language?: string;
		}

		export interface Images extends Details {}

		export interface Translations extends Details {}
	}

	export namespace Results {
		export type Details = Types.Details[];
		export type Images = Types.Images[];
		export type Translations = Types.Translations[];
	}

	namespace Types {
		export interface Details {
			id: number;
			name: string;
			overview: string;
			poster_path: null;
			backdrop_path: string;
			parts: DetailsPart[];
		}

		interface DetailsPart {
			adult: boolean;
			backdrop_path: null;
			genre_ids: number[];
			id: number;
			original_language: string;
			original_title: string;
			overview: string;
			release_date: string;
			poster_path: string;
			popularity: number;
			title: string;
			video: boolean;
			vote_average: number;
			vote_count: number;
		}

		export interface Images {
			id: number;
			backdrops: CollectionsImage<null>[];
			posters: CollectionsImage<string>[];
		}

		interface CollectionsImage<ISOType> extends Image {
			iso_639_1: ISOType;
		}

		export interface Translations {
			id: number;
			translations: Translation[];
		}

		interface Translation {
			iso_3166_1: string;
			iso_639_1: string;
			name: string;
			english_name: string;
			data: {
				title: string;
				overview: string;
				homepage: string;
			};
		}
	}
}

export default CollectionsEndpointNS;
