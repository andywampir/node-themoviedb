import type { IClient } from '../../utils/client';
import type {
	MovieWithMediaType, TVShowWithMediaType,
	ResponseWithCodeExtended, MediaType,
} from '../common';

namespace ListEndpointNS {
	export interface Class {
		getList(options?: Options.GetList): Promise<Results.GetList>;
		createList(options: Options.CreateList): Promise<Results.CreateList>;
		updateList(options?: Options.UpdateList): Promise<Results.UpdateList>;
		clearList(listID?: number): Promise<Results.ClearList>;
		deleteList(listID?: number): Promise<Results.DeleteList>;
		addItems(options: Options.AddItems): Promise<Results.AddItems>;
		updateItems(options: Options.UpdateItems): Promise<Results.UpdateItems>;
		removeItems(options: Options.RemoveItems): Promise<Results.RemoveItems>;
		checkItemStatus(options: Options.CheckItemStatus): Promise<Results.CheckItemStatus>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
			listID?: number;
		}

		type SortBy =
			| 'original_order.asc'
			| 'original_order.desc'
			| 'title.asc'
			| 'title.desc'
			| 'vote_average.asc'
			| 'vote_average.desc';

		export interface GetList {
			listID?: number;
			page?: number;
			language?: string;
			sortBy?:
				| SortBy
				| 'release_date.asc'
				| 'release_date.desc';
		}

		export interface CreateList {
			name: string;
			iso_639_1: string;
			description?: string;
			public?: boolean;
			iso_3166_1?: string;
		}

		export interface UpdateList {
			listID?: number;
			description?: string;
			name?: string;
			public?: boolean;
			sortBy?:
				| SortBy
				| 'primary_release_date.asc'
				| 'primary_release_date.desc';
		}

		export interface AddItems {
			listID?: number;
			items: {
				mediaType: MediaType;
				mediaID: number;
			}[];
		}

		export interface UpdateItems {
			listID?: number;
			items: {
				mediaType: MediaType;
				mediaID: number;
				comment: string;
			}[];
		}

		export interface RemoveItems extends AddItems {}

		export interface CheckItemStatus {
			listID?: number;
			mediaID: number;
			mediaType: MediaType;
		}
	}

	export namespace Results {
		export type GetList = Types.GetList;
		export type CreateList = Types.CreateList;
		export type UpdateList = ResponseWithCodeExtended;
		export type ClearList = Types.ClearList;
		export type DeleteList = ResponseWithCodeExtended;
		export type AddItems = Types.AddItems;
		export type UpdateItems = Types.UpdateItems;
		export type RemoveItems = Types.RemoveItems;
		export type CheckItemStatus = Types.CheckItemStatus;
	}

	namespace Types {
		export interface GetList {
			poster_path: string | null;
			id: number;
			backdrop_path: string | null;
			total_results: number;
			public: boolean;
			revenue: string;
			page: number;
			results: (MovieWithMediaType | TVShowWithMediaType)[];
			iso_639_1: string;
			total_pages: number;
			description: string;
			created_by: {
				gravatar_hash: string;
				name: string;
				username: string;
			};
			iso_3166_1: string;
			average_rating: number;
			runtime: number;
			name: string;
			comments: { [item: string]: string | null }[];
		}

		export interface CreateList extends ResponseWithCodeExtended {
			id: number;
		}

		export interface ClearList extends ResponseWithCodeExtended {
			id: number;
			items_deleted: number;
		}

		export interface AddItems extends ResponseWithCodeExtended {
			results: {
				media_type: MediaType;
				media_id: number;
				success: boolean;
			}[];
		}

		export interface UpdateItems extends AddItems {}

		export interface RemoveItems extends AddItems {}

		export interface CheckItemStatus extends ResponseWithCodeExtended {
			media_type: MediaType;
			success: boolean;
			id: number;
			media_id: number;
		}
	}
}

export default ListEndpointNS;
