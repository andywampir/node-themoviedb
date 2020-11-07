import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
  ListsReturnType, ListsConstructorOptions,
  ListsDetailsOptions, ListsAddMovieOptions,
  ListsClearOptions, ListsCreateOptions,
  ListsItemStatusOptions, ListsRemoveMovieOptions,
  ListsDeleteOptions,
} from '../../interfaces/v3/lists';
import { RequiredParameterError } from '../../errors';

export default class ListsEndpoint extends Executor<ListsReturnType> {
  private readonly apiKey: string;
  private readonly language: string;
  private readonly sessionID?: string;
  private readonly listID?: number;

  public constructor(options: ListsConstructorOptions) {
    super(client);

    this.apiKey = options.apiKey;
    this.language = options.language;
    this.sessionID = options.sessionID;
    this.listID = options.listID;
  }

  public details(options: ListsDetailsOptions): ListsEndpoint {
    if (!options.listID && !this.listID)
      throw new RequiredParameterError('listID');

    this.addToExecutionList(
      'details',
      {
        uri: `list/${options.listID ?? this.listID}`,
        searchParams: {
          api_key: this.apiKey,
          language: options.language ?? this.language,
        },
      },
    );

    return this;
  }

  public itemStatus(options: ListsItemStatusOptions): ListsEndpoint {
    if (!options.listID && !this.listID)
      throw new RequiredParameterError('listID');
    if (!options.movieID)
      throw new RequiredParameterError('movieID');

    this.addToExecutionList(
      'itemStatus',
      {
        uri: `list/${options.listID ?? this.listID}/item_status`,
        searchParams: {
          api_key: this.apiKey,
          movie_id: options.movieID,
        },
      },
    );

    return this;
  }

  public create(options: ListsCreateOptions): ListsEndpoint {
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');

    this.addToExecutionList(
      'create',
      {
        uri: 'list',
        method: 'post',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID ?? null,
        },
        json: {
          name: options.name,
          description: options.description,
          language: options.language,
        },
      },
    );

    return this;
  }

  public addMovie(options: ListsAddMovieOptions): ListsEndpoint {
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options.listID && !this.listID)
      throw new RequiredParameterError('listID');
    if (!options.mediaID)
      throw new RequiredParameterError('mediaID');

    this.addToExecutionList(
      'addMovie',
      {
        uri: `list/${options.listID ?? this.listID}/add_item`,
        method: 'post',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID ?? null,
        },
        json: { media_id: options.mediaID },
      },
    );

    return this;
  }

  public removeMovie(options: ListsRemoveMovieOptions): ListsEndpoint {
    if (!options.listID && !this.listID)
      throw new RequiredParameterError('listID');
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options.mediaID)
      throw new RequiredParameterError('mediaID');

    this.addToExecutionList(
      'removeMovie',
      {
        uri: `list/${options.listID ?? this.listID}/add_item`,
        method: 'post',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID ?? null,
        },
        json: { media_id: options.mediaID },
      },
    );

    return this;
  }

  public clear(options: ListsClearOptions): ListsEndpoint {
    if (!options.listID && !this.listID)
      throw new RequiredParameterError('listID');
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!('confirm' in options))
      throw new RequiredParameterError('confirm');

    this.addToExecutionList(
      'clear',
      {
        uri: `list/${options.listID ?? this.listID}/clear`,
        method: 'post',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID ?? null,
          confirm: options.confirm,
        },
      },
    );

    return this;
  }

  public delete(options: ListsDeleteOptions): ListsEndpoint {
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options.listID && !this.listID)
      throw new RequiredParameterError('listID');

    this.addToExecutionList(
      'delete',
      {
        uri: `list/${options.listID ?? this.listID}`,
        method: 'delete',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID ?? null,
        },
      },
    );

    return this;
  }
}
