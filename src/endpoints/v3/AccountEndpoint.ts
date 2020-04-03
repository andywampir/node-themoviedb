/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  AccountReturnType, CreatedListsOptions,
  FavoriteMoviesOptions, FavoriteTVShowsOptions,
  MarkAsFavoriteOptions, RatedMoviesOptions,
  RatedTVShowsOptions, RatedTVEpisodesOptions,
  MovieWatchlistOptions, TVShowWatchlistOptions,
  AddToWatchlistOptions, AccountConstructorOptions,
} from '../../interfaces/account';
import { SearchParametrs } from '../../interfaces/common';

export default class AccountEndpoint extends Executor<AccountReturnType> {
  private readonly apiKey: string;
  private readonly sessionID: string;
  private readonly language: string;

  public constructor(options: AccountConstructorOptions) {
    super();

    this.apiKey = options.apiKey;
    this.sessionID = options.sessionID;
    this.language = options.language as string;
  }

  public details(sessionID?: string): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: sessionID ?? this.sessionID,
    };

    this.addToExecutionList(
      'details',
      rqst('account', { searchParams }),
    );

    return this;
  }

  public createdLists(options: CreatedListsOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
    };

    this.addToExecutionList(
      'createdLists',
      rqst(`account/${options.userID}/lists`, { searchParams }),
    );

    return this;
  }

  public favoriteMovies(options: FavoriteMoviesOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'favoriteMovies',
      rqst(`account/${options.userID}/favorite/movies`, { searchParams }),
    );

    return this;
  }

  public favoriteTVShows(options: FavoriteTVShowsOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'favoriteTVShows',
      rqst(`account/${options.userID}/favorite/tv`, { searchParams }),
    );

    return this;
  }

  public markAsFavorite(options: MarkAsFavoriteOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
    };

    this.addToExecutionList(
      'markAsFavorite',
      rqst.post(
        `account/${options.userID}/favorite`,
        {
          searchParams,
          json: {
            media_type: options.mediaType,
            media_id: options.mediaID,
            favorite: options.favorite,
          },
        },
      ),
    );

    return this;
  }

  public ratedMovies(options: RatedMoviesOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'ratedMovies',
      rqst(`account/${options.userID}/rated/movies`, { searchParams }),
    );

    return this;
  }

  public ratedTVShows(options: RatedTVShowsOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'ratedTVShows',
      rqst(`account/${options.userID}/rated/tv`, { searchParams }),
    );

    return this;
  }

  public ratedTVEpisodes(options: RatedTVEpisodesOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'ratedTVEpisodes',
      rqst(`account/${options.userID}/rated/tv/episodes`, { searchParams }),
    );

    return this;
  }

  public movieWatchlist(options: MovieWatchlistOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'movieWatchlist',
      rqst(`account/${options.userID}/watchlist/movies`, { searchParams }),
    );

    return this;
  }

  public tvShowWatchlist(options: TVShowWatchlistOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sortBy ?? '',
    };

    this.addToExecutionList(
      'tvShowWatchlist',
      rqst(`account/${options.userID}/watchlist/tv`, { searchParams }),
    );

    return this;
  }

  public addToWatchlist(options: AddToWatchlistOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
    };

    this.addToExecutionList(
      'addToWatchlist',
      rqst.post(
        `account/${options.userID}/watchlist`,
        {
          searchParams,
          json: {
            media_type: options.mediaType,
            media_id: options.mediaID,
            watchlist: options.watchlist,
          },
        },
      ),
    );

    return this;
  }
}
