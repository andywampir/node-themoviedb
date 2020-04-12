/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  CollectionDetailsOptions, CollectionImagesOptions,
  CollectionReturnType, CollectionTranslationsOptions,
  CollectionConstructorOptions,
} from '../../interfaces/collection';
import { RequiredParameterError } from '../../errors';

export default class CollectionEndpoint extends Executor<CollectionReturnType> {
  private readonly apiKey: string;
  private readonly language: string;
  private readonly collectionID?: number;

  public constructor(options: CollectionConstructorOptions) {
    super(rqst);

    this.apiKey = options.apiKey;
    this.language = options.language;
    this.collectionID = options.collectionID;
  }

  public details(options?: CollectionDetailsOptions): CollectionEndpoint {
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

  public images(options?: CollectionImagesOptions): CollectionEndpoint {
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

  public translations(options?: CollectionTranslationsOptions): CollectionEndpoint {
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
