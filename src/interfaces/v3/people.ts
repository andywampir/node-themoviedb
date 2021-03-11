import type { IClient } from '../../utils/Client';
import type {
	PeopleCredit, Image,
	ResultsWithPage, TVShowWithMediaType,
	MovieWithMediaType, ImageWithISO639,
	Person, ExternalIDs as IExternalIDs,
	PeopleTranslation,
} from '../common';

namespace PeopleEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		changes(options?: Options.Changes): Promise<Results.Changes>;
		movieCredits(options?: Options.MovieCredits): Promise<Results.MovieCredits>;
		tvCredits(options?: Options.TVCredits): Promise<Results.TVCredits>;
		combinedCredits(options?: Options.CombinedCredits): Promise<Results.CombinedCredits>;
		externalIDs(options?: Options.ExternalIDs): Promise<Results.ExternalIDs>;
		images(options?: Options.Images): Promise<Results.Images>;
		taggedImages(options?: Options.TaggedImages): Promise<Results.TaggedImages>;
		translations(options?: Options.Translations): Promise<Results.Translations>;
		latest(options?: Options.Latest): Promise<Results.Latest>;
		popular(options?: Options.Popular): Promise<Results.Popular>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			language: string;
			client: IClient;
			personID?: number;
		}

		interface Common {
			personID?: number;
			language?: string;
		}

		export interface Details extends Common {
			appendToResponse?: string;
		}

		export interface Changes extends Omit<Common, 'language'> {
			endDate?: string;
			startDate?: string;
			page?: number;
		}

		export interface MovieCredits extends Common {}

		export interface TVCredits extends Common {}

		export interface CombinedCredits extends Common {}

		export interface ExternalIDs extends Common {}

		export interface Images extends Common {}

		export interface TaggedImages extends Common {
			page?: number;
		}

		export interface Translations extends Common {}

		export interface Latest extends Common {}

		export interface Popular extends Omit<Common, 'personID'> {
			page?: number;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type Changes = Types.Changes;
		export type MovieCredits = Types.MovieCredits;
		export type TVCredits = Types.TVCredits;
		export type CombinedCredits = Types.CombinedCredits;
		export type ExternalIDs = Types.ExternalIDs;
		export type Images = Types.Images;
		export type TaggedImages = Types.TaggedImages;
		export type Translations = Types.Translations;
		export type Latest = Types.Latest;
		export type Popular = ResultsWithPage<Person>;
	}

	namespace Types {
		export interface Details {
			birthday: string | null;
			known_for_department?: string;
			deathday: string | null;
			id: number;
			name: string;
			also_known_as: string[];
			gender: number;
			biography: string;
			popularity: number;
			place_of_birth: string | null;
			profile_path: string | null;
			adult: boolean;
			imdb_id: string;
			homepage: string | null;
			changes?: Changes;
			movie_credits?: Omit<MovieCredits, 'id'>;
			tv_credits?: Omit<TVCredits, 'id'>;
			combined_credits?: Omit<CombinedCredits, 'id'>;
			external_ids?: Omit<ExternalIDs, 'id'>;
			images?: Omit<Images, 'id'>;
			tagged_images?: TaggedImages;
			translations?: Omit<Translations, 'id'>;
		}

		export interface Changes {
			changes: {
				key: string;
				items: {
					id: string;
					action: string;
					time: string;
					original_value: {
						profile: {
							file_path: string;
						};
					};
				}[];
			}[];
		}

		interface MovieCreditCast extends PeopleCredit {
			character: string;
			title: string;
			original_title: string;
		}

		interface MovieCreditCrew extends PeopleCredit {
			job: string;
			department: string;
			title: string;
			original_title: string;
		}

		export interface MovieCredits {
			id: number;
			cast: MovieCreditCast[];
			crew: MovieCreditCrew[];
		}

		interface TVCreditCast extends PeopleCredit {
			character: string;
			original_name: string;
			name: string;
			first_air_date: string;
			episode_count: string;
			origin_country: string[];
		}

		interface TVCreditCrew extends PeopleCredit {
			department: string;
			episode_count: string;
			job: string;
			origin_country: string[];
			original_name: string;
			name: string;
			first_air_date: string;
		}

		export interface TVCredits {
			id: number;
			cast: TVCreditCast[];
			crew: TVCreditCrew[];
		}

		interface CombinedCreditCast extends PeopleCredit {
			character: string;
			title: string;
			original_title: string;
			episode_count: number;
			original_name: string;
			name: string;
			first_air_date: string;
			origin_country: string[];
		}

		interface CombinedCreditCrew extends PeopleCredit {
			department: string;
			episode_count: string;
			job: string;
			origin_country: string[];
			original_name: string;
			name: string;
			first_air_date: string;
			title: string;
			original_title: string;
		}

		export interface CombinedCredits {
			id: number;
			cast: CombinedCreditCast[];
			crew: CombinedCreditCrew[];
		}

		export interface ExternalIDs extends IExternalIDs {
			id: number;
		}

		interface PeopleImage extends Image {
			iso_639_1: null;
		}

		export interface Images {
			id: number;
			profiles: PeopleImage[];
		}

		interface TaggedImage extends ImageWithISO639 {
			id: string;
			image_type: string;
			media: TVShowWithMediaType | MovieWithMediaType;
			media_type:
			| 'tv'
			| 'movie';
		}

		export interface TaggedImages extends ResultsWithPage<TaggedImage> {
			id: number;
		}

		export interface Translations {
			id: number;
			translations: PeopleTranslation[];
		}

		export interface Latest extends Omit<Person, 'known_for'> {
			also_known_as: string[];
			biography: string;
			birthday: string | null;
			deathday: string | null;
			gender: number;
			homepage: string | null;
			imdb_id: string | null;
			place_of_birth: string | null;
		}
	}
}

export default PeopleEndpointNS;
