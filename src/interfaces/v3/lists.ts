import type { IClient } from '../../utils/Client';
import type { Movie } from '../common';

namespace ListsEndpointNS {
	export interface Class {
		details(options?: Options.Details): Promise<Results.Details>;
		itemStatus(options: Options.ItemStatus): Promise<Results.ItemStatus>;
		create(options: Options.Create): Promise<Results.Create>;
		addMovie(options: Options.AddMovie): Promise<Results.AddMovie>;
		removeMovie(options: Options.RemoveMovie): Promise<Results.RemoveMovie>;
		clear(options: Options.Clear): Promise<Results.Clear>;
		delete(options?: Options.Delete): Promise<Results.Delete>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			language: string;
			client: IClient;
			sessionID?: string;
			listID?: string;
		}

		interface Common {
			listID?: number;
		}

		export interface Details extends Common {
			language?: string;
		}

		export interface ItemStatus extends Common {
			movieID: number;
		}

		export interface Create extends Common {
			sessionID?: string;
			name: string;
			description: string;
			language: string;
		}

		export interface AddMovie extends Common {
			sessionID?: string;
			mediaID: number;
		}

		export interface RemoveMovie extends Common {
			sessionID?: string;
			mediaID: number;
		}

		export interface Clear extends Common {
			sessionID?: string;
			confirm: boolean;
		}

		export interface Delete extends Common {
			sessionID?: string;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
		export type ItemStatus = Types.ItemStatus;
		export type Create = Types.Create;
		export type AddMovie = Types.AddMovie;
		export type RemoveMovie = Types.RemoveMovie;
		export type Clear = Types.Clear;
		export type Delete = Types.Delete;
	}

	namespace Types {
		interface Common {
			status_message: string;
			status_code: string;
		}

		export interface Details {
			created_by: string;
			description: string;
			favorite_count: number;
			id: string;
			item_count: number;
			iso_639_1: string;
			name: string;
			poster_path: string | null;
			items: Movie[];
		}

		export interface ItemStatus {
			id: number;
			item_present: boolean;
		}

		export interface Create extends Common {
			success: boolean;
			list_id: number;
		}

		export interface AddMovie extends Common {}

		export interface RemoveMovie extends Common {}

		export interface Clear extends Common {}

		export interface Delete extends Common {}
	}
}

export default ListsEndpointNS;
