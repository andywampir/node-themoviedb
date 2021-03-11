import NetworksEndpointNS from '../../interfaces/v3/networks';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/Client';

export default class NetworksEndpoint implements NetworksEndpointNS.Class {
	private readonly client: IClient;
	private readonly networkID?: number;

	public constructor(options: NetworksEndpointNS.Options.Constructor) {
		this.networkID = options.networkID;
		this.client = options.client;
	}

	public async details(networkID?: number): Promise<NetworksEndpointNS.Results.Details> {
		if (!networkID && !this.networkID)
			throw new RequiredParameterError('networkID');

		return this.client.get(`network/${networkID ?? this.networkID}`);
	}

	public async alternativeNames(networkID?: number): Promise<NetworksEndpointNS.Results.AlternativeNames> {
		if (!networkID && !this.networkID)
			throw new RequiredParameterError('networkID');

		return this.client.get(`network/${networkID ?? this.networkID}/alternative_names`);
	}

	public async images(networkID?: number): Promise<NetworksEndpointNS.Results.Images> {
		if (!networkID && !this.networkID)
			throw new RequiredParameterError('networkID');

		return this.client.get(`network/${networkID ?? this.networkID}/images`);
	}
}
