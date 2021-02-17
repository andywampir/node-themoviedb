import AccountEndpointNS from '../../interfaces/v3/account';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class AccountEndpoint implements AccountEndpointNS.Class {
	private readonly client: IClient;
	private readonly apiKey: string;
	private readonly language: string;
	private readonly sessionID?: string;
	private readonly userID?: number;

	public constructor(options: AccountEndpointNS.Options.Constructor) {
		this.client = options.client;
		this.apiKey = options.apiKey;
		this.language = options.language as string;
		this.sessionID = options.sessionID;
		this.userID = options.userID;
	}

	public async details(options: AccountEndpointNS.Options.Details): Promise<AccountEndpointNS.Results.Details> {
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');

		return this.client.get(
			'account',
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
			},
		);
	}

	public async createdLists(
		options?: AccountEndpointNS.Options.CreatedLists,
	): Promise<AccountEndpointNS.Results.CreatedLists> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/lists`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async favoriteMovies(
		options?: AccountEndpointNS.Options.FavoriteMovies,
	): Promise<AccountEndpointNS.Results.FavoriteMovies> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/favorite/movies`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async favoriteTVShows(
		options?: AccountEndpointNS.Options.FavoriteTVShows,
	): Promise<AccountEndpointNS.Results.FavoriteTVShows> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID}/favorite/tv`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async markAsFavorite(
		options: AccountEndpointNS.Options.MarkAsFavorite,
	): Promise<AccountEndpointNS.Results.MarkAsFavorite> {
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.post(
			`account/${options.userID ?? this.userID}/favorite`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
				json: {
					media_type: options.mediaType,
					media_id: options.mediaID,
					favorite: options.favorite,
				},
			},
		);
	}

	public async ratedMovies(
		options?: AccountEndpointNS.Options.RatedMovies,
	): Promise<AccountEndpointNS.Results.RatedMovies> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/rated/movies`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async ratedTVShows(
		options?: AccountEndpointNS.Options.RatedTVShows,
	): Promise<AccountEndpointNS.Results.RatedTVShows> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/rated/tv`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async ratedTVEpisodes(
		options?: AccountEndpointNS.Options.RatedTVEpisodes,
	): Promise<AccountEndpointNS.Results.RatedTVEpisodes> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/rated/tv/episodes`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async movieWatchlist(
		options?: AccountEndpointNS.Options.MovieWatchlist,
	): Promise<AccountEndpointNS.Results.MovieWatchlist> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/watchlist/movies`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async tvShowWatchlist(
		options?: AccountEndpointNS.Options.TVShowWatchlist,
	): Promise<AccountEndpointNS.Results.TVShowWatchlist> {
		if (!options?.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options?.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.get(
			`account/${options?.userID ?? this.userID}/watchlist/tv`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options?.sessionID ?? this.sessionID,
					language: options?.language ?? this.language,
					page: options?.page ?? 1,
					sort_by: options?.sortBy,
				},
			},
		);
	}

	public async addToWatchlist(
		options: AccountEndpointNS.Options.AddToWatchlist,
	): Promise<AccountEndpointNS.Results.AddToWatchlist> {
		if (!options.sessionID && !this.sessionID)
			throw new RequiredParameterError('sessionID');
		if (!options.userID && !this.userID)
			throw new RequiredParameterError('userID');

		return this.client.post(
			`account/${options.userID ?? this.userID}/watchlist`,
			{
				searchParams: {
					api_key: this.apiKey,
					session_id: options.sessionID ?? this.sessionID,
				},
				json: {
					media_type: options.mediaType,
					media_id: options.mediaID,
					watchlist: options.watchlist,
				},
			},
		);
	}
}
