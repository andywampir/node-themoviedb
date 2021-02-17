import ConfigurationEndpointNS from '../../interfaces/v3/configuration';

import type { IClient } from '../../utils/Client';

export default class ConfigurationEndpoint implements ConfigurationEndpointNS.Class {
	private readonly apiKey: string;
	private readonly client: IClient;

	public constructor(options: ConfigurationEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.client = options.client;
	}

	public async api(): Promise<ConfigurationEndpointNS.Results.Api> {
		return this.client.get(
			'configuration',
			{ searchParams: { api_key: this.apiKey } },
		);
	}

	public async countries(): Promise<ConfigurationEndpointNS.Results.Countries> {
		return this.client.get(
			'configuration/countries',
			{ searchParams: { api_key: this.apiKey } },
		);
	}

	public async jobs(): Promise<ConfigurationEndpointNS.Results.Jobs> {
		return this.client.get(
			'configuration/jobs',
			{ searchParams: { api_key: this.apiKey } },
		);
	}

	public async languages(): Promise<ConfigurationEndpointNS.Results.Languages> {
		return this.client.get(
			'configuration/languages',
			{ searchParams: { api_key: this.apiKey } },
		);
	}

	public async primaryTranslations(): Promise<ConfigurationEndpointNS.Results.PrimaryTranslations> {
		return this.client.get(
			'configuration/primary_translations',
			{ searchParams: { api_key: this.apiKey } },
		);
	}

	public async timezones(): Promise<ConfigurationEndpointNS.Results.Timezones> {
		return this.client.get(
			'configuration/timezones',
			{ searchParams: { api_key: this.apiKey } },
		);
	}
}
