import type { IClient } from '../../utils/Client';
import type {
	ImageWithISO639, Movie,
	ResultsWithPage, Review,
	ResponseWithCode, MovieExtended,
	CrewCredit, CastCredit,
	MovieVideo, ExternalIDs as IExternalIDs,
} from '../common';

namespace MoviesEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		accountState(options?: Options.AccountState): Promise<Results.AccountState>;
		alternativeTitles(options?: Options.AlternativeTitles): Promise<Results.AlternativeTitles>;
		changes(options?: Options.Changes): Promise<Results.Changes>;
		credits(options?: Options.Credits): Promise<Results.Credits>;
		externalIDs(options?: Options.ExternalIDs): Promise<Results.ExternalIDs>;
		images(options?: Options.Images): Promise<Results.Images>;
		keywords(options?: Options.Keywords): Promise<Results.Keywords>;
		releaseDates(options?: Options.ReleaseDates): Promise<Results.ReleaseDates>;
		videos(options?: Options.Videos): Promise<Results.Videos>;
		translations(options?: Options.Translations): Promise<Results.Translations>;
		recommendations(options?: Options.Recommendations): Promise<Results.Recommendations>;
		similar(options?: Options.Similar): Promise<Results.Similar>;
		reviews(options?: Options.Reviews): Promise<Results.Reviews>;
		lists(options?: Options.Lists): Promise<Results.Lists>;
		rate(options: Options.Rate): Promise<Results.Rate>;
		deleteRating(options?: Options.DeleteRating): Promise<Results.DeleteRating>;
		latest(options?: Options.Latest): Promise<Results.Latest>;
		nowPlaying(options?: Options.NowPlaying): Promise<Results.NowPlaying>;
		popular(options?: Options.Popular): Promise<Results.Popular>;
		topRated(options?: Options.TopRated): Promise<Results.TopRated>;
		upcoming(options?: Options.Upcoming): Promise<Results.Upcoming>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			language: string;
			client: IClient;
			movieID?: number;
		}

		interface Common {
			movieID?: number;
		}

		export interface Details extends Common {
			language?: string;
			appendToResponse?: string;
		}

		export interface AccountState extends Common {
			sessionID?: string;
			guestSessionID?: string;
		}

		export interface AlternativeTitles extends Common {
			country?: string;
		}

		export interface Changes extends Common {
			startDate?: string;
			endDate?: string;
			page?: number;
		}

		export interface Credits extends Common {}

		export interface ExternalIDs extends Common {}

		export interface Images extends Common {
			language?: string;
			includeImageLanguage?: string;
		}

		export interface Keywords extends Common {}

		export interface ReleaseDates extends Common {}

		export interface Videos extends Common {
			language?: string;
		}

		export interface Translations extends Common {}

		export interface Recommendations extends Common, Videos {
			page?: number;
		}

		export interface Similar extends Recommendations {}

		export interface Reviews extends Recommendations {}

		export interface Lists extends Recommendations {}

		export interface Rate extends Common {
			sessionID?: string;
			guestSessionID?: string;
			value: number;
		}

		export interface DeleteRating extends Common {
			sessionID?: string;
			guestSessionID?: string;
		}

		export interface Latest {
			language?: string;
		}

		export interface NowPlaying extends Recommendations {
			region?: string;
		}

		export interface Popular extends NowPlaying {}

		export interface TopRated extends NowPlaying {}

		export interface Upcoming extends NowPlaying {}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type AccountState = Types.AccountStates;
		export type AlternativeTitles = Types.AlternativeTitles;
		export type Changes = Types.Changes;
		export type Credits = Types.Credits;
		export type ExternalIDs = Types.ExternalIDs;
		export type Images = Types.Images;
		export type Keywords = Types.Keywords;
		export type ReleaseDates = Types.ReleaseDates;
		export type Videos = Types.Videos;
		export type Translations = Types.Translations;
		export type Recommendations = ResultsWithPage<Movie>;
		export type Similar = ResultsWithPage<Movie>;
		export type Reviews = Types.Reviews;
		export type Lists = Types.Lists;
		export type Rate = ResponseWithCode;
		export type DeleteRating = ResponseWithCode;
		export type Latest = MovieExtended;
		export type NowPlaying = Types.NowPlaying;
		export type Popular = ResultsWithPage<Movie>;
		export type TopRated = ResultsWithPage<Movie>;
		export type Upcoming = Types.Upcoming;
	}

	namespace Types {
		export interface Details extends MovieExtended {
			alternative_titles?: Omit<AlternativeTitles, 'id'>;
			changes?: Changes;
			credits?: Omit<Credits, 'id'>;
			external_ids?: Omit<ExternalIDs, 'id'>;
			images?: Omit<Images, 'id'>;
			keywords?: Omit<Keywords, 'id'>;
			release_dates?: Omit<ReleaseDates, 'id'>;
			videos?: Omit<Videos, 'id'>;
			translations?: Omit<Translations, 'id'>;
			recommendations?: ResultsWithPage<Movie>;
			similar?: ResultsWithPage<Movie>;
			reviews?: Omit<Reviews, 'id'>;
			lists?: Omit<Lists, 'id'>;
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
			titles: {
				iso_3166_1: string;
				title: string;
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
					iso_3166_1: string;
					value: string;
					original_value: string;
				}[];
			}[];
		}

		export interface Credits {
			id: number;
			cast: CastCredit & { cast_id: number }[];
			crew: CrewCredit[];
		}

		export interface ExternalIDs
			extends Omit<IExternalIDs, 'freebase_mid' | 'freebase_id' | 'tvdb_id' | 'tvrage_id'> {
			id: number;
		}

		export interface Images {
			id: number;
			backdrops: ImageWithISO639[];
			posters: ImageWithISO639[];
		}

		export interface Keywords {
			id: number;
			keywords: {
				id: number;
				name: string;
			}[];
		}

		export interface ReleaseDates {
			id: number;
			results: {
				iso_3166_1: string;
				release_dates: {
					certification: string;
					iso_639_1: string;
					release_date: string;
					type: number;
					note: string;
				}[];
			}[];
		}

		export interface Videos {
			id: number;
			results: MovieVideo[];
		}

		export interface Translations {
			id: number;
			translations: {
				iso_639_1: string;
				iso_3166_1: string;
				name: string;
				english_name: string;
				data: {
					title: string;
					overview: string;
					homepage: string;
				};
			}[];
		}

		export interface Reviews extends ResultsWithPage<Review> {
			id: number;
		}

		interface List {
			description: string;
			favorite_count: number;
			id: number;
			item_count: number;
			iso_639_1: string;
			list_type: string;
			name: string;
			poster_path: string | null;
		}

		export interface Lists extends ResultsWithPage<List> {
			id: number;
		}

		export interface NowPlaying extends ResultsWithPage<Movie> {
			dates: {
				maximum: string;
				minimum: string;
			};
		}

		export interface Upcoming extends NowPlaying {}
	}
}

export default MoviesEndpointNS;
