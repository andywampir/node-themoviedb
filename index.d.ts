import { IncomingHttpHeaders } from 'http2';

declare namespace MovieDB {
  namespace Objects {
    interface Movie {
      poster_path: string | null;
      adult: boolean;
      overview: string;
      release_date: string;
      genre_ids: number[];
      id: number;
      original_title: string;
      original_language: string;
      title: string;
      backdrop_path: string | null;
      popularity: number;
      vote_count: number;
      video: boolean;
      vote_average: number;
    }

    interface MovieWithRating extends Movie {
      rating: number;
    }

    interface MovieWithMediaType extends Movie {
      media_type: 'movie';
    }

    interface TVShow {
      poster_path: string | null;
      popularity: number;
      id: number;
      backdrop_path: string | null;
      vote_average: number;
      overview: string;
      first_air_date: string;
      origin_country: string[];
      genre_ids: number[];
      original_language: string;
      vote_count: number;
      name: string;
      original_name: string;
    }

    interface TVShowWithRating extends TVShow {
      rating: number;
    }

    interface TVShowWithMediaType extends TVShow {
      media_type: 'tv';
    }

    interface Status {
      status_code: number;
      status_message: string;
    }

    interface Image {
      aspect_ratio: number,
      file_path: string,
      height: number,
      iso_639_1: null,
      vote_average: number,
      vote_count: number,
      width: number,
    }

    interface Translation {
      iso_639_1: string,
      iso_3166_1: string,
      name: string,
      english_name: string,
      data: {
        title: string,
        overview: string,
        homepage: string,
      },
    }

    interface AccountStates {
      id: number;
      favorite: boolean;
      watchlist: boolean;
      rated: {
        value: number,
      } | boolean;
    }

    interface AlternativeTitles {
      id: number;
      titles: {
        iso_3166_1: string,
        title: string,
        type: string,
      }[];
    }

    interface ChangesTVShow {
      changes: {
        key: string,
        items: {
          id: string,
          action: string,
          time: string,
        }[],
      }[];
    }

    interface ChangesMovie {
      changes: {
        key: string,
        items: {
          id: string,
          action: string,
          time: string,
          iso_639_1: string,
          value: string,
          original_value: string,
        }[],
      }[];
    }

    interface MovieExternalIDs {
      imdb_id: string | null;
      facebook_id: string | null;
      instagram_id: string | null;
      twitter_id: string | null;
      id: number;
    }

    interface TVShowExternalIDs extends MovieExternalIDs {
      freebase_mid: string | null;
      freebase_id: string | null;
      tvdb_id: number | null;
      tvrage_id: number | null;
    }

    interface TVSeasonExternalIDs {
      freebase_mid: string | null;
      freebase_id: string | null;
      tvdb_id: number | null;
      tvrage_id: number | null;
      id: number;
    }

    interface TVEpisodeExternalIDs {
      imdb_id: string | null;
      freebase_mid: string | null;
      freebase_id: string | null;
      tvdb_id: number | null;
      tvrage_id: number | null;
      id: number;
    }

    interface Videos {
      id: number;
      results: {
        id: string,
        iso_639_1: string,
        iso_3166_1: string,
        key: string,
        name: string,
        site: string,
        size:
        | 360
        | 480
        | 720
        | 1080,
        type:
        | 'Trailer'
        | 'Teaser'
        | 'Clip'
        | 'Featurette'
        | 'Behind the Scenes'
        | 'Bloopers',
      }[];
    }

    interface Reviews {
      id: number;
      page: number;
      total_pages: number;
      total_results: number;
      results: {
        id: string,
        author: string,
        content: string,
        url: string,
      }[];
    }

    interface Person {
      profile_path: string | null;
      adult: boolean;
      id: number;
      known_for: (MovieWithMediaType | TVShowWithMediaType)[];
      name: string;
      popularity: number;
    }

    interface PersonWithMediaType extends Person {
      media_type: 'person';
    }

    interface Episode {
      air_date: string;
      episode_number: number;
      id: number;
      name: string;
      overview: string;
      production_code: string;
      season_number: number;
      show_id: number;
      still_path: string | null;
      vote_average: number;
      vote_count: number;
    }
  }

  namespace Endpoints {
    interface Account {
      getDetails(sessionID: string): Response<Responses.Account.GetDetails>;
      getCreatedList(args: Arguments.Account.GetCreatedList): Response<Responses.Account.GetCreatedList>;
      getFavoriteMovies(args: Arguments.Account.GetFavoriteMovies): Response<Responses.Account.GetFavoriteMovies>;
      getFavoriteTVShows(args: Arguments.Account.GetFavoriteTVShows): Response<Responses.Account.GetFavoriteTVShows>;
      markAsFavorite(args: Arguments.Account.MarkAsFavorite): Response<Responses.Account.MarkAsFavorite>;
      getRatedMovies(args: Arguments.Account.GetRatedMovies): Response<Responses.Account.GetRatedMovies>;
      getRatedTVShows(args: Arguments.Account.GetRatedTVShows): Response<Responses.Account.GetRatedTVShows>;
      getRatedTVEpisodes(args: Arguments.Account.GetRatedTVEpisodes): Response<Responses.Account.GetRatedTVEpisodes>;
      getMovieWatchlist(args: Arguments.Account.GetMovieWatchlist): Response<Responses.Account.GetMovieWatchlist>;
      getTVShowWatchlist(args: Arguments.Account.GetTVShowWatchlist): Response<Responses.Account.GetTVShowWatchlist>;
      addToWatchlist(args: Arguments.Account.AddToWatchlist): Response<Responses.Account.AddToWatchlist>;
    }

    interface Authentication {
      createGuestSession(): Response<Responses.Authentication.CreateGuestSession>;
      createRequestToken(): Response<Responses.Authentication.CreateRequestToken>;
      createSession(args: Arguments.Authentication.CreateSession): Response<Responses.Authentication.CreateSession>;
      createSessionWithLogin(args: Arguments.Authentication.CreateSessionWithLogin): Response<Responses.Authentication.CreateSessionWithLogin>;
      createSessionFromAccessToken(args: Arguments.Authentication.CreateSessionFromAccessToken): Response<Responses.Authentication.CreateSessionFromAccessToken>;
      deleteSession(args: Arguments.Authentication.DeleteSession): Response<Responses.Authentication.DeleteSession>;
    }

    interface Certification {
      getMovieCertifications(): Response<Responses.Certification.GetMovieCertifications>;
      getTVCertifications(): Response<Responses.Certification.GetTVCertifications>;
    }

    interface Collection {
      getDetails(args: Arguments.Collection.GetDetails): Response<Responses.Collection.GetDetails>;
      getImages(args: Arguments.Collection.GetImages): Response<Responses.Collection.GetImages>;
      getTranslations(args: Arguments.Collection.GetTranslations): Response<Responses.Collection.GetTranslations>;
    }

    interface Company {
      getDetails(args: Arguments.Company.Common): Response<Responses.Company.GetDetails>;
      getAlternativeNames(args: Arguments.Company.Common): Response<Responses.Company.GetAlternativeNames>;
      getImages(args: Arguments.Company.Common): Response<Responses.Company.GetImages>;
    }

    interface Configuration {
      getAPIConfiguration(): Response<Responses.Configuration.GetAPIConfiguration>;
      getCountries(): Response<Responses.Configuration.GetCountries[]>;
      getJobs(): Response<Responses.Configuration.GetJobs[]>;
      getLanguages(): Response<Responses.Configuration.GetLanguages[]>;
      getPrimaryTranslations(): Response<string[]>;
      getTimezones(): Response<Responses.Configuration.GetTimezones[]>;
    }

    interface Credit {
      getDetails(args: Arguments.Credit.GetDetails): Response<Responses.Credit.GetDetails>;
    }

    interface Discover {
      movie(args: Arguments.Discover.Movie): Response<Responses.Discover.Movie>;
      tv(args: Arguments.Discover.TV): Response<Responses.Discover.TV>;
    }

    interface Find {
      byExternalID(args: Arguments.Find.ByID): Response<Responses.Find.ByExternalID>;
    }

    interface Genre {
      getMovieList(): Response<Responses.Genre.Common>;
      getTVList(): Response<Responses.Genre.Common>;
    }

    interface GuestSession {
      getRatedMovies(args: Arguments.GuestSession.Common): Response<Responses.GuestSession.GetRatedMovies>;
      getRatedTVShows(args: Arguments.GuestSession.Common): Response<Responses.GuestSession.GetRatedTVShows>;
      getRatedTVEpisodes(args: Arguments.GuestSession.Common): Response<Responses.GuestSession.GetRatedTVEpisodes>;
    }

    interface Keyword {
      getDetails(args: Arguments.Keyword.GetDetails): Response<Responses.Keyword.GetDetails>;
      getMovies(args: Arguments.Keyword.GetMovies): Response<Responses.Keyword.GetMovies>;
    }

    interface List {
      getDetails(args: Arguments.List.GetDetails): Response<Responses.List.GetDetails>;
      checkItemStatus(args: Arguments.List.CheckItemStatus): Response<Responses.List.CheckItemStatus>;
      createList(args: Arguments.List.CreateList): Response<Responses.List.CreateList>;
      addMovie(args: Arguments.List.AddMovie): Response<Responses.List.AddMovie>;
      removeMovie(args: Arguments.List.RemoveMovie): Response<Responses.List.RemoveMovie>;
      clearList(args: Arguments.List.ClearList): Response<Responses.List.ClearList>;
      deleteList(args: Arguments.List.DeleteList): Response<Responses.List.DeleteList>;
    }

    interface Movie {
      getDetails(args: Arguments.Movie.GetDetails): Response<Responses.Movie.GetDetails>;
      getAccountStates(args: Arguments.Movie.GetAccountStates): Response<Responses.Movie.GetAccountStates>;
      getAlternativeTitles(args: Arguments.Movie.GetAlternativeTitles): Response<Responses.Movie.GetAlternativeTitles>;
      getChanges(args: Arguments.Movie.GetChanges): Response<Responses.Movie.GetChanges>;
      getCredits(args: Arguments.Movie.GetCredits): Response<Responses.Movie.GetCredits>;
      getExternalIDs(args: Arguments.Movie.GetExternalIDs): Response<Responses.Movie.GetExternalIDs>;
      getImages(args: Arguments.Movie.GetImages): Response<Responses.Movie.GetImages>;
      getKeywords(args: Arguments.Movie.GetKeywords): Response<Responses.Movie.GetKeywords>;
      getReleaseDates(args: Arguments.Movie.GetReleaseDates): Response<Responses.Movie.GetReleaseDates>;
      getVideos(args: Arguments.Movie.GetVideos): Response<Responses.Movie.GetVideos>;
      getTranslations(args: Arguments.Movie.GetTranslations): Response<Responses.Movie.GetTranslations>;
      getRecommendations(args: Arguments.Movie.GetRecommendations): Response<Responses.Movie.GetRecommendations>;
      getSimilarMovies(args: Arguments.Movie.GetSimilarMovies): Response<Responses.Movie.GetSimilarMovies>;
      getReviews(args: Arguments.Movie.GetReviews): Response<Responses.Movie.GetReviews>;
      getLists(args: Arguments.Movie.GetLists): Response<Responses.Movie.GetLists>;
      rateMovie(args: Arguments.Movie.RateMovie): Response<Responses.Movie.RateMovie>;
      deleteRating(args: Arguments.Movie.DeleteRating): Response<Responses.Movie.DeleteRating>;
      getLatest(): Response<Responses.Movie.GetLatest>;
      getNowPlaying(args: Arguments.Movie.GetNowPlaying): Response<Responses.Movie.GetNowPlaying>;
      getPopular(args: Arguments.Movie.GetPopular): Response<Responses.Movie.GetPopular>;
      getTopRated(args: Arguments.Movie.GetTopRated): Response<Responses.Movie.GetTopRated>;
      getUpcoming(args: Arguments.Movie.GetUpcoming): Response<Responses.Movie.GetUpcoming>;
      getChangeList(args: Arguments.Movie.GetChangeList): Response<Responses.Movie.GetChangeList>;
    }

    interface Network {
      getDetails(args: Arguments.Network.GetDetails): Response<Responses.Network.GetDetails>;
      getAlternativeNames(args: Arguments.Network.GetAlternativeNames): Response<Responses.Network.GetAlternativeNames>;
      getImages(args: Arguments.Network.GetImages): Response<Responses.Network.GetImages>;
    }

    interface Trending {
      getTrending(args: Arguments.Trending.GetTrending): Response<Responses.Trending.GetTrending>;
    }

    interface Person {
      getDetails(args: Arguments.Person.GetDetails): Response<Responses.Person.GetDetails>;
      getChanges(args: Arguments.Person.GetChanges): Response<Responses.Person.GetChanges>;
      getMovieCredits(args: Arguments.Person.GetMovieCredits): Response<Responses.Person.GetMovieCredits>;
      getTVCredits(args: Arguments.Person.GetTVCredits): Response<Responses.Person.GetTVCredits>;
      getCombinedCredits(args: Arguments.Person.GetCombinedCredits): Response<Responses.Person.GetCombinedCredits>;
      getExternalIDs(args: Arguments.Person.GetExternalIDs): Response<Responses.Person.GetExternalIDs>;
      getImages(args: Arguments.Person.GetImages): Response<Responses.Person.GetImages>;
      getTaggedImages(args: Arguments.Person.GetTaggedImages): Response<Responses.Person.GetTaggedImages>;
      getTranslations(args: Arguments.Person.GetTranslations): Response<Responses.Person.GetTranslations>;
      getLatest(): Response<Responses.Person.GetLatest>;
      getPopular(args: Arguments.Person.GetPopular): Response<Responses.Person.GetPopular>;
      getChangeList(args: Arguments.Person.GetChangeList): Response<Responses.Person.GetChangeList>;
    }

    interface Review {
      getDetails(args: Arguments.Review.GetDetails): Response<Responses.Review.GetDetails>;
    }

    interface Search {
      companies(args: Arguments.Search.Companies): Response<Responses.Search.Companies>;
      collections(args: Arguments.Search.Collections): Response<Responses.Search.Collections>;
      keywords(args: Arguments.Search.Keywords): Response<Responses.Search.Keywords>;
      movies(args: Arguments.Search.Movies): Response<Responses.Search.Movies>;
      multi(args: Arguments.Search.Multi): Response<Responses.Search.Multi>;
      people(args: Arguments.Search.People): Response<Responses.Search.People>;
      TVShows(args: Arguments.Search.TVShows): Response<Responses.Search.TVShows>;
    }

    interface TV {
      getDetails(args: Arguments.TV.GetDetails): Response<Responses.TV.GetDetails>;
      getAccountStates(args: Arguments.TV.GetAccountStates): Response<Responses.TV.GetAccountStates>;
      getAlternativeTitles(args: Arguments.TV.GetAlternativeTitles): Response<Responses.TV.GetAlternativeTitles>;
      getChanges(args: Arguments.TV.GetChanges): Response<Responses.TV.GetChanges>;
      getContentRatings(args: Arguments.TV.GetContentRatings): Response<Responses.TV.GetContentRatings>;
      getCredits(args: Arguments.TV.GetCredits): Response<Responses.TV.GetCredits>;
      getEpisodeGroups(args: Arguments.TV.GetEpisodeGroups): Response<Responses.TV.GetEpisodeGroups>;
      getExternalIDs(args: Arguments.TV.GetExternalIDs): Response<Responses.TV.GetExternalIDs>;
      getImages(args: Arguments.TV.GetImages): Response<Responses.TV.GetImages>;
      getKeywords(args: Arguments.TV.GetKeywords): Response<Responses.TV.GetKeywords>;
      getRecommendations(args: Arguments.TV.GetRecommendations): Response<Responses.TV.GetRecommendations>;
      getReviews(args: Arguments.TV.GetReviews): Response<Responses.TV.GetReviews>;
      getScreenedTheatrically(args: Arguments.TV.GetScreenedTheatrically): Response<Responses.TV.GetScreenedTheatrically>;
      getSimilarTVShows(args: Arguments.TV.GetSimilarTVShows): Response<Responses.TV.GetSimilarTVShows>;
      getTranslations(args: Arguments.TV.GetTranslations): Response<Responses.TV.GetTranslations>;
      getVideos(args: Arguments.TV.GetVideos): Response<Responses.TV.GetVideos>;
      rateTVShow(args: Arguments.TV.RateTVShow): Response<Responses.TV.RateTVShow>;
      deleteRating(args: Arguments.TV.DeleteRating): Response<Responses.TV.DeleteRating>;
      getLatest(): Response<Responses.TV.GetLatest>;
      getAiringToday(args: Arguments.TV.GetAiringToday): Response<Responses.TV.GetAiringToday>;
      getOnAir(args: Arguments.TV.GetOnAir): Response<Responses.TV.GetOnAir>;
      getPopular(args: Arguments.TV.GetPopular): Response<Responses.TV.GetPopular>;
      getTopRated(args: Arguments.TV.GetTopRated): Response<Responses.TV.GetTopRated>;
      getChangeList(args: Arguments.TV.GetChangeList): Response<Responses.TV.GetChangeList>;
      season: {
        getDetails(args: Arguments.TV.Season.GetDetails): Response<Responses.TV.Season.GetDetails>,
        getChanges(args: Arguments.TV.Season.GetChanges): Response<Responses.TV.Season.GetChanges>,
        getAccountStates(args: Arguments.TV.Season.GetAccountStates): Response<Responses.TV.Season.GetAccountStates>,
        getCredits(args: Arguments.TV.Season.GetCredits): Response<Responses.TV.Season.GetCredits>,
        getExternalIDs(args: Arguments.TV.Season.GetExternalIDs): Response<Responses.TV.Season.GetExternalIDs>,
        getImages(args: Arguments.TV.Season.GetImages): Response<Responses.TV.Season.GetImages>,
        getVideos(args: Arguments.TV.Season.GetVideos): Response<Responses.TV.Season.GetVideos>,
      };
      episode: {
        getDetails(args: Arguments.TV.Episode.GetDetails): Response<Responses.TV.Episode.GetDetails>;
        getChanges(args: Arguments.TV.Episode.GetChanges): Response<Responses.TV.Episode.GetChanges>;
        getAccountStates(args: Arguments.TV.Episode.GetAccountStates): Response<Responses.TV.Episode.GetAccountStates>;
        getCredits(args: Arguments.TV.Episode.GetCredits): Response<Responses.TV.Episode.GetCredits>;
        getExternalIDs(args: Arguments.TV.Episode.GetExternalIDs): Response<Responses.TV.Episode.GetExternalIDs>;
        getImages(args: Arguments.TV.Episode.GetImages): Response<Responses.TV.Episode.GetImages>;
        getTranslations(args: Arguments.TV.Episode.GetTranslations): Response<Responses.TV.Episode.GetTranslations>;
        rateTVEpisode(args: Arguments.TV.Episode.RateTVEpisode): Response<Responses.TV.Episode.RateTVEpisode>;
        deleteRating(args: Arguments.TV.Episode.DeleteRating): Response<Responses.TV.Episode.DeleteRating>;
        getVideos(args: Arguments.TV.Episode.GetVideos): Response<Responses.TV.Episode.GetVideos>;
      };
      group: {
        getDetails(args: Arguments.TV.Group.GetDetails): Response<Responses.TV.Group.GetDetails>;
      };
    }
  }

  namespace Arguments {
    namespace Account {
      interface GetCreatedList {
        query: {
          session_id: string,
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface GetFavoriteMovies {
        query: {
          session_id: string,
          sort_by?: 'created_at.asc' | 'created_at.desc',
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface GetFavoriteTVShows {
        query: {
          session_id: number | string,
          sort_by?: 'created_at.asc' | 'created_at.desc',
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface MarkAsFavorite {
        query: {
          session_id: string,
        };
        pathParameters: {
          account_id: number | string,
        };
        body: {
          media_type: 'movie' | 'tv',
          media_id: number,
          favorite: boolean,
        };
      }

      interface GetRatedMovies {
        query: {
          session_id: string,
          sort_by?: 'created_at.asc' | 'created_at.desc',
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface GetRatedTVShows {
        query: {
          session_id: string,
          sort_by?: 'created_at.asc' | 'created_at.desc',
          page?: number,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface GetRatedTVEpisodes {
        query: {
          session_id: string,
          sort_by?: 'created_at.asc' | 'created_at.desc',
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface GetMovieWatchlist {
        query: {
          session_id: string,
          sort_by?: 'created_at.asc' | 'created_at.desc';
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface GetTVShowWatchlist {
        query: {
          session_id: string,
          sort_by?: 'created_at.asc' | 'created_at.desc',
          page?: number | string,
        };
        pathParameters: {
          account_id: number | string,
        };
      }

      interface AddToWatchlist {
        query: {
          session_id: string,
        };
        pathParameters: {
          account_id: number | string,
        };
        body: {
          media_type: 'movie' | 'tv',
          media_id: number,
          watchlist: boolean,
        };
      }
    }

    namespace Authentication {
      interface CreateSession {
        body: {
          request_token: string,
        };
      }

      interface CreateSessionWithLogin {
        body: {
          username: string,
          password: string,
          request_token: string,
        };
      }

      interface CreateSessionFromAccessToken {
        body: {
          access_token: string,
        };
      }

      interface DeleteSession {
        body: {
          session_id: string,
        };
      }
    }

    namespace Collection {
      interface GetDetails {
        pathParameters: {
          collection_id: number | string,
        };
      }

      interface GetImages {
        pathParameters: {
          collection_id: number | string,
        };
      }

      interface GetTranslations {
        pathParameters: {
          collection_id: number | string,
        };
      }
    }

    namespace Company {
      interface Common {
        pathParamaters: {
          company_id: number | string,
        };
      }
    }

    namespace Credit {
      interface GetDetails {
        pathParameters: {
          credit_id: string,
        };
      }
    }

    namespace Discover {
      interface Movie {
        query?: {
          region?: string,
          sort_by?:
          | 'popularity.asc' | 'popularity.desc'
          | 'release_date.asc' | 'release_date.desc'
          | 'revenue.asc' | 'revenue.desc'
          | 'primary_release_date.asc' | 'primary_release_date.desc'
          | 'original_title.asc' | 'original_title.desc'
          | 'vote_average.asc' | 'vote_average.desc'
          | 'vote_count.asc' | 'vote_count.desc',
          certification_country?: string,
          certification?: string,
          'certification.let'?: string,
          include_adult?: boolean,
          include_video?: boolean,
          page?: number | string,
          primary_release_year?: number | string,
          'primary_release_date.lte'?: string,
          'primary_release_date.gte'?: string,
          'release_date.gte'?: string,
          'release_date.lte'?: string,
          'vote_count.gte'?: number | string,
          'vote_count.lte'?: number | string,
          'vote_average.gte'?: number | string,
          'vote_average.lte'?: number | string,
          with_cast?: string,
          with_crew?: string,
          with_companies?: string,
          with_genres?: string,
          with_keywords?: string,
          with_people?: string,
          year?: number | string,
          without_genres?: string,
          'with_runtime.gte'?: number | string,
          'with_runtime.lte'?: number | string,
          with_release_type?: string,
          with_original_language?: string,
          without_keywords?: string,
        };
      }

      interface TV {
        query?: {
          'vote_average.gte'?: number | string,
          'vote_average.lte'?: number | string,
          with_genres?: string,
          without_genres?: string,
          'with_runtime.gte'?: number | string,
          'with_runtime.lte'?: number | string,
          with_original_language?: string,
          without_keywords?: string,
          with_companies?: string,
          sort_by?:
          | 'vote_average.asc' | 'vote_average.desc'
          | 'first_air_date.asc' | 'first_air_date.desc'
          | 'popularity.asc' | 'popularity.desc',
          'air_date.gte'?: string,
          'air_date.lte'?: string,
          'first_air_date.gte'?: string,
          'first_air_date.lte'?: string,
          first_air_date_year?: number | string,
          page?: number | string,
          timezone?: string,
          with_networks?: string,
          include_null_first_air_dates?: boolean,
          screened_theatrically?: boolean,
        };
      }
    }

    namespace Find {
      interface ByID {
        query: {
          external_source:
          | 'imdb_id'
          | 'freebase_mid'
          | 'freebase_id'
          | 'tvdb_id'
          | 'tvrage_id'
          | 'facebook_id'
          | 'twitter_id'
          | 'instagram_id',
        };
        pathParameters: {
          external_id: string,
        };
      }
    }

    namespace GuestSession {
      interface Common {
        query?: {
          sort_by?: 'created_at.asc' | 'created_at.desc',
        };
        pathParameters: {
          guest_session_id: string,
        };
      }
    }

    namespace Keyword {
      interface GetDetails {
        pathParameters: {
          keyword_id: number | string,
        };
      }

      interface GetMovies extends GetDetails {
        query?: {
          include_adult?: boolean,
        };
      }
    }

    namespace List {
      interface Common {
        pathParameters: {
          list_id: number | string,
        };
      }

      interface GetDetails extends Common {}

      interface CheckItemStatus extends Common {
        query: {
          movie_id: number,
        };
      }

      interface CreateList {
        query: {
          session_id: string,
        };
        body: {
          name?: string,
          description?: string,
          language?: string,
        };
      }

      interface AddMovie {
        query: {
          session_id: string,
        };
        pathParameters: {
          list_id: number | string,
        };
        body: {
          media_id: number,
        };
      }

      interface RemoveMovie extends AddMovie {}

      interface ClearList {
        query: {
          session_id: string,
          confirm: boolean,
        };
        pathParameters: {
          list_id: number | string,
        };
      }

      interface DeleteList {
        query: {
          session_id: string,
        };
        pathParameters: {
          list_id: number | string,
        };
      }
    }

    namespace Movie {
      interface Common {
        pathParameters: {
          movie_id: number | string,
        };
      }

      interface GetDetails extends Common {
        query?: {
          append_to_response?: string,
        };
      }

      interface GetAccountStates extends Common {
        query: {
          session_id?: string,
          guest_session_id?: string,
        };
      }

      interface GetAlternativeTitles extends Common {
        query?: {
          country?: string,
        };
      }

      interface GetChanges extends Common {
        query?: {
          start_date?: string,
          end_date?: string,
          page?: number | string,
        };
      }

      interface GetCredits extends Common {}

      interface GetExternalIDs extends Common {}

      interface GetImages extends Common {
        query?: {
          include_image_language?: string,
        };
      }

      interface GetKeywords extends Common {}

      interface GetReleaseDates extends Common {}

      interface GetVideos extends Common {}

      interface GetTranslations extends Common {}

      interface GetRecommendations extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetSimilarMovies extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetReviews extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetLists extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface RateMovie extends Common {
        query?: {
          guest_session_id?: string,
          session_id?: string,
        };
        body: {
          value: number,
        };
      }

      interface DeleteRating extends Common {
        query?: {
          guest_session_id?: string,
          session_id?: string,
        };
      }

      interface GetNowPlaying {
        query?: {
          page?: number | string,
          region?: string,
        };
      }

      interface GetPopular extends GetNowPlaying {}

      interface GetTopRated extends GetNowPlaying {}

      interface GetUpcoming extends GetNowPlaying {}

      interface GetChangeList {
        query?: {
          end_date?: string,
          start_date?: string,
          page?: number | string,
        };
      }
    }

    namespace Network {
      interface Common {
        pathParameters: {
          network_id: number | string,
        };
      }

      interface GetDetails extends Common {}

      interface GetAlternativeNames extends Common {}

      interface GetImages extends Common {}
    }

    namespace Trending {
      interface GetTrending {
        pathParameters: {
          media_type:
          | 'all'
          | 'movie'
          | 'tv'
          | 'person',
          time_window:
          | 'day'
          | 'week',
        };
      }
    }

    namespace Person {
      interface Common {
        pathParameters: {
          person_id: number,
        };
      }

      interface GetDetails extends Common {
        query?: {
          language?: string,
          append_to_response?: string,
        };
      }

      interface GetChanges extends Common {
        query?: {
          end_date?: string,
          start_date?: string,
          page?: number | string,
        };
      }

      interface GetMovieCredits extends Common {}

      interface GetTVCredits extends Common {}

      interface GetCombinedCredits extends Common {}

      interface GetExternalIDs extends Common {}

      interface GetImages extends Common {}

      interface GetTaggedImages extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetTranslations extends Common {}

      interface GetPopular {
        query?: {
          page?: number | string,
        };
      }

      interface GetChangeList {
        query?: {
          end_date?: string,
          start_date?: string,
          page?: number | string,
        };
      }
    }

    namespace Review {
      interface GetDetails {
        pathParameters: {
          review_id: string,
        };
      }
    }

    namespace Search {
      interface Companies {
        query: {
          query: string,
          page?: number | string,
        };
      }

      interface Collections {
        query: {
          query: string,
          page?: number | string,
        };
      }

      interface Keywords {
        query: {
          query: string,
          page?: number | string,
        };
      }

      interface Movies {
        query: {
          query: string,
          page?: number | string,
          include_adult?: boolean,
          region?: string,
          year?: number,
          primary_release_year?: number
        };
      }

      interface Multi {
        query: {
          query: string,
          page?: number | string,
          include_adult?: boolean,
          region?: string,
        };
      }

      interface People {
        query: {
          query: string,
          page?: number | string,
          include_adult?: boolean,
          region?: string,
        };
      }

      interface TVShows {
        query: {
          query: string,
          page?: number | string,
          first_air_date?: number | string,
        };
      }
    }

    namespace TV {
      interface Common {
        pathParameters: {
          tv_id: number | string,
        };
      }

      interface GetDetails extends Common {
        query?: {
          append_to_response?: string,
        };
      }

      interface GetAccountStates extends Common {
        query?: {
          guest_session_id?: string,
          session_id?: string,
        };
      }

      interface GetAlternativeTitles extends Common {
        query?: {
          country?: string,
        };
      }

      interface GetChanges extends Common {
        query?: {
          start_date?: string,
          end_date?: string,
          page?: number | string,
        };
      }

      interface GetContentRatings extends Common {}

      interface GetCredits extends Common {}

      interface GetEpisodeGroups extends Common {}

      interface GetExternalIDs extends Common {}

      interface GetImages extends Common {}

      interface GetKeywords extends Common {}

      interface GetRecommendations extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetReviews extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetScreenedTheatrically extends Common {}

      interface GetSimilarTVShows extends Common {
        query?: {
          page?: number | string,
        };
      }

      interface GetTranslations extends Common {}

      interface GetVideos extends Common {}

      interface RateTVShow extends Common {
        query?: {
          guest_session_id?: string,
          session_id?: string,
        };
        body: {
          value: number,
        };
      }

      interface DeleteRating extends Common {
        query?: {
          guest_session_id?: string,
          session_id?: string,
        };
      }

      interface GetAiringToday {
        query?: {
          page?: number | string,
        };
      }

      interface GetOnAir extends GetAiringToday {}

      interface GetPopular extends GetAiringToday {}

      interface GetTopRated extends GetAiringToday {}

      interface GetChangeList {
        query?: {
          start_date?: string,
          end_date?: string,
          page?: number | string,
        };
      }

      namespace Season {
        interface Common {
          pathParameters: {
            tv_id: number | string,
            season_number: number | string,
          };
        }

        interface GetDetails extends Common {
          query?: {
            append_to_response?: string,
          };
        }

        interface GetChanges {
          pathParameters: {
            season_id: number | string,
          };
          query?: {
            start_date?: string,
            end_date?: string,
            page?: number | string,
          };
        }

        interface GetAccountStates extends Common {
          query?: {
            guest_session_id?: string,
            session_id?: string,
          };
        }

        interface GetCredits extends Common {}

        interface GetExternalIDs extends Common {}

        interface GetImages extends Common {}

        interface GetVideos extends Common {}
      }

      namespace Episode {
        interface Common {
          tv_id: number | string;
          season_number: number | string;
          episode_number: number | string;
        }

        interface GetDetails extends Common {
          query?: {
            append_to_response?: string,
          };
        }

        interface GetChanges {
          pathParameters: {
            episode_id: number | string,
          };
          query?: {
            start_date?: string,
            end_date?: string,
            page?: number | string,
          };
        }

        interface GetAccountStates extends Common {
          query?: {
            guest_session_id?: string,
            session_id?: string,
          }
        }

        interface GetCredits extends Common {}

        interface GetExternalIDs extends Common {}

        interface GetImages extends Common {}

        interface GetTranslations extends Common {}

        interface RateTVEpisode extends Common {
          query?: {
            guest_session_id?: string,
            session_id?: string,
          };
          body: {
            value: number,
          };
        }

        interface DeleteRating extends Common {
          query?: {
            guest_session_id?: string,
            session_id?: string,
          };
        }

        interface GetVideos extends Common {}
      }

      namespace Group {
        interface GetDetails {
          pathParameters: {
            id: string,
          };
        }
      }
    }
  }

  namespace Responses {
    interface ResponseWithPage {
      page: number;
      total_pages: number;
      total_results: number;
    }

    namespace Account {
      interface GetDetails {
        avatar: {
          gravatar: {
            hash: string,
          },
        };
        id: number;
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        include_adult: boolean;
        username: string;
      }

      interface GetCreatedList extends ResponseWithPage {
        results: {
          description: string,
          favorite_count: number,
          id: number,
          item_count: number,
          iso_639_1: string,
          list_type: string,
          name: string,
          poster_path: null,
        }[];
      }

      interface GetFavoriteMovies extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface GetFavoriteTVShows extends ResponseWithPage {
        results: Objects.TVShow[];
      }

      interface MarkAsFavorite extends Objects.Status {}

      interface GetRatedMovies extends ResponseWithPage {
        results: Objects.MovieWithRating[];
      }

      interface GetRatedTVShows extends ResponseWithPage {
        results: Objects.TVShowWithRating[];
      }

      interface GetRatedTVEpisodes extends ResponseWithPage {
        results: {
          air_date: string,
          episode_number: number,
          id: number,
          name: string,
          overview: string,
          production_code: string | null,
          season_number: number,
          show_id: number,
          still_path: string | null,
          vote_average: number,
          vote_count: number,
          rating: number,
        }[];
      }

      interface GetMovieWatchlist extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface GetTVShowWatchlist extends ResponseWithPage {
        results: Objects.TVShow[];
      }

      interface AddToWatchlist extends Objects.Status {}
    }

    namespace Authentication {
      interface CreateGuestSession {
        success: boolean;
        guest_session_id: string;
        expires_at: string;
      }

      interface CreateRequestToken {
        success: boolean;
        expires_at: string;
        request_token: string;
      }

      interface CreateSession {
        success: boolean;
        session_id: string;
      }

      interface CreateSessionWithLogin {
        success: boolean;
        expires_at: string;
        request_token: string;
      }

      interface CreateSessionFromAccessToken {
        success: boolean;
        session_id: string;
      }

      interface DeleteSession {
        success: boolean;
      }
    }

    namespace Certification {
      interface Certification {
        certification: string;
        meaning: string;
        order: number;
      }

      interface GetMovieCertifications {
        certifications: {
          US: Certification,
          CA: Certification,
          DE: Certification,
          GB: Certification,
          AU: Certification,
          BR: Certification,
          FR: Certification,
          NZ: Certification,
          IN: Certification,
        };
      }

      interface GetTVCertifications {
        sertifications: {
          US: Certification,
          CA: Certification,
          AU: Certification,
          FR: Certification,
          RU: Certification,
          DE: Certification,
          TH: Certification,
          KR: Certification,
          GB: Certification,
          BR: Certification,
        };
      }
    }

    namespace Collection {
      interface GetDetails {
        id: number;
        name: string;
        overview: string;
        poster_path: null;
        backdrop_path: string;
        parts: {
          adult: boolean,
          backdrop_path: null,
          original_language: string,
          original_title: string,
          overview: string,
          release_date: string,
          poster_path: string,
          popularity: number,
          title: string,
          video: boolean,
          vote_average: number,
          vote_count: number,
        }[];
      }

      interface GetImages {
        id: number;
        backdrops: Objects.Image[];
        posters: Objects.Image[];
      }

      interface GetTranslations {
        id: number;
        translations: Objects.Translation[];
      }
    }

    namespace Company {
      interface Company {
        description: string;
        headquarters: string;
        homepage: string;
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
        parent_company: Company | null;
      }

      interface GetDetails extends Company {}

      interface GetAlternativeNames {
        id: number;
        results: {
          name: string,
          type: string,
        }[];
      }

      interface GetImages {
        id: number;
        logos: {
          aspect_ration: number,
          file_path: string,
          height: number,
          id: number,
          file_type: '.svg' | '.png',
          vote_average: number,
          vote_count: number,
          width: number,
        }[];
      }
    }

    namespace Configuration {
      interface GetAPIConfiguration {
        images: {
          base_url: string,
          secure_base_url: string,
          backdrop_sizes: string[],
          logo_sizes: string[],
          poster_sizes: string[],
          profile_sizes: string[],
          still_sizes: string,
        };
        change_keys: string[];
      }

      interface GetCountries {
        iso_3166_1: string;
        english_name: string;
      }

      interface GetJobs {
        department: string;
        jobs: string[];
      }

      interface GetLanguages {
        iso_639_1: string;
        english_name: string;
        name: string;
      }

      interface GetTimezones {
        iso_3166_1: string;
        zones: string[];
      }
    }

    namespace Credit {
      type GetDetails = GetDetailsForTV | GetDetailsForMovie;

      interface GetDetailsCommon {
        credit_type: string;
        department: string;
        job: string;
        id: string;
        person: {
          adult: boolean,
          gender: number,
          name: string,
          id: number,
          known_for: {
            original_name: string,
            id: number,
            name: string,
            vote_count: number,
            vote_average: number,
            first_air_date: string,
            poster_path: string | null,
            genre_ids: number[],
            original_language: string,
            backdrop_path: string | null,
            overview: string,
            origin_country: string[],
            popularity: number,
            media_type: 'movie' | 'tv',
          }[],
          known_for_department: string,
          profile_path: string,
          popularity: number,
        };
      }

      interface GetDetailsForTV extends GetDetailsCommon {
        media: {
          id: number,
          original_language: string,
          overview: string,
          backdrop_path: string | null,
          poster_path: string | null,
          vote_count: number,
          vote_average: number,
          popularity: number,
          original_name: string,
          name: string,
          first_air_date: string,
          genre_ids: number[],
          origin_country: string[],
          episodes: object[], // TODO
          seasons: {
            air_date: string,
            episode_count: number,
            id: number,
            name: string,
            overview: string,
            poster_path: string | null,
            season_number: number,
            show_id: number,
          }[],
        };
        media_type: 'tv';
      }

      interface GetDetailsForMovie extends GetDetailsCommon {
        media: {
          id: number,
          original_language: string,
          overview: string,
          backdrop_path: string | null,
          poster_path: string | null,
          vote_count: number,
          vote_average: number,
          popularity: number,
          adult: boolean,
          genre_ids: number[],
          original_title: string,
          release_date: string,
          title: string,
          video: boolean,
          character: string,
        };
        media_type: 'movie';
      }
    }

    namespace Discover {
      interface Movie extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface TV extends ResponseWithPage {
        results: Objects.TVShow[];
      }
    }

    namespace Find {
      type ByExternalID =
      | ByExternalIDMovie
      | ByExternalIDTV
      | ByExternalIDTVEpisode
      | ByExternalIDPerson

      interface ByExternalIDTV {
        tv_results: Objects.TVShow[];
      }

      interface ByExternalIDTVSeason {} // TODO

      interface ByExternalIDMovie {
        movie_results: Objects.Movie[];
      }

      interface ByExternalIDTVEpisode {
        tv_episode_results: {
          air_date: string,
          episode_number: number,
          id: number,
          name: string,
          overview: string,
          production_code: string | null,
          season_number: number,
          show_id: number,
          still_path: string | null,
          vote_average: number,
          vote_count: number,
        }[];
      }

      interface ByExternalIDPerson {
        person_results: {
          adult: boolean,
          gender: number,
          name: string,
          id: number,
          known_for: Objects.MovieWithMediaType[] | Objects.TVShowWithMediaType[],
          known_for_department: string,
          profile_path: string | null,
          popularity: number,
        }[];
      }
    }

    namespace Genre {
      interface Common {
        genres: {
          id: number,
          name: string,
        }[];
      }
    }

    namespace GuestSession {
      interface GetRatedMovies extends ResponseWithPage {
        results: Objects.MovieWithRating[];
      }

      interface GetRatedTVShows extends ResponseWithPage {
        results: Objects.TVShowWithRating[];
      }

      interface GetRatedTVEpisodes extends ResponseWithPage {
        results: {
          air_date: string,
          episode_number: number,
          id: number,
          name: string,
          overview: string,
          production_code: string | null,
          season_number: number,
          show_id: number,
          still_path: string | null,
          vote_average: number,
          vote_count: number,
          rating: number,
        }[];
      }
    }

    namespace Keyword {
      interface GetDetails {
        id: number,
        name: string,
      }

      interface GetMovies extends ResponseWithPage {
        id: number;
        results: Objects.Movie[];
      }
    }

    namespace List {
      interface GetDetails {
        created_by: string;
        description: string;
        favorite_count: number;
        id: string;
        item_count: number;
        iso_639_1: string;
        name: string;
        poster_path: string | null;
        items: Objects.Movie[];
      }

      interface CheckItemStatus {
        id: string,
        item_present: boolean,
      }

      interface CreateList extends Objects.Status {
        success: boolean;
        lsit_id: number;
      }

      interface AddMovie extends Objects.Status {}

      interface RemoveMovie extends Objects.Status {}

      interface ClearList extends Objects.Status {}

      interface DeleteList extends Objects.Status {}
    }

    namespace Movie {
      interface Image {
        aspect_ratio: number,
        file_path: string,
        height: number,
        iso_639_1: string | null,
        vote_average: number,
        vote_count: number,
        width: number,
      }

      interface GetDetails {
        adult: boolean;
        backdrop_path: string | null;
        belongs_to_collection: {
          id: number,
          name: string,
          poster_path: string | null,
          backdrop_path: string | null,
        } | null;
        budget: number;
        genres: {
          id: number,
          name: string,
        }[];
        homepage: string | null;
        id: number;
        imdb_id: string | null;
        original_language: string;
        original_title: string;
        overview: string | null;
        popularity: number;
        poster_path: string | null;
        production_companies: {
          name: string,
          id: number,
          logo_path: string | null,
          origin_country: string,
        }[];
        production_countries: {
          iso_3166_1: string,
          name: string,
        }[];
        release_date: string;
        revenue: string;
        runtime: number | null;
        spoken_language: {
          iso_639_1: string,
          name: string,
        }[];
        status:
        | 'Rumored'
        | 'Planned'
        | 'In Production'
        | 'Post Production'
        | 'Released'
        | 'Canceled';
        tagline: string | null;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }

      interface GetAccountStates extends Objects.AccountStates {}

      interface GetAlternativeTitles extends Objects.AlternativeTitles {}

      interface GetChanges extends Objects.ChangesMovie {}

      interface GetCredits {
        id: number;
        cast: {
          cast_id: number,
          character: string,
          credit_id: string,
          gender: number | null,
          id: number,
          name: string,
          order: number,
          profile_path: string | null,
        }[];
        crew: {
          credit_id: string,
          department: string,
          gender: number | null,
          id: number,
          job: string,
          name: string,
          profile_path: string | null,
        }[];
      }

      interface GetExternalIDs extends Objects.MovieExternalIDs {}

      interface GetImages {
        id: number;
        backdrops: Image[];
        posters: Image[];
      }

      interface GetKeywords {
        id: number;
        keywords: {
          id: number,
          name: string,
        }[];
      }

      interface GetReleaseDates {
        id: number;
        results: {
          iso_3166_1: string,
          release_dates: {
            certification: string,
            iso_639_1: string,
            release_date: string,
            type: number,
            note: string,
          }[],
        }[];
      }

      interface GetVideos extends Objects.Videos {}

      interface GetTranslations {
        id: number;
        translations: {
          iso_639_1: string,
          iso_3166_1: string,
          name: string,
          english_name: string,
          data: {
            title: string,
            overview: string,
            homepage: string,
          },
        }[];
      }

      interface GetRecommendations extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface GetSimilarMovies extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface GetReviews extends Objects.Reviews {}

      interface GetLists extends ResponseWithPage {
        id: number;
        results: {
          description: string,
          favorite_count: number,
          id: number,
          item_count: number,
          iso_639_1: string,
          list_type: string,
          name: string,
          poster_path: string | null,
        }[];
      }

      interface RateMovie extends Objects.Status {}

      interface DeleteRating extends Objects.Status {}

      interface GetLatest {
        adult: boolean;
        backdrop_path: string | null;
        belongs_to_collection: null;
        budget: number;
        genre_ids: {
          id: number,
          name: string,
        }[];
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        production_companies: {}[];
        production_countries: {}[];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: {}[];
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }

      interface GetNowPlaying extends ResponseWithPage {
        results: Objects.Movie[];
        dates: {
          maximum: string,
          minimum: string,
        };
      }

      interface GetPopular extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface GetTopRated extends GetPopular {}

      interface GetUpcoming extends GetNowPlaying {}

      interface GetChangeList extends ResponseWithPage {
        results: {
          id: number,
          adult: boolean | null,
        }[];
      }
    }

    namespace Network {
      interface GetDetails {
        headquarters: string;
        homepage: string;
        id: number;
        name: string;
        origin_country: string;
      }

      interface GetAlternativeNames {
        id: number;
        results: {
          name: string,
          type: string,
        }[];
      }

      interface GetImages {
        id: number;
        logos: {
          aspect_ratio: number,
          file_path: string,
          height: number,
          id: string,
          file_type:
          | '.svg'
          | '.png',
          vote_average: number,
          vote_count: number,
          width: number,
        }[];
      }
    }

    namespace Trending {
      interface GetTrending extends ResponseWithPage {
        results: Objects.Movie[];
      }
    }

    namespace Person {
      interface GetDetails {
        birthdate: string | null;
        known_for_department: string;
        deathday: string | null;
        id: number;
        also_known_as: string[];
        gender: 0 | 1 | 2;
        biography: string;
        popularity: number;
        place_of_birth: string | null;
        profile_path: string | null;
        adult: boolean;
        imdb_id: string;
        homepage: string | null;
      }

      interface GetChanges {
        changes: {
          key: string,
          items: {
            id: string,
            action: string,
            time: string,
            original_value: {
              profile: {
                file_path: string,
              },
            },
          }[],
        }[];
      }

      interface GetMovieCredits {
        cast: {
          character: string,
          credit_id: string,
          release_date: string,
          vote_count: number,
          video: boolean,
          adult: boolean,
          vote_average: number,
          title: string,
          genre_ids: number[],
          original_language: string,
          original_title: string,
          popularity: number,
          id: number,
          backdrop_path: string | null,
          overview: string,
          poster_path: string | null,
        }[];
        crew: {
          id: number,
          department: string,
          original_language: string,
          original_title: string,
          job: string,
          overview: string,
          vote_count: number,
          video: boolean,
          poster_path: string | null,
          backdrop_path: string | null,
          title: string,
          popularity: number,
          genre_ids: number[],
          vote_average: number,
          adult: boolean,
          release_date: string,
          credit_id: string,
        }[];
        id: number;
      }

      interface GetTVCredits {
        cast: {
          credit_id: string,
          original_name: string,
          id: number,
          genre_ids: number[],
          character: string,
          name: string,
          poster_path: string | null,
          vote_count: number,
          vote_average: number,
          popularity: number,
          episode_count: number,
          original_language: string,
          first_air_date: string,
          backdrop_path: string | null,
          overview: string,
          origin_country: string[],
        }[];
        crew: {
          id: number,
          department: string,
          original_language: string,
          episode_count: number,
          job: string,
          overview: string,
          origin_country: string[],
          original_name: string,
          genre_ids: number[],
          name: string,
          first_air_date: string,
          backrop_path: string | null,
          popularity: number,
          vote_count: number,
          vote_average: number,
          poster_path: string | null,
          credit_id: string,
        }[];
        id: number;
      }

      interface GetCombinedCredits {
        cast: {
          id: number,
          original_language: string,
          episode_count: number,
          overview: string,
          origin_country: string[],
          original_name: string,
          genre_ids: number[],
          name: string,
          media_type: string,
          poster_path: string | null,
          first_air_date: string,
          vote_average: number,
          vote_count: number,
          character: string,
          backdrop_path: string | null,
          popularity: number,
          credit_id: string,
          original_title: string,
          video: boolean,
          release_date: string,
          title: string,
          adult: boolean,
        }[];
        crew: {
          id: number,
          department: string,
          original_language: string,
          episode_count: number,
          job: string,
          overview: string,
          origin_country: string[],
          original_name: string,
          vote_count: number,
          name: string,
          media_type: string,
          popularity: number,
          credit_id: string,
          backdrop_path: string | null,
          first_air_date: string,
          vote_average: number,
          genre_ids: number[],
          poster_path: string | null,
          original_title: string,
          video: boolean,
          title: string,
          adult: boolean,
          release_date: string,
        }[];
        id: number,
      }

      interface GetExternalIDs {
        imdb_id: string | null;
        facebook_id: string | null;
        freebase_mid: string | null;
        freebase_id: string | null;
        tvrage_id: number | null;
        twitter_id: string | null;
        instagram_id: string | null;
        id: number;
      }

      interface GetImages {
        id: number;
        profiles: Objects.Image[];
      }

      interface GetTaggedImages extends ResponseWithPage {
        id: number;
        results: {
          aspect_ratio: number,
          file_path: string,
          height: number,
          id: string,
          iso_639_1: string | null,
          vote_average: number,
          vote_count: number,
          width: number,
          media: Objects.Movie | Objects.TVShow,
          media_type: 'tv' | 'movie',
        }[];
      }

      interface GetTranslations {
        id: number;
        translations: {
          iso_639_1: string,
          iso_3166_1: string,
          name: string,
          data: {
            biography: string,
          },
          english_name: string,
        }[];
      }

      interface GetLatest {
        adult: boolean;
        also_known_as: object;
        biography: string | null;
        birthday: string | null;
        deathday: string | null;
        gender: 0 | 1 | 2;
        homepage: string | null;
        id: number;
        imdb_id: string | null;
        name: string;
        place_of_birth: string | null;
        popularity: number;
        profile_path: string | null;
      }

      interface GetPopular extends ResponseWithPage {
        results: {
          profile_path: string,
          adult: boolean,
          id: number,
          known_for: (Objects.MovieWithMediaType | Objects.TVShowWithMediaType)[],
          name: string,
          popularity: number,
        }[];
      }

      interface GetChangeList extends ResponseWithPage {
        results: {
          id: number,
          adult: boolean | null,
        }[];
      }
    }

    namespace Review {
      interface GetDetails {
        id: string;
        author: string;
        content: string;
        iso_639_1: string;
        media_id: number;
        media_title: string;
        media_type: string;
        url: string;
      }
    }

    namespace Search {
      interface Companies extends ResponseWithPage {
        results: {
          id: number,
          logo_path: string | null,
          name: string,
        }[];
      }

      interface Collections extends ResponseWithPage {
        results: {
          id: number,
          backdrop_path: string | null,
          name: string,
        }[];
      }

      interface Keywords extends ResponseWithPage {
        results: {
          id: number,
          name: string,
        }[];
      }

      interface Movies extends ResponseWithPage {
        results: Objects.Movie[];
      }

      interface Multi extends ResponseWithPage {
        results: (
          | Objects.MovieWithMediaType
          | Objects.TVShowWithMediaType
          | Objects.PersonWithMediaType
        )[];
      }

      interface People extends ResponseWithPage {
        results: Objects.Person[];
      }

      interface TVShows extends ResponseWithPage {
        results: Objects.TVShow[];
      }
    }

    namespace TV {
      interface GetDetails {
        backdrop_path: string | null;
        created_by: {
          id: number,
          credit_id: string,
          name: string,
          gender: 0 | 1 | 2,
          profile_path: string,
        }[];
        episode_run_time: number[];
        first_air_date: string;
        genres: {
          id: number,
          name: string,
        }[];
        homepage: string;
        id: number;
        in_production: boolean;
        languages: string[];
        last_air_date: string;
        last_episode_to_air: Objects.Episode;
        name: string;
        next_episode_to_air: Objects.Episode | null;
        networks: {
          name: string,
          id: number,
          logo_path: string,
          origin_country: string,
        }[];
        number_of_episodes: number;
        number_of_seasons: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        production_companies: {
          id: number,
          logo_path: string | null,
          name: string,
          origin_country: string,
        }[];
        seasons: {
          air_date: string,
          episode_count: number,
          id: number,
          name: string,
          overview: string,
          poster_path: string | null,
          season_number: number,
        }[];
        status: string;
        type: string;
        vote_average: number;
        vote_count: number;
      }

      interface GetAccountStates extends Objects.AccountStates {}

      interface GetAlternativeTitles extends Objects.AlternativeTitles {}

      interface GetChanges {
        changes: {
          key: string,
          items: {
            id: string,
            action: string,
            time: string,
          }[],
        }[];
      }

      interface GetContentRatings {
        results: {
          iso_3166_1: string,
          rating: string,
        }[];
        id: number;
      }

      interface GetCredits {
        cast: {
          character: string,
          credit_id: string,
          gender: 0 | 1 | 2 | null,
          id: number,
          name: string,
          order: number,
          profile_path: string | null,
        }[];
        crew: {
          credit_id: string,
          department: string,
          gender: 0 | 1 | 2 | null,
          id: number,
          job: string,
          name: string,
          profile_path: string | null,
        }[];
        id: number;
      }

      interface GetEpisodeGroups {
        results: {
          description: string,
          episode_count: number,
          group_count: number,
          id: string,
          name: string,
          network: {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string,
          } | null,
          type: string,
        }[];
        id: number;
      }

      interface GetExternalIDs extends Objects.TVShowExternalIDs {}

      interface GetImages {
        backdrops: Objects.Image[];
        id: number;
        posters: Objects.Image[];
      }

      interface GetKeywords {
        id: number;
        results: {
          id: number,
          name: string,
        }[];
      }

      interface GetRecommendations extends ResponseWithPage {
        results: Objects.TVShow[];
      }

      interface GetReviews extends Objects.Reviews {}

      interface GetScreenedTheatrically {
        id: number;
        results: {
          id: number,
          episode_number: number,
          season_number: number,
        }[];
      }

      interface GetSimilarTVShows extends ResponseWithPage {
        resulst: Objects.TVShow[];
      }

      interface GetTranslations {
        id: number;
        translations: {
          iso_639_1: string,
          iso_3166_1: string,
          name: string,
          english_name: string,
          data: {
            name: string,
            overview: string,
            homepage: string,
          },
        }[];
      }

      interface GetVideos extends Objects.Videos {}

      interface RateTVShow extends Objects.Status {}

      interface DeleteRating extends Objects.Status {}

      interface GetLatest {
        backdrop_path: string | null;
        created_by: {
          id: number,
          credit_id: string,
          name: string,
          gender: 0 | 1 | 2,
          profile_path: string,
        };
        episode_run_time: number[];
        first_air_date: string;
        genres: {
          id: number,
          name: string,
        }[];
        homepage: string;
        id: number;
        in_production: boolean;
        languages: string[];
        last_air_date: string;
        name: string;
        networs: {
          id: number,
          name: string,
        }[];
        number_of_episodes: number;
        number_of_seasons: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string | null;
        popularity: number;
        poster_path: string | null;
        production_companies: object[]; // TODO
        seasons: {
          air_date: string,
          episode_count: number,
          id: number,
          poster_path: string | null,
          season_number: number,
        }[];
        status: string;
        type: string;
        vote_average: number;
        vote_count: number;
      }

      interface GetAiringToday extends ResponseWithPage {
        results: Objects.TVShow[];
      }

      interface GetOnAir extends GetAiringToday {}

      interface GetPopular extends GetAiringToday {}

      interface GetTopRated extends GetAiringToday {}

      interface GetChangeList extends ResponseWithPage {
        results: {
          id: number,
          adult: boolean | null,
        }[];
      }

      namespace Season {
        interface GetDetails {
          _id: string;
          air_date: string;
          episodes: {
            air_date: string,
            crew: {
              id: number,
              credit_id: string,
              name: string,
              department: string,
              job: string,
              profile_path: string | null,
            }[],
            episode_number: number,
            guest_stars: {
              id: number,
              name: string,
              credit_id: string,
              character: string,
              order: number,
              gender: 0 | 1 | 2,
              profile_path: string | null,
            }[],
            name: string,
            overview: string,
            id: number,
            production_code: string | null,
            season_number: number,
            still_path: string | null,
            vote_average: number,
            vote_count: number,
          }[];
          name: string;
          overview: string;
          id: number;
          poster_path: string | null;
          season_number: number;
        }

        interface GetChanges {
          changes: {
            key: string,
            items: {
              id: string,
              action: string,
              time: string,
              value: {
                episode_id: number,
                episode_season: number,
              } |  string,
              iso_639_1: string,
              original_value: string,
            }[],
          }[];
        }

        interface GetAccountStates {
          id: number;
          results: {
            id: number,
            episode_number: number,
            rated: {
              value: number,
            } | boolean,
          }[];
        }

        interface GetCredits {
          cast: {
            character: string,
            credit_id: string,
            gender: 0 | 1 | 2 | null,
            id: number,
            name: string,
            order: number,
            profile_path: string | null,
          }[];
          crew: {
            credit_id: string,
            department: string,
            gender: 0 | 1 | 2 | null,
            id: number,
            job: string,
            name: string,
            profile_path: string | null,
          }[];
          id: number;
        }

        interface GetExternalIDs {
          freebase_mid: string | null;
          freebase_id: string | null;
          tvdb_id: number | null;
          tvrage_id: number | null;
          id: number;
        }

        interface GetImages {
          id: number;
          posters: Objects.Image[];
        }

        interface GetVideos extends Objects.Videos {}
      }

      namespace Episode {
        interface GetDetails {
          air_date: string;
          crew: {
            id: number,
            credit_id: string,
            name: string,
            department: string,
            job: string,
            profile_path: string | null,
          }[];
          episode_number: number;
          guest_stars: {
            id: number,
            name: string,
            credit_id: string,
            character: string,
            order: number,
            profile_path: string | null,
          }[];
          name: string;
          overview: string;
          id: number;
          production_code: string | null;
          season_number: number;
          still_path: string | null;
          vote_average: number;
          vote_count: number;
        }

        interface GetChanges {
          changes: {
            key: string,
            items: {
              id: string,
              action: string,
              time: string,
              value: string,
              iso_639_1: string,
            }[],
          }[];
        }

        interface GetAccountStates {
          id: number;
          rated: {
            value: number,
          } | boolean;
        }

        interface GetCredits {
          id: number;
          cast: {
            character: string,
            credit_id: string,
            gender: 0 | 1 | 2,
            id: number,
            name: string,
            order: number,
            profile_path: string | null,
          }[];
          crew: {
            id: number,
            credit_id: string,
            name: string,
            department: string,
            job: string,
            gender: 0 | 1 | 2,
            profile_path: string | null,
          }[];
          guest_stars: {
            id: number,
            name: string,
            credit_id: string,
            character: string,
            order: number,
            gender: 0 | 1 | 2,
            profile_path: string | null,
          }[];
        }

        interface GetExternalIDs {
          imdb_id: string | null;
          freebase_mid: string | null;
          freebase_id: string | null;
          tvdb_id: number | null;
          tvrage_id: number | null;
          id: number;
        }

        interface GetImages {
          id: number;
          stills: Objects.Image[];
        }

        interface GetTranslations {
          id: number;
          translations: {
            iso_3166_1: string,
            iso_639_1: string,
            name: string,
            english_name: string,
            data: {
              name: string,
              overview: string,
            }
          }[];
        }

        interface RateTVEpisode extends Objects.Status {}

        interface DeleteRating extends Objects.Status {}

        interface GetVideos extends Objects.Videos {}
      }

      namespace Group {
        interface GetDetails {
          description: string;
          episode_count: number;
          group_count: number;
          groups: {
            id: string,
            name: string,
            order: number,
            episodes: {
              air_date: string,
              episode_number: number,
              id: number,
              name: string,
              overview: string,
              production_code: null,
              season_number: number,
              show_id: number,
              still_path: string | null,
              vote_average: number,
              vote_count: number,
              order: number,
            }[],
            locked: boolean,
          }[];
          id: string;
          name: string;
          network: {
            id: number,
            logo_path: string | null,
            name: string,
            origin_country: string,
          };
          type: number;
        }
      }
    }
  }

  namespace Errors {
    interface BadRequest extends Error {
      code: number;
      errorCode: 400;
    }

    interface UnauthorizedError extends Error {
      code: number;
      errorCode: 401;
    }

    interface NotFoundError extends Error {
      code: number;
      errorCode: 404;
    }

    interface RequestTimeout extends Error {
      code: number;
      errorCode: 408;
    }

    /**
     * @deprecated Because limits does not exists anymore in API
     */
    interface TooManyRequests extends Error {
      code: number;
      errorCode: 429;
    }
  }

  type Response<T> = Promise<{
    data: T;
    headers: IncomingHttpHeaders;
  }>;

  interface ConstructorOptions {
    language?: string;
  }
}

declare class MovieDB {
  account: MovieDB.Endpoints.Account;
  authentication: MovieDB.Endpoints.Authentication;
  certification: MovieDB.Endpoints.Certification;
  collection: MovieDB.Endpoints.Collection;
  company: MovieDB.Endpoints.Company;
  configuration: MovieDB.Endpoints.Configuration;
  credit: MovieDB.Endpoints.Credit;
  discover: MovieDB.Endpoints.Discover;
  find: MovieDB.Endpoints.Find;
  genre: MovieDB.Endpoints.Genre;
  guestSession: MovieDB.Endpoints.GuestSession;
  keyword: MovieDB.Endpoints.Keyword;
  list: MovieDB.Endpoints.List;
  movie: MovieDB.Endpoints.Movie;
  network: MovieDB.Endpoints.Network;
  trending: MovieDB.Endpoints.Trending;
  person: MovieDB.Endpoints.Person;
  review: MovieDB.Endpoints.Review;
  search: MovieDB.Endpoints.Search;
  tv: MovieDB.Endpoints.TV;

  constructor(apiKey: string, options?: MovieDB.ConstructorOptions);
  setApiKey(apiKey: string): void;
  setLanguage(language: string): void;
}

export = MovieDB;
