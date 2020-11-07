import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
  KeywordsReturnType, KeywordsConstructorOptions,
  KeywordsDetailsOptions, KeywordsMoviesOptions,
} from '../../interfaces/v3/keywords';
import { RequiredParameterError } from '../../errors';

export default class KeywordsEndpoint extends Executor<KeywordsReturnType> {
  private readonly apiKey: string;
  private readonly language: string;
  private readonly keywordID?: number;

  public constructor(options: KeywordsConstructorOptions) {
    super(client);

    this.apiKey = options.apiKey;
    this.keywordID = options.keywordID;
    this.language = options.language;
  }

  public details(options?: KeywordsDetailsOptions): KeywordsEndpoint {
    if (!options?.keywordID && !this.keywordID)
      throw new RequiredParameterError('keywordID');

    this.addToExecutionList(
      'details',
      {
        uri: `keyword/${options?.keywordID ?? this.keywordID}`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public movies(options?: KeywordsMoviesOptions): KeywordsEndpoint {
    if (!options?.keywordID && !this.keywordID)
      throw new RequiredParameterError('keywordID');

    this.addToExecutionList(
      'movies',
      {
        uri: `keyword/${options?.keywordID ?? this.keywordID}/movies`,
        searchParams: {
          api_key: this.apiKey,
          language: options?.language ?? this.language,
          include_adult: options?.includeAdult ?? null,
        },
      },
    );

    return this;
  }
}
