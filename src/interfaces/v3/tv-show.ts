import type { IClient } from '../../utils/client';
import type {
	TVShow, CrewCredit,
	CastCredit, ImageWithISO639,
	ResultsWithPage, Review,
	TVShowVideo, ResponseWithCode,
	TVShowExtended, ExternalIDs as IExternalIDs,
	TVTranslation,
} from '../common';

namespace TVShowEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		accountStates(options?: Options.AccountStates): Promise<Results.AccountStates>;
		alternativeTiles(options?: Options.AlternativeTitles): Promise<Results.AlternativeTitles>;
		changes(options?: Options.Changes): Promise<Results.Changes>;
		contentRatings(options?: Options.ContentRatings): Promise<Results.ContentRatings>;
		credits(options?: Options.Credits): Promise<Results.Credits>;
		episodeGroups(options?: Options.EpisodeGroups): Promise<Results.EpisodeGroups>;
		externalIDs(options?: Options.ExternalIDs): Promise<Results.ExternalIDs>;
		images(options?: Options.Images): Promise<Results.Images>;
		keywords(options?: Options.Keywords): Promise<Results.Keywords>;
		recommendations(options?: Options.Recommendations): Promise<Results.Recommendations>;
		reviews(options?: Options.Reviews): Promise<Results.Reviews>;
		screenedTheatrically(options?: Options.ScreenedTheatrically): Promise<Results.ScreenedTheatrically>;
		similar(options?: Options.Similar): Promise<Results.Similar>;
		translations(options?: Options.Translations): Promise<Results.Translations>;
		videos(options?: Options.Videos): Promise<Results.Videos>;
		rate(options: Options.Rate): Promise<Results.Rate>;
		deleteRating(options?: Options.DeleteRating): Promise<Results.DeleteRating>;
		latest(options?: Options.Latest): Promise<Results.Latest>;
		airingToday(options?: Options.AiringToday): Promise<Results.AiringToday>;
		onTheAir(options?: Options.OnTheAir): Promise<Results.OnTheAir>;
		popular(options?: Options.Popular): Promise<Results.Popular>;
		topRated(options?: Options.TopRated): Promise<Results.TopRated>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
			language: string;
			tvID?: number;
			sessionID?: string;
		}

		interface Common {
			tvID?: number;
			language?: string;
		}

		export interface Details extends Common {
			appendToResponse?: string;
		}

		export interface AccountStates extends Common {
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface AlternativeTitles extends Common {}

		export interface Changes extends Omit<Common, 'language'> {
			startDate?: string;
			endDate?: string;
			page?: number;
		}

		export interface ContentRatings extends Common {}

		export interface Credits extends Common {}

		export interface EpisodeGroups extends Common {}

		export interface ExternalIDs extends Common {}

		export interface Images extends Common {}

		export interface Keywords extends Omit<Common, 'language'> {}

		export interface Recommendations extends Common {
			page?: number;
		}

		export interface Reviews extends Common {
			page?: number;
		}

		export interface ScreenedTheatrically extends Omit<Common, 'language'> {}

		export interface Similar extends Common {
			page?: number;
		}

		export interface Translations extends Omit<Common, 'language'> {}

		export interface Videos extends Common {}

		export interface Rate extends Omit<Common, 'language'> {
			value: number;
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface DeleteRating extends Omit<Common, 'language'> {
			guestSessionID?: string;
			sessionID?: string;
		}

		export interface Latest extends Omit<Common, 'tvID'> {}

		export interface AiringToday extends Omit<Common, 'tvID'> {
			page?: number;
		}

		export interface OnTheAir extends Omit<Common, 'tvID'> {
			page?: number;
		}

		export interface Popular extends Omit<Common, 'tvID'> {
			page?: number;
		}

		export interface TopRated extends Omit<Common, 'tvID'> {
			page?: number;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type AccountStates = Types.AccountStates;
		export type AlternativeTitles = Types.AlternativeTitles;
		export type Changes = Types.Changes;
		export type ContentRatings = Types.ContentRatings;
		export type Credits = Types.Credits;
		export type EpisodeGroups = Types.EpisodeGroups;
		export type ExternalIDs = Types.ExternalIDs;
		export type Images = Types.Images;
		export type Keywords = Types.Keywords;
		export type Recommendations = Types.Recommendations;
		export type Reviews = Types.Reviews;
		export type ScreenedTheatrically = Types.ScreenedTheatrically;
		export type Similar = Types.Similar;
		export type Translations = Types.Translations;
		export type Videos = Types.Videos;
		export type Rate = ResponseWithCode;
		export type DeleteRating = ResponseWithCode;
		export type Latest = Omit<TVShowExtended, 'last_episode_to_air' & 'next_episode_to_air'>;
		export type AiringToday = ResultsWithPage<TVShow>;
		export type OnTheAir = ResultsWithPage<TVShow>;
		export type Popular = ResultsWithPage<TVShow>;
		export type TopRated = ResultsWithPage<TVShow>;
	}

	namespace Types {
		export interface Details extends TVShowExtended {
			alternative_titles?: Omit<AlternativeTitles, 'id'>;
			changes?: Changes;
			content_ratings?: Omit<ContentRatings, 'id'>;
			credits?: Omit<Credits, 'id'>;
			episode_groups?: Omit<EpisodeGroups, 'id'>;
			external_ids?: Omit<ExternalIDs, 'id'>;
			images?: Omit<Images, 'id'>;
			keywords?: Omit<Keywords, 'id'>;
			recommendations?: Recommendations;
			reviews?: Omit<Reviews, 'id'>;
			screened_theatrically?: Omit<ScreenedTheatrically, 'id'>;
			similar?: Similar;
			translations?: Omit<Translations, 'id'>;
			videos?: Omit<Videos, 'id'>;
		}

		export interface AccountStates {
			id: number;
			favorite: boolean;
			rated: {
				value: number;
			} | boolean;
			watchlist: boolean;
		}

		export interface AlternativeTitles {
			id: number;
			results: {
				title: string;
				iso_3166_1: string;
				type: string;
			}[];
		}

		export interface Changes {
			changes: {
				key: string;
				items: {
					id: string;
					action: string;
					time: string;
				}[];
			}[];
		}

		export interface ContentRatings {
			id: number;
			results: {
				iso_3166_1: string;
				rating: string;
			}[];
		}

		export interface Credits {
			id: number;
			cast: CastCredit[];
			crew: CrewCredit[];
		}

		export interface EpisodeGroups {
			id: number;
			results: {
				description: string;
				episode_count: number;
				group_count: number;
				id: string;
				name: string;
				network: {
					id: number;
					logo_path: string;
					name: string;
					origin_country: string;
				} | null;
			}[];
		}

		export interface ExternalIDs extends IExternalIDs {
			id: number;
		}

		export interface Images {
			id: number;
			backdrops: ImageWithISO639[];
			posters: ImageWithISO639[];
		}

		export interface Keywords {
			id: number;
			results: {
				id: number;
				name: string;
			}[];
		}

		export interface ScreenedTheatrically {
			id: number;
			results: {
				id: number;
				episode_number: number;
				season_number: number;
			}[];
		}

		export interface Translations {
			id: number;
			translations: TVTranslation[];
		}

		export interface Videos {
			id: number;
			results: TVShowVideo[];
		}

		export interface Recommendations extends ResultsWithPage<TVShow> {}

		export interface Reviews extends ResultsWithPage<Review & { id: number }> {}

		export interface Similar extends ResultsWithPage<TVShow> {}
	}
}

export default TVShowEndpointNS;
