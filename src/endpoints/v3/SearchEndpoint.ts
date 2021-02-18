import SearchEndpointNS from '../../interfaces/v3/search';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class SearchEndpoint implements SearchEndpointNS.Class {
	private readonly apiKey: string;
	private readonly client: IClient;
	private readonly language: string;

	public constructor(options: SearchEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.client = options.client;
		this.language = options.language;
	}

	public async companies(options: SearchEndpointNS.Options.Companies): Promise<SearchEndpointNS.Results.Companies> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/company',
			{
				searchParams: {
					api_key: this.apiKey,
					query: options.query,
					page: options.page ?? 1,
				},
			},
		);
	}

	public async collections(
		options: SearchEndpointNS.Options.Collections,
	): Promise<SearchEndpointNS.Results.Collections> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/collection',
			{
				searchParams: {
					api_key: this.apiKey,
					query: options.query,
					language: options.language ?? this.language,
					page: options.page ?? 1,
				},
			},
		);
	}

	public async keywords(options: SearchEndpointNS.Options.Keywords): Promise<SearchEndpointNS.Results.Keywords> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/keyword',
			{
				searchParams: {
					api_key: this.apiKey,
					query: options.query,
					page: options.page ?? 1,
				},
			},
		);
	}

	public async movies(options: SearchEndpointNS.Options.Movies): Promise<SearchEndpointNS.Results.Movies> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/movie',
			{
				searchParams: {
					api_key: this.apiKey,
					query: options.query,
					page: options.page ?? 1,
					include_adult: options.includeAdult,
					region: options.region,
					year: options.year,
					primary_release_year: options.primaryReleaseYear,
				},
			},
		);
	}

	public async multi(options: SearchEndpointNS.Options.Multi): Promise<SearchEndpointNS.Results.Multi> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/multi',
			{
				searchParams: {
					api_key: this.apiKey,
					query: options.query,
					language: options.language ?? this.language,
					page: options.page ?? 1,
					include_adult: options.includeAdult,
					region: options.region,
				},
			},
		);
	}

	public async people(options: SearchEndpointNS.Options.People): Promise<SearchEndpointNS.Results.People> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/people',
			{
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					query: options.query,
					page: options.page ?? 1,
					include_adult: options.includeAdult,
					region: options.region,
				},
			},
		);
	}

	public async tvShows(options: SearchEndpointNS.Options.TVShow): Promise<SearchEndpointNS.Results.TVShows> {
		if (!options.query)
			throw new RequiredParameterError('query');

		return this.client.get(
			'search/tv',
			{
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					page: options.page ?? 1,
					include_adult: options.includeAdult,
					first_air_date_year: options.firstAirDateYear,
				},
			},
		);
	}
}
