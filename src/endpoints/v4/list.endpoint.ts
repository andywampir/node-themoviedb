import ListEndpointNS from '../../interfaces/v4/list';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class ListEndpoint implements ListEndpointNS.Class {
	private readonly client: IClient;
	private readonly language: string;
	private readonly listID?: number;

	public constructor(options: ListEndpointNS.Options.Constructor) {
		this.client = options.client;
		this.language = options.language;
		this.listID = options.listID;
	}

	public async getList(options?: ListEndpointNS.Options.GetList): Promise<ListEndpointNS.Results.GetList> {
		if (!options?.listID || !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.get(
			`list/${options.listID ?? this.listID}`,
			{
				searchParams: {
					page: options.page,
					language: options.language ?? this.language,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async createList(options: ListEndpointNS.Options.CreateList): Promise<ListEndpointNS.Results.CreateList> {
		return this.client.post(
			'list',
			{
				json: {
					name: options.name,
					iso_639_1: options.iso_639_1,
					description: options.description,
					iso_3166_1: options.iso_3166_1,
					public: options.public,
				},
			},
		);
	}

	public async updateList(options?: ListEndpointNS.Options.UpdateList): Promise<ListEndpointNS.Results.UpdateList> {
		if (!options?.listID || this.listID)
			throw new RequiredParameterError('listID');

		return this.client.put(
			`list/${options.listID ?? this.listID}`,
			{
				json: {
					description: options.description,
					name: options.name,
					public: options.public,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async clearList(listID?: number): Promise<ListEndpointNS.Results.ClearList> {
		if (!listID || !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.get(`list/${listID ?? this.listID}/clear`);
	}

	public async deleteList(listID?: number): Promise<ListEndpointNS.Results.DeleteList> {
		if (!listID || !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.delete(`list/${listID ?? this.listID}`);
	}

	public async addItems(options: ListEndpointNS.Options.AddItems): Promise<ListEndpointNS.Results.AddItems> {
		if (!options?.listID || this.listID)
			throw new RequiredParameterError('listID');

		return this.client.post(
			`list/${options.listID ?? this.listID}/items`,
			{
				json: {
					items: options.items.map(item => ({
						media_type: item.mediaType,
						media_id: item.mediaID,
					})),
				},
			},
		);
	}

	public async updateItems(options: ListEndpointNS.Options.UpdateItems): Promise<ListEndpointNS.Results.UpdateItems> {
		if (!options.listID || !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.put(
			`list/${options.listID ?? this.listID}/items`,
			{
				json: {
					items: options.items.map(item => ({
						media_type: item.mediaType,
						media_id: item.mediaID,
						comment: item.comment,
					})),
				},
			},
		);
	}

	public async removeItems(options: ListEndpointNS.Options.RemoveItems): Promise<ListEndpointNS.Results.RemoveItems> {
		if (!options.listID || !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.delete(
			`list/${options.listID ?? this.listID}/items`,
			{
				json: {
					items: options.items.map(item => ({
						media_type: item.mediaType,
						media_id: item.mediaID,
					})),
				},
			},
		);
	}

	public async checkItemStatus(
		options: ListEndpointNS.Options.CheckItemStatus,
	): Promise<ListEndpointNS.Results.CheckItemStatus> {
		if (!options.listID || !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.get(
			`list/${options.listID ?? this.listID}/item_status`,
			{
				searchParams: {
					media_id: options.mediaID,
					media_type: options.mediaType,
				},
			},
		);
	}
}
