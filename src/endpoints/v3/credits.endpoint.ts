import CreditsEndpointNS from '../../interfaces/v3/credits';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class CreditsEndpoint implements CreditsEndpointNS.Class {
	private readonly client: IClient;
	private readonly creditID?: string;

	public constructor(options: CreditsEndpointNS.Options.Constructor) {
		this.creditID = options.creditID;
		this.client = options.client;
	}

	public async details(creditID?: number): Promise<CreditsEndpointNS.Results.Details> {
		if (!creditID || !this.creditID)
			throw new RequiredParameterError('creditID');

		return this.client.get(`credit/${creditID ?? this.creditID}`);
	}
}
