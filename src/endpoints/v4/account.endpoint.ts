import AccountEndpointNS from '../../interfaces/v4/account';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class AccountEndpoint implements AccountEndpointNS.Class {
	private readonly client: IClient;
	private readonly accountID?: string;

	public constructor(options: AccountEndpointNS.Options.Constructor) {
		this.client = options.client;
		this.accountID = options.accountID;
	}

	public async lists(options?: AccountEndpointNS.Options.Lists): Promise<AccountEndpointNS.Results.Lists> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/lists`,
			{ searchParams: { page: options.page } },
		);
	}

	public async favoriteMovies(
		options?: AccountEndpointNS.Options.FavoriteMovies,
	): Promise<AccountEndpointNS.Results.FavoriteMovies> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/movie/favorites`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async favoriteTVShows(
		options?: AccountEndpointNS.Options.FavoriteTVShows,
	): Promise<AccountEndpointNS.Results.FavoriteTVShows> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/tv/favorites`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async movieRecommendations(
		options?: AccountEndpointNS.Options.MovieRecommendations,
	): Promise<AccountEndpointNS.Results.MovieRecommendations> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/movie/recommendations`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async tvShowRecommendations(
		options?: AccountEndpointNS.Options.TVShowRecommendations,
	): Promise<AccountEndpointNS.Results.TVShowRecommendations> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/tv/recommendations`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async movieWatchlist(
		options?: AccountEndpointNS.Options.MovieWatchlist,
	): Promise<AccountEndpointNS.Results.MovieWatchlist> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/movie/watchlist`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async tvShowWatchlist(
		options?: AccountEndpointNS.Options.TVShowWatchlist,
	): Promise<AccountEndpointNS.Results.TVShowWatchlist> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/tv/watchlist`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async ratedMovies(
		options?: AccountEndpointNS.Options.RatedMovies,
	): Promise<AccountEndpointNS.Results.FavoriteMovies> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/movie/rated`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}

	public async ratedTVShows(
		options?: AccountEndpointNS.Options.RatedTVShows,
	): Promise<AccountEndpointNS.Results.RatedTVShows> {
		if (!options?.accountID || !this.accountID)
			throw new RequiredParameterError('accountID');

		return this.client.get(
			`account/${options.accountID ?? this.accountID}/tv/rated`,
			{
				searchParams: {
					page: options.page,
					sort_by: options.sortBy,
				},
			},
		);
	}
}
