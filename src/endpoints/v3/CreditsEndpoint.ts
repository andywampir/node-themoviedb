import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	CreditsReturnType, CreditsConstructorOptions,
} from '../../interfaces/v3/credits';
import { RequiredParameterError } from '../../errors';

export default class CreditsEndpoint extends Executor<CreditsReturnType> {
	private readonly apiKey: string;
	private readonly creditID?: string;

	public constructor(options: CreditsConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.creditID = options.creditID;
	}

	public details(creditID?: string): CreditsEndpoint {
		if (!creditID || !this.creditID)
			throw new RequiredParameterError('creditID');

		this.addToExecutionList(
			'details',
			{
				uri: `credit/${creditID ?? this.creditID}`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}
}
