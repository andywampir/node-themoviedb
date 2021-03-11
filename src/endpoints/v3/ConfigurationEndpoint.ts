import ConfigurationEndpointNS from '../../interfaces/v3/configuration';

import type { IClient } from '../../utils/Client';

export default class ConfigurationEndpoint implements ConfigurationEndpointNS.Class {
	private readonly client: IClient;

	public constructor(options: ConfigurationEndpointNS.Options.Constructor) {
		this.client = options.client;
	}

	public async api(): Promise<ConfigurationEndpointNS.Results.Api> {
		return this.client.get('configuration');
	}

	public async countries(): Promise<ConfigurationEndpointNS.Results.Countries> {
		return this.client.get('configuration/countries');
	}

	public async jobs(): Promise<ConfigurationEndpointNS.Results.Jobs> {
		return this.client.get('configuration/jobs');
	}

	public async languages(): Promise<ConfigurationEndpointNS.Results.Languages> {
		return this.client.get('configuration/languages');
	}

	public async primaryTranslations(): Promise<ConfigurationEndpointNS.Results.PrimaryTranslations> {
		return this.client.get('configuration/primary_translations');
	}

	public async timezones(): Promise<ConfigurationEndpointNS.Results.Timezones> {
		return this.client.get('configuration/timezones');
	}
}
