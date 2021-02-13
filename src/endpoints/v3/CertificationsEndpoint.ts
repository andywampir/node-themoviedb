import CertificationsEndpointNS from '../../interfaces/v3/certifications';

import type { IClient } from '../../utils/Client';

export default class CertificationsEndpoint implements CertificationsEndpointNS.Class {
	private readonly apiKey: string;
	private readonly client: IClient;

	public constructor(options: CertificationsEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.client = options.client;
	}

	public async movie(): Promise<CertificationsEndpointNS.Results.Movie> {
		return this.client.get(
			'certification/movie/list',
			{ searchParams: { api_key: this.apiKey } },
		);
	}

	public async tv(): Promise<CertificationsEndpointNS.Results.TV> {
		return this.client.get(
			'certification/tv/list',
			{ searchParams: { api_key: this.apiKey } },
		);
	}
}
