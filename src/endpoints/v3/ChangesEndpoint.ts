import ChangesEndpointNS from '../../interfaces/v3/changes';

import type { IClient } from '../../utils/Client';

export default class ChangesEndpoint implements ChangesEndpointNS.Class {
	private readonly apiKey: string;
	private readonly client: IClient;

	public constructor(options: ChangesEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.client = options.client;
	}

	public async movie(options?: ChangesEndpointNS.Options.Movie): Promise<ChangesEndpointNS.Results.Movie> {
		return this.client.get(
			'movie/changes',
			{
				searchParams: {
					api_key: this.apiKey,
					end_date: options?.endDate,
					start_date: options?.startDate,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async tv(options?: ChangesEndpointNS.Options.TV): Promise<ChangesEndpointNS.Results.TV> {
		return this.client.get(
			'tv/changes',
			{
				searchParams: {
					api_key: this.apiKey,
					end_date: options?.endDate,
					start_date: options?.startDate,
					page: options?.page ?? 1,
				},
			},
		);
	}

	public async person(options?: ChangesEndpointNS.Options.Person): Promise<ChangesEndpointNS.Results.Person> {
		return this.client.get(
			'person/changes',
			{
				searchParams: {
					api_key: this.apiKey,
					end_date: options?.endDate,
					start_date: options?.startDate,
					page: options?.page ?? 1,
				},
			},
		);
	}
}
