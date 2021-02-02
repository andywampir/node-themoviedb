import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import { ConfigurationReturnType } from '../../interfaces/v3/configuration';

export default class ConfigurationEndpoint extends Executor<ConfigurationReturnType> {
	private readonly apiKey: string;

	public constructor(apiKey: string) {
		super(client);

		this.apiKey = apiKey;
	}

	public api(): ConfigurationEndpoint {
		this.addToExecutionList(
			'api',
			{
				uri: 'configuration',
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public countries(): ConfigurationEndpoint {
		this.addToExecutionList(
			'countries',
			{
				uri: 'configuration/countries',
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public jobs(): ConfigurationEndpoint {
		this.addToExecutionList(
			'jobs',
			{
				uri: 'configuration/jobs',
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public languages(): ConfigurationEndpoint {
		this.addToExecutionList(
			'languages',
			{
				uri: 'configuration/languages',
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public primaryTranslations(): ConfigurationEndpoint {
		this.addToExecutionList(
			'primaryTranslations',
			{
				uri: 'configuration/primary_translations',
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public timezones(): ConfigurationEndpoint {
		this.addToExecutionList(
			'timezones',
			{
				uri: 'configuration/timezones',
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}
}
