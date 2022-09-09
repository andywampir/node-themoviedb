import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'movie';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/account_states`,
    name: 'getAccountStates',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/alternative_titles`,
    name: 'getAlternativeTitles',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/changes`,
    name: 'getChanges',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/credits`,
    name: 'getCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/external_ids`,
    name: 'getExternalIDs',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/keywords`,
    name: 'getKeywords',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/release_dates`,
    name: 'getReleaseDates',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/videos`,
    name: 'getVideos',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/watch/providers`,
    name: 'getWatchProviders',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/translations`,
    name: 'getTranslations',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/recommendations`,
    name: 'getRecommendations',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/similar`,
    name: 'getSimilarMovies',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/reviews`,
    name: 'getReviews',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{movie_id}/lists`,
    name: 'getLists',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{movie_id}/rating`,
    name: 'rateMovie',
  }, {
    type: 'DELETE',
    endpoint: `${endpointBaseURL}/{movie_id}/rating`,
    name: 'deleteRating',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/latest`,
    name: 'getLatest',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/now_playing`,
    name: 'getNowPlaying',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/popular`,
    name: 'getPopular',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/top_rated`,
    name: 'getTopRated',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/upcoming`,
    name: 'getUpcoming',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/changes`,
    name: 'getChangeList',
  },
];

export default createEndpoints(endpoints);
