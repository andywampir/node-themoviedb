import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
  AccountReturnType, CreatedListsOptions,
  FavoriteMoviesOptions, FavoriteTVShowsOptions,
  MarkAsFavoriteOptions, RatedMoviesOptions,
  RatedTVShowsOptions, RatedTVEpisodesOptions,
  MovieWatchlistOptions, TVShowWatchlistOptions,
  AddToWatchlistOptions, AccountConstructorOptions,
} from '../../interfaces/v3/account';
import { RequiredParameterError } from '../../errors';

export default class AccountEndpoint extends Executor<AccountReturnType> {
  private readonly apiKey: string;
  private readonly language: string;
  private readonly sessionID?: string;
  private readonly userID?: number;

  public constructor(options: AccountConstructorOptions) {
    super(client);

    this.apiKey = options.apiKey;
    this.language = options.language as string;
    this.sessionID = options.sessionID;
    this.userID = options.userID;
  }

  public details(sessionID?: string): AccountEndpoint {
    if (!sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');

    this.addToExecutionList(
      'details',
      {
        uri: 'account',
        searchParams: {
          api_key: this.apiKey,
          session_id: sessionID ?? this.sessionID as string,
        },
      },
    );

    return this;
  }

  public createdLists(options?: CreatedListsOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'createdLists',
      {
        uri: `account/${options?.userID ?? this.userID}/lists`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
        },
      },
    );

    return this;
  }

  public favoriteMovies(options?: FavoriteMoviesOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'favoriteMovies',
      {
        uri: `account/${options?.userID ?? this.userID}/favorite/movies`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public favoriteTVShows(options?: FavoriteTVShowsOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'favoriteTVShows',
      {
        uri: `account/${options?.userID}/favorite/tv`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public markAsFavorite(options: MarkAsFavoriteOptions): AccountEndpoint {
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'markAsFavorite',
      {
        uri: `account/${options.userID ?? this.userID}/favorite`,
        method: 'post',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID as string,
        },
        json: {
          media_type: options.mediaType,
          media_id: options.mediaID,
          favorite: options.favorite,
        },
      },
    );

    return this;
  }

  public ratedMovies(options?: RatedMoviesOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'ratedMovies',
      {
        uri: `account/${options?.userID ?? this.userID}/rated/movies`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public ratedTVShows(options?: RatedTVShowsOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'ratedTVShows',
      {
        uri: `account/${options?.userID ?? this.userID}/rated/tv`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public ratedTVEpisodes(options?: RatedTVEpisodesOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'ratedTVEpisodes',
      {
        uri: `account/${options?.userID ?? this.userID}/rated/tv/episodes`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public movieWatchlist(options?: MovieWatchlistOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'movieWatchlist',
      {
        uri: `account/${options?.userID ?? this.userID}/watchlist/movies`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public tvShowWatchlist(options?: TVShowWatchlistOptions): AccountEndpoint {
    if (!options?.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options?.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'tvShowWatchlist',
      {
        uri: `account/${options?.userID ?? this.userID}/watchlist/tv`,
        searchParams: {
          api_key: this.apiKey,
          session_id: options?.sessionID ?? this.sessionID as string,
          language: options?.language ?? this.language,
          page: options?.page ?? 1,
          sort_by: options?.sortBy ?? null,
        },
      },
    );

    return this;
  }

  public addToWatchlist(options: AddToWatchlistOptions): AccountEndpoint {
    if (!options.sessionID && !this.sessionID)
      throw new RequiredParameterError('sessionID');
    if (!options.userID && !this.userID)
      throw new RequiredParameterError('userID');

    this.addToExecutionList(
      'addToWatchlist',
      {
        uri: `account/${options.userID ?? this.userID}/watchlist`,
        method: 'post',
        searchParams: {
          api_key: this.apiKey,
          session_id: options.sessionID ?? this.sessionID as string,
        },
        json: {
          media_type: options.mediaType,
          media_id: options.mediaID,
          watchlist: options.watchlist,
        },
      },
    );

    return this;
  }
}
