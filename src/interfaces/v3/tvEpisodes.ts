import type { IClient } from '../../utils/Client';
import type {
	TVEpisode, CastCredit,
	CrewCredit, ExternalIDs as IExternalIDs,
	ImageWithISO639, ResponseWithCode,
	TVShowVideo,
} from '../common';

namespace TVEpisodesEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		changes(options?: Options.Changes): Promise<Results.Changes>;
		accountStates(options?: Options.AccountStates): Promise<Results.AccountStates>;
		credits(options?: Options.Credits): Promise<Results.Credits>;
		externalIDs(options?: Options.ExternalIDs): Promise<Results.ExternalIDs>;
		images(options?: Options.Images): Promise<Results.Images>;
		translations(options?: Options.Translations): Promise<Results.Translations>;
		rate(options?: Options.Rate): Promise<Results.Rate>;
		deleteRating(options?: Options.DeleteRating): Promise<Results.DeleteRating>;
		videos(options?: Options.Videos): Promise<Results.Videos>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
			language: string;
			tvID?: number;
			seasonNumber?: number;
			episodeNumber?: number;
		}

		interface Common {
			tvID?: number;
			seasonNumber?: number;
			episodeNumber?: number;
		}

		export interface Details extends Common {
			language?: string;
			appendToResponse?: string;
		}

		export interface Changes {
			episodeID?: number;
		}

		export interface AccountStates extends Common {
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface Credits extends Common {}

		export interface ExternalIDs extends Common {}

		export interface Images extends Common {}

		export interface Translations extends Common {}

		export interface Rate extends Common {
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface DeleteRating extends Common {
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface Videos extends Common {
			language?: string;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type Changes = Types.Changes;
		export type AccountStates = Types.AccountStates;
		export type Credits = Types.Credits;
		export type ExternalIDs = Types.ExternalIDs;
		export type Images = Types.Images;
		export type Translations = Types.Translations;
		export type Rate = ResponseWithCode;
		export type DeleteRating = ResponseWithCode;
		export type Videos = Types.Videos;
	}

	namespace Types {
		export interface Details extends TVEpisode {
			credits?: Omit<Credits, 'id'>;
			external_ids?: Omit<ExternalIDs, 'id'>;
			images?: Omit<Images, 'id'>;
			translations?: Omit<Translations, 'id'>;
			videos?: Omit<Videos, 'id'>;
		}

		export interface Changes {
			changes: {
				key: string;
				items: {
					id: string;
					action: string;
					time: string;
					value: string;
					iso_639_1: string;
				}[];
			}[];
		}

		export interface AccountStates {
			id: number;
			rated: { value: number } | boolean;
		}

		export interface Credits {
			id: number;
			cast: CastCredit[];
			crew: CrewCredit[];
			guest_stars: CastCredit[];
		}

		export interface ExternalIDs extends Omit<IExternalIDs, 'twitter_id' | 'facebook_id' | 'instagram_id'> {
			id: number;
		}

		export interface Images {
			id: number;
			stills: ImageWithISO639[];
		}

		export interface Translations {
			id: number;
			translations: {
				iso_3166_1: string;
				iso_639_1: string;
				name: string;
				english_name: string;
				data: {
					name: string;
					overview: string;
				};
			}[];
		}

		export interface Videos {
			id: number;
			results: TVShowVideo[];
		}
	}
}

export default TVEpisodesEndpointNS;
