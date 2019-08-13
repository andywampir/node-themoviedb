import createEndpoints from '../utils/createEndpoints';
import { RequestOption } from '../utils/interfaces';

const endpointBaseURL = '/account';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: endpointBaseURL,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/lists`,
    name: 'getCreatedList',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/favorite/movies`,
    name: 'getFavoriteMovies',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/favorite/tv`,
    name: 'getFavoriteTVShows',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{account_id}/favorite`,
    name: 'markAsFavorite',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/rated/movies`,
    name: 'getRatedMovies',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/rated/tv`,
    name: 'getRatedTVShows',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/rated/tv/episodes`,
    name: 'getRatedTVEpisodes',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/watchlist/movies`,
    name: 'getMovieWatchlist',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{account_id}/watchlist/tv`,
    name: 'getTVShowWatchlist',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{account_id}/watchlist`,
    name: 'addToWatchlist',
  },
];

export default createEndpoints(endpoints);
