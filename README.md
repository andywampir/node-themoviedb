> A Node.JS wrapper for The Movie DB API.

[![install size](https://packagephobia.now.sh/badge?p=node-themoviedb)](https://packagephobia.now.sh/result?p=node-themoviedb)
[![npm](https://img.shields.io/npm/dm/node-themoviedb?style=flat)](https://www.npmjs.com/package/node-themoviedb)
[![npm](https://img.shields.io/npm/v/node-themoviedb)](https://www.npmjs.com/package/node-themoviedb)
![GitHub last commit](https://img.shields.io/github/last-commit/andywampir/node-themoviedb)

# Highlights
- [Installation](#install)
- [Usage](#usage)
- [Common Usage of Methods](#common-usage-of-methods)
- [API](#api)

# Install
```bash
yarn add node-themoviedb
```
or
```bash
npm install node-themoviedb
```

# Usage
```js
const MovieDB = require('node-themoviedb');
// ES6 Style
// import MovieDB from 'node-themoviedb';
const mdb = new MovieDB(/* Your API Key */, options);

(async () => {
  try {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };
    const movie = await mdb.movie.getDetails(args);
    console.log(movie);
    /*
      {
        data: Object. Parsed json data of response
        headers: Object. Headers of response
      }
    */
  } catch (error) {
    console.error(error);
  }
})();
```
## Common Usage of Methods
```js
const args = {
  pathParameters: {
    // path parameters for query, i.e. tv_id
  },
  query: {
    // query string, i.e. session_id
    // NOTE: api_key and language will be added to query by default, don't need specify these values
  },
  body: {
    // data for request body
  },
};
const response = await mdb.tv.getVideos(args);
// Or nested methods
// const response = await mdb.tv.episode.rateTVEpisode(args);
```

# API

## constructor(apiKey[, options])

### apiKey

Your API key. [How to get API key](https://developers.themoviedb.org/3/getting-started/introduction)

### options

- language - Optional. Default is `'en-US'`

Additional options, which will be override the default settings

## setApiKey(apiKey)

Sets API key

### apiKey

Your API key

## setLanguage(language)

Sets language for data of response

### language

Language in ISO 639-1 format. I.e. `'en-US'`


## Methods
- account
  - [getDetails](https://developers.themoviedb.org/3/account/get-account-details)
  - [getCreatedList](https://developers.themoviedb.org/3/account/get-created-lists)
  - [getFavoriteMovies](https://developers.themoviedb.org/3/account/get-favorite-movies)
  - [getFavoriteTVShows](https://developers.themoviedb.org/3/account/get-favorite-tv-shows)
  - [markAsFavorite](https://developers.themoviedb.org/3/account/mark-as-favorite)
  - [getRatedMovies](https://developers.themoviedb.org/3/account/get-rated-movies)
  - [getRatedTVShows](https://developers.themoviedb.org/3/account/get-rated-tv-shows)
  - [getRatedTVEpisodes](https://developers.themoviedb.org/3/account/get-rated-tv-episodes)
  - [getMovieWatchlist](https://developers.themoviedb.org/3/account/get-movie-watchlist)
  - [getTVShowWatchlist](https://developers.themoviedb.org/3/account/get-tv-show-watchlist)
  - [addToWatchlist](https://developers.themoviedb.org/3/account/add-to-watchlist)
- authentication
  - [createGuestSession](https://developers.themoviedb.org/3/authentication/create-guest-session)
  - [createRequestToken](https://developers.themoviedb.org/3/authentication/create-request-token)
  - [createSession](https://developers.themoviedb.org/3/authentication/create-session)
  - [createSessionWithLogin](https://developers.themoviedb.org/3/authentication/validate-request-token)
  - [createSessionFromAccessToken](https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token)
  - [deleteSession](https://developers.themoviedb.org/3/authentication/delete-session)
- certification
  - [getMovieCertifications](https://developers.themoviedb.org/3/certifications/get-movie-certifications)
  - [getTVCertifications](https://developers.themoviedb.org/3/certifications/get-tv-certifications)
- collection
  - [getDetails](https://developers.themoviedb.org/3/collections/get-collection-details)
  - [getImages](https://developers.themoviedb.org/3/collections/get-collection-images)
  - [getTranslations](https://developers.themoviedb.org/3/collections/get-collection-translations)
- company
  - [getDetails](https://developers.themoviedb.org/3/companies/get-company-details)
  - [getAlternativeNames](https://developers.themoviedb.org/3/companies/get-company-alternative-names)
  - [getImages](https://developers.themoviedb.org/3/companies/get-company-images)
- configuration
  - [getAPIConfiguration](https://developers.themoviedb.org/3/configuration/get-api-configuration)
  - [getCountries](https://developers.themoviedb.org/3/configuration/get-countries)
  - [getJobs](https://developers.themoviedb.org/3/configuration/get-jobs)
  - [getLanguages](https://developers.themoviedb.org/3/configuration/get-languages)
  - [getPrimaryTranslations](https://developers.themoviedb.org/3/configuration/get-primary-translations)
  - [getTimezones](https://developers.themoviedb.org/3/configuration/get-timezones)
- credit
  - [getDetails](https://developers.themoviedb.org/3/credits/get-credit-details)
- discover
  - [movie](https://developers.themoviedb.org/3/discover/movie-discover)
  - [tv](https://developers.themoviedb.org/3/discover/tv-discover)
- find
  - [byExternalID](https://developers.themoviedb.org/3/find/find-by-id)
- genre
  - [getMovieList](https://developers.themoviedb.org/3/genres/get-movie-list)
  - [getTVList](https://developers.themoviedb.org/3/genres/get-tv-list)
- guestSession
  - [getRatedMovies](https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies)
  - [getRatedTVShows](https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows)
  - [getRatedTVEpisodes](https://developers.themoviedb.org/3/guest-sessions/get-gest-session-rated-tv-episodes)
- keyword
  - [getDetails](https://developers.themoviedb.org/3/keywords/get-keyword-details)
  - [getMovies](https://developers.themoviedb.org/3/keywords/get-movies-by-keyword)
- list
  - [getDetails](https://developers.themoviedb.org/3/lists/get-list-details)
  - [checkItemStatus](https://developers.themoviedb.org/3/lists/check-item-status)
  - [createList](https://developers.themoviedb.org/3/lists/create-list)
  - [addMovie](https://developers.themoviedb.org/3/lists/add-movie)
  - [removeMovie](https://developers.themoviedb.org/3/lists/remove-movie)
  - [clearList](https://developers.themoviedb.org/3/lists/clear-list)
  - [deleteList](https://developers.themoviedb.org/3/lists/delete-list)
- movie
  - [getDetails](https://developers.themoviedb.org/3/movies/get-movie-details)
  - [getAccountStates](https://developers.themoviedb.org/3/movies/get-movie-account-states)
  - [getAlternativeTitles](https://developers.themoviedb.org/3/movies/get-movie-alternative-titles)
  - [getChanges](https://developers.themoviedb.org/3/movies/get-movie-changes)
  - [getCredits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  - [getExternalIDs](https://developers.themoviedb.org/3/movies/get-movie-external-ids)
  - [getImages](https://developers.themoviedb.org/3/movies/get-movie-images)
  - [getKeywords](https://developers.themoviedb.org/3/movies/get-movie-keywords)
  - [getReleaseDates](https://developers.themoviedb.org/3/movies/get-movie-release-dates)
  - [getVideos](https://developers.themoviedb.org/3/movies/get-movie-videos)
  - [getTranslations](https://developers.themoviedb.org/3/movies/get-movie-translations)
  - [getRecommendations](https://developers.themoviedb.org/3/movies/get-movie-recommendations)
  - [getSimilarMovies](https://developers.themoviedb.org/3/movies/get-similar-movies)
  - [getReviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  - [getLists](https://developers.themoviedb.org/3/movies/get-movie-lists)
  - [rateMovie](https://developers.themoviedb.org/3/movies/rate-movie)
  - [deleteRating](https://developers.themoviedb.org/3/movies/delete-movie-rating)
  - [getLatest](https://developers.themoviedb.org/3/movies/get-latest-movie)
  - [getNowPlaying](https://developers.themoviedb.org/3/movies/get-now-playing)
  - [getPopular](https://developers.themoviedb.org/3/movies/get-popular-movies)
  - [getTopRated](https://developers.themoviedb.org/3/movies/get-top-rated-movies)
  - [getUpcoming](https://developers.themoviedb.org/3/movies/get-upcoming)
  - [getChangeList](https://developers.themoviedb.org/3/changes/get-movie-change-list)
- network
  - [getDetails](https://developers.themoviedb.org/3/networks/get-network-details)
  - [getAlternativeNames](https://developers.themoviedb.org/3/networks/get-network-alternative-names)
  - [getImages](https://developers.themoviedb.org/3/networks/get-network-images)
- trending
  - [getTrending](https://developers.themoviedb.org/3/trending/get-trending)
- person
  - [getDetails](https://developers.themoviedb.org/3/people/get-person-details)
  - [getChanges](https://developers.themoviedb.org/3/people/get-person-changes)
  - [getMovieCredits](https://developers.themoviedb.org/3/people/get-person-movie-credits)
  - [getTVCredits](https://developers.themoviedb.org/3/people/get-person-tv-credits)
  - [getCombinedCredits](https://developers.themoviedb.org/3/people/get-person-combined-credits)
  - [getExternalIDs](https://developers.themoviedb.org/3/people/get-person-external-ids)
  - [getImages](https://developers.themoviedb.org/3/people/get-person-images)
  - [getTaggedImages](https://developers.themoviedb.org/3/people/get-tagged-images)
  - [getTranslations](https://developers.themoviedb.org/3/people/get-person-translations)
  - [getLatest](https://developers.themoviedb.org/3/people/get-latest-person)
  - [getPopular](https://developers.themoviedb.org/3/people/get-popular-people)
  - [getChangeList](https://developers.themoviedb.org/3/changes/get-person-change-list)
- review
  - [getDetails](https://developers.themoviedb.org/3/reviews/get-review-details)
- search
  - [companies](https://developers.themoviedb.org/3/search/search-companies)
  - [collections](https://developers.themoviedb.org/3/search/search-collections)
  - [keywords](https://developers.themoviedb.org/3/search/search-keywords)
  - [movies](https://developers.themoviedb.org/3/search/search-movies)
  - [multi](https://developers.themoviedb.org/3/search/multi-search)
  - [people](https://developers.themoviedb.org/3/search/search-people)
  - [TVShows](https://developers.themoviedb.org/3/search/search-tv-shows)
- tv
  - [getDetails](https://developers.themoviedb.org/3/tv/get-tv-details)
  - [getAccountStates](https://developers.themoviedb.org/3/tv/get-tv-account-states)
  - [getAlternativeTitles](https://developers.themoviedb.org/3/tv/get-tv-alternative-titles)
  - [getChanges](https://developers.themoviedb.org/3/tv/get-tv-changes)
  - [getContentRatings](https://developers.themoviedb.org/3/tv/get-tv-content-ratings)
  - [getCredits](https://developers.themoviedb.org/3/tv/get-tv-credits)
  - [getEpisodeGroups](https://developers.themoviedb.org/3/tv/get-tv-episode-groups)
  - [getExternalIDs](https://developers.themoviedb.org/3/tv/get-tv-external-ids)
  - [getImages](https://developers.themoviedb.org/3/tv/get-tv-images)
  - [getKeywords](https://developers.themoviedb.org/3/tv/get-tv-keywords)
  - [getRecommendations](https://developers.themoviedb.org/3/tv/get-tv-recommendations)
  - [getReviews](https://developers.themoviedb.org/3/tv/get-tv-reviews)
  - [getScreenedTheatrically](https://developers.themoviedb.org/3/tv/get-screened-theatrically)
  - [getSimilarTVShows](https://developers.themoviedb.org/3/tv/get-similar-tv-shows)
  - [getTranslations](https://developers.themoviedb.org/3/tv/get-tv-translations)
  - [getVideos](https://developers.themoviedb.org/3/tv/get-tv-videos)
  - [rateTVShow](https://developers.themoviedb.org/3/tv/rate-tv-show)
  - [deleteRating](https://developers.themoviedb.org/3/tv/delete-tv-show-rating)
  - [getLatest](https://developers.themoviedb.org/3/tv/get-latest-tv)
  - [getAiringToday](https://developers.themoviedb.org/3/tv/get-tv-airing-today)
  - [getOnAir](https://developers.themoviedb.org/3/tv/get-tv-on-the-air)
  - [getPopular](https://developers.themoviedb.org/3/tv/get-popular-tv-shows)
  - [getTopRated](https://developers.themoviedb.org/3/tv/get-top-rated-tv)
  - [getChangeList](https://developers.themoviedb.org/3/changes/get-tv-change-list)
  - season
    - [getDetails](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details)
    - [getChanges](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes)
    - [getAccountStates](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states)
    - [getCredits](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits)
    - [getExternalIDs](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids)
    - [getImages](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images)
    - [getVideos](https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos)
  - episode
    - [getDetails](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details)
    - [getChanges](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes)
    - [getAccountStates](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states)
    - [getCredits](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits)
    - [getExternalIDs](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids)
    - [getImages](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images)
    - [getTranslations](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations)
    - [rateTVEpisode](https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode)
    - [deleteRating](https://developers.themoviedb.org/3/tv-episodes/delete-tv-episode-rating)
    - [getVideos](https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos)
  - group
    - [getDetails](https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details)

# Errors

> All errors extends [Node's Error](https://nodejs.org/dist/latest-v12.x/docs/api/errors.html#errors_class_error)

## BadRequest

Throws when server responses with http status code 400

- code - Number. Usually to `0`
- errorCode - Number. Equals to `400`

## UnauthorizedError

Throws when set invalid api key

- code - Number. Usually equals to `7`
- errorCode - Number. Equals to `401`

## NotFoundError

Throws when requested resource couldn't be found

- code - Number. Usually equals to `34`
- errorCode - Number. Equals to `404`

## RequestTimeout

Throws when request timed out

- code - Number. Usually equals to `0`
- errorCode - Number. Equals to `408`

## TooManyRequests (deprecated)

Throws when expired rate limit

- code - Number. Usually equals to `0`
- errorCode - Number. Equals to `429`
