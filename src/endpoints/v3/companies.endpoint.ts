import CompaniesEndpointNS from '../../interfaces/v3/companies';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class CompaniesEndpoint implements CompaniesEndpointNS.Class {
	private readonly client: IClient;
	private readonly companyID?: number;

	public constructor(options: CompaniesEndpointNS.Options.Constructor) {
		this.companyID = options.companyID;
		this.client = options.client;
	}

	public async details(companyID?: number): Promise<CompaniesEndpointNS.Results.Details> {
		if (!companyID || !this.companyID)
			throw new RequiredParameterError('companyID');

		return this.client.get(`company/${companyID ?? this.companyID}`);
	}

	public async alternativeNames(companyID?: number): Promise<CompaniesEndpointNS.Results.AlternativeNames> {
		if (!companyID || !this.companyID)
			throw new RequiredParameterError('companyID');

		return this.client.get(`company/${companyID ?? this.companyID}/alternative_names`);
	}

	public async images(companyID?: number): Promise<CompaniesEndpointNS.Results.Images> {
		if (!companyID || !this.companyID)
			throw new RequiredParameterError('companyID');

		return this.client.get(`company/${companyID ?? this.companyID}/images`);
	}
}
