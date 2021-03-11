import CertificationsEndpointNS from '../../interfaces/v3/certifications';

import type { IClient } from '../../utils/Client';

export default class CertificationsEndpoint implements CertificationsEndpointNS.Class {
	private readonly client: IClient;

	public constructor(options: CertificationsEndpointNS.Options.Constructor) {
		this.client = options.client;
	}

	public async movie(): Promise<CertificationsEndpointNS.Results.Movie> {
		return this.client.get('certification/movie/list');
	}

	public async tv(): Promise<CertificationsEndpointNS.Results.TV> {
		return this.client.get('certification/tv/list');
	}
}
