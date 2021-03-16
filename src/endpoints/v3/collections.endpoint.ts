import CollectionsEndpointNS from '../../interfaces/v3/collections';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class CollectionsEndpoint implements CollectionsEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;
	private readonly collectionID?: number;

	public constructor(options: CollectionsEndpointNS.Options.Constructor) {
		this.language = options.language;
		this.collectionID = options.collectionID;
		this.client = options.client;
	}

	public async details(
		options?: CollectionsEndpointNS.Options.Details,
	): Promise<CollectionsEndpointNS.Results.Details> {
		if (!options?.collectionID && !this.collectionID)
			throw new RequiredParameterError('collectionID');

		return this.client.get(
			`collection/${options?.collectionID ?? this.collectionID}`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async images(options?: CollectionsEndpointNS.Options.Images): Promise<CollectionsEndpointNS.Results.Images> {
		if (!options?.collectionID && !this.collectionID)
			throw new RequiredParameterError('collectionID');

		return this.client.get(
			`collection/${options?.collectionID ?? this.collectionID}/images`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}

	public async translations(
		options?: CollectionsEndpointNS.Options.Translations,
	): Promise<CollectionsEndpointNS.Results.Translations> {
		if (!options?.collectionID && !this.collectionID)
			throw new RequiredParameterError('collectionID');

		return this.client.get(
			`collection/${options?.collectionID ?? this.collectionID}/translations`,
			{ searchParams: { language: options?.language ?? this.language } },
		);
	}
}
