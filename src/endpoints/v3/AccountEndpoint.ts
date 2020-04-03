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
    this.language = options.language ?? 'en-US';
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
      rqst(`account/${options.id ?? -1}/lists`, { searchParams }),
    );

    return this;
  }

  public favoriteMovies(options: FavoriteMoviesOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'favoriteMovies',
      rqst(`account/${options.id}/favorite/movies`, { searchParams }),
    );

    return this;
  }

  public favoriteTVShows(options: FavoriteTVShowsOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'favoriteTVShows',
      rqst(`account/${options.id}/favorite/tv`, { searchParams }),
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
        `account/${options.id}/favorite`,
        {
          searchParams,
          json: {
            media_type: options.media_type,
            media_id: options.media_id,
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
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'ratedMovies',
      rqst(`account/${options.id}/rated/movies`, { searchParams }),
    );

    return this;
  }

  public ratedTVShows(options: RatedTVShowsOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'ratedTVShows',
      rqst(`account/${options.id}/rated/tv`, { searchParams }),
    );

    return this;
  }

  public ratedTVEpisodes(options: RatedTVEpisodesOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'ratedTVEpisodes',
      rqst(`account/${options.id}/rated/tv/episodes`, { searchParams }),
    );

    return this;
  }

  public movieWatchlist(options: MovieWatchlistOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'movieWatchlist',
      rqst(`account/${options.id}/watchlist/movies`, { searchParams }),
    );

    return this;
  }

  public tvShowWatchlist(options: TVShowWatchlistOptions): AccountEndpoint {
    const searchParams: SearchParametrs = {
      api_key: this.apiKey,
      session_id: options.sessionID ?? this.sessionID,
      language: options.language ?? this.language,
      page: options.page ?? 1,
      sort_by: options.sort_by ?? '',
    };

    this.addToExecutionList(
      'tvShowWatchlist',
      rqst(`account/${options.id}/watchlist/tv`, { searchParams }),
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
        `account/${options.id}/watchlist`,
        {
          searchParams,
          json: {
            media_type: options.media_type,
            media_id: options.media_id,
            watchlist: options.watchlist,
          },
        },
      ),
    );

    return this;
  }
}
