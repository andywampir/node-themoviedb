import type { IClient } from '../../utils/client';

namespace ConfigurationEndpointNS {
	export interface Class {
		api(): Promise<Results.Api>;
		countries(): Promise<Results.Countries>;
		jobs(): Promise<Results.Jobs>;
		languages(): Promise<Results.Languages>;
		primaryTranslations(): Promise<Results.PrimaryTranslations>;
		timezones(): Promise<Results.Timezones>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
		}
	}

	export namespace Results {
		export type Api = Types.Api;
		export type Countries = Types.Countries;
		export type Jobs = Types.Jobs;
		export type Languages = Types.Languages;
		export type PrimaryTranslations = string[];
		export type Timezones = Types.Timezones;
	}

	namespace Types {
		export interface Api {
			change_keys: string[];
			images: {
				base_url: string;
				secure_base_url: string;
				backdrop_sizes: string[];
				logo_sizes: string[];
				poster_sizes: string[];
				profile_sizes: string[];
				still_sizes: string[];
			};
		}

		export interface Countries {
			iso_3166_1: string;
			english_name: string;
		}

		export interface Jobs {
			department: string;
			jobs: string[];
		}

		export interface Languages {
			iso_639_1: string;
			english_name: string;
			name: string;
		}

		export interface Timezones {
			iso_3166_1: string;
			zones: string[];
		}
	}
}

export default ConfigurationEndpointNS;
