import ListsEndpointNS from '../../interfaces/v3/lists';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class ListsEndpoint implements ListsEndpointNS.Class {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly client: IClient;
	private readonly sessionID?: string;
	private readonly listID?: string;

	public constructor(options: ListsEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.language = options.language;
		this.sessionID = options.sessionID;
		this.listID = options.listID;
		this.client = options.client;
	}

	public async details(options: ListsEndpointNS.Options.Details): Promise<ListsEndpointNS.Results.Details> {
		if (!options.listID && !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.get(
			`list/${options.listID ?? this.listID}`,
			{
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);
	}

	public async itemStatus(options: ListsEndpointNS.Options.ItemStatus): Promise<ListsEndpointNS.Results.ItemStatus> {
		if (!options.listID && !this.listID)
			throw new RequiredParameterError('listID');
		if (!options.movieID)
			throw new RequiredParameterError('movieID');

		return this.client.get(
			`list/${options.listID ?? this.listID}/item_status`,
			{
				searchParams: {
					api_key: this.apiKey,
					movie_id: options.movieID,
				},
			},
		);
	}

	public async create(options: ListsEndpointNS.Options.Create): Promise<ListsEndpointNS.Results.Create> {
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');

		return this.client.post(
			'list',
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
				json: {
					name: options.name,
					description: options.description,
					language: options.language,
				},
			},
		);
	}

	public async addMovie(options: ListsEndpointNS.Options.AddMovie): Promise<ListsEndpointNS.Results.AddMovie> {
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options.listID && !this.listID)
			throw new RequiredParameterError('listID');
		if (!options.mediaID)
			throw new RequiredParameterError('mediaID');

		return this.client.post(
			`list/${options.listID ?? this.listID}/add_item`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
				json: { media_id: options.mediaID },
			},
		);
	}

	public async removeMovie(
		options: ListsEndpointNS.Options.RemoveMovie,
	): Promise<ListsEndpointNS.Results.RemoveMovie> {
		if (!options.listID && !this.listID)
			throw new RequiredParameterError('listID');
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options.mediaID)
			throw new RequiredParameterError('mediaID');

		return this.client.post(
			`list/${options.listID ?? this.listID}/remove_item`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
				json: { media_id: options.mediaID },
			},
		);
	}

	public async clear(options: ListsEndpointNS.Options.Clear): Promise<ListsEndpointNS.Results.Clear> {
		if (!options.listID && !this.listID)
			throw new RequiredParameterError('listID');
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!('confirm' in options))
			throw new RequiredParameterError('confirm');

		return this.client.post(
			`list/${options.listID ?? this.listID}/clear`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
					confirm: options.confirm,
				},
			},
		);
	}

	public async delete(options: ListsEndpointNS.Options.Delete): Promise<ListsEndpointNS.Results.Delete> {
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options.listID && !this.listID)
			throw new RequiredParameterError('listID');

		return this.client.delete(
			`list/${options.listID ?? this.listID}`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
			},
		);
	}
}
