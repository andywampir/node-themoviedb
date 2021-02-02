import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	CollectionsDetailsOptions, CollectionsImagesOptions,
	CollectionsReturnType, CollectionsTranslationsOptions,
	CollectionsConstructorOptions,
} from '../../interfaces/v3/collections';
import { RequiredParameterError } from '../../errors';

export default class CollectionsEndpoint extends Executor<CollectionsReturnType> {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly collectionID?: number;

	public constructor(options: CollectionsConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.language = options.language;
		this.collectionID = options.collectionID;
	}

	public details(options?: CollectionsDetailsOptions): CollectionsEndpoint {
		if (!options?.collectionID && !this.collectionID)
			throw new RequiredParameterError('collectionID');

		this.addToExecutionList(
			'details',
			{
				uri: `collection/${options?.collectionID ?? this.collectionID}`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
				},
			},
		);

		return this;
	}

	public images(options?: CollectionsImagesOptions): CollectionsEndpoint {
		if (!options?.collectionID && !this.collectionID)
			throw new RequiredParameterError('collectionID');

		this.addToExecutionList(
			'images',
			{
				uri: `collection/${options?.collectionID ?? this.collectionID}`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
				},
			},
		);

		return this;
	}

	public translations(options?: CollectionsTranslationsOptions): CollectionsEndpoint {
		if (!options?.collectionID && !this.collectionID)
			throw new RequiredParameterError('collectionID');

		this.addToExecutionList(
			'translations',
			{
				uri: `collection/${options?.collectionID ?? this.collectionID}`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
				},
			},
		);

		return this;
	}
}
