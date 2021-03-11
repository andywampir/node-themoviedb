import type { IClient } from '../../utils/Client';
import type {
	TVEpisode, CrewCredit,
	CastCredit, ExternalIDs as IExternalIDs,
	ImageWithISO639, TVShowVideo,
	TVTranslationWithoutHomepage,
} from '../common';

namespace TVSeasonsEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		changes(options: Options.Changes): Promise<Results.Changes>;
		accountStates(options?: Options.AccountStates): Promise<Results.AccountStates>;
		credits(options?: Options.Credits): Promise<Results.Credits>;
		externalIDs(options?: Options.ExternalIDs): Promise<Results.ExternalIDs>;
		images(options?: Options.Images): Promise<Results.Images>;
		translations(options?: Options.Translations): Promise<Results.Translations>;
		videos(options?: Options.Videos): Promise<Results.Videos>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
			language: string;
			tvID?: number;
			seasonNumber?: number;
		}

		interface Common {
			tvID?: number;
			seasonNumber?: number;
			language?: string;
		}

		export interface Details extends Common {
			appendToResponse?: string;
		}

		export interface Changes extends Omit<Common, 'tvID' | 'language' | 'seasonNumber'> {
			seasonID: number;
			startDate?: string;
			endDate?: string;
			page?: string;
		}

		export interface AccountStates extends Common {
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface Credits extends Common {}

		export interface ExternalIDs extends Common {}

		export interface Images extends Common {}

		export interface Translations extends Common {}

		export interface Videos extends Common {}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type Changes = Types.Changes;
		export type AccountStates = Types.AccountStates;
		export type Credits = Types.Credits;
		export type ExternalIDs = Types.ExternalIDs;
		export type Images = Types.Images;
		export type Translations = Types.Translations;
		export type Videos = Types.Videos;
	}

	namespace Types {
		export interface Details {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			_id: string;
			air_date: string;
			episodes: TVEpisode[];
			name: string;
			overview: string;
			id: number;
			poster_path: string | null;
			season_number: number;
			credits?: Omit<Credits, 'id'>;
			external_ids?: Omit<ExternalIDs, 'id'>;
			images?: Omit<Images, 'id'>;
			videos?: Omit<Videos, 'id'>;
		}

		export interface Changes {
			changes: {
				key: string;
				items: {
					id: string;
					action: string;
					time: string;
					value?: {
						episode_id: number;
						episode_number: number;
					} | string;
					iso_639_1: string;
					original_value?: string;
				}[];
			}[];
		}

		export interface AccountStates {
			id: number;
			results: {
				id: number;
				episode_number: number;
				rated: {
					value: number;
				} | boolean;
			}[];
		}

		export interface Credits {
			id: number;
			crew: CrewCredit[];
			cast: CastCredit[];
		}

		export interface ExternalIDs
			extends Omit<IExternalIDs, 'facebook_id' | 'instagram_id' | 'twitter_id' | 'imdb_id'> {
			id: number;
		}

		export interface Images {
			id: number;
			posters: ImageWithISO639[];
		}

		export interface Translations {
			id: number;
			translations: TVTranslationWithoutHomepage[];
		}

		export interface Videos {
			id: number;
			results: TVShowVideo[];
		}
	}
}

export default TVSeasonsEndpointNS;
