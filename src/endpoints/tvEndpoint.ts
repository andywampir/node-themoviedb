import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/tv';
const rootEndpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/account_states`,
    name: 'getAccountStates',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/alternative_titles`,
    name: 'getAlternativeTitles',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/changes`,
    name: 'getChanges',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/content_ratings`,
    name: 'getContentRatings',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/credits`,
    name: 'getCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/episode_groups`,
    name: 'getEpisodeGroups',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/external_ids`,
    name: 'getExternalIDs',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/keywords`,
    name: 'getKeywords',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/recommendations`,
    name: 'getRecommendations',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/reviews`,
    name: 'getReviews',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/screened_theatrically`,
    name: 'getScreenedTheatrically',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/similar`,
    name: 'getSimilarTVShows',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/translations`,
    name: 'getTranslations',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/videos`,
    name: 'getVideos',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{tv_id}/rating`,
    name: 'rateTVShow',
  }, {
    type: 'DELETE',
    endpoint: `${endpointBaseURL}/{tv_id}/rating`,
    name: 'deleteRating',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/latest`,
    name: 'getLatest',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/airing_today`,
    name: 'getAiringToday',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/on_the_air`,
    name: 'getOnAir',
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
    endpoint: `${endpointBaseURL}/changes`,
    name: 'getChangeList',
  },
];
const seasonEndpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/season/{season_id}/changes`,
    name: 'getChanges',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/account_states`,
    name: 'getAccountStates',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/credits`,
    name: 'getCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/external_ids`,
    name: 'getExternalIDs',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/videos`,
    name: 'getVideos',
  },
];
const episodeEndpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/episode/{episode_id}/changes`,
    name: 'getChanges',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/account_states`,
    name: 'getAccountStates',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/credits`,
    name: 'getCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/external_ids`,
    name: 'getExternalIDs',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/translations`,
    name: 'getTranslations',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/rating`,
    name: 'rateTVEpisode',
  }, {
    type: 'DELETE',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/rating`,
    name: 'deleteRating',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{tv_id}/season/{season_number}/episode/{episode_number}/videos`,
    name: 'getVideos',
  },
];
const groupEndpoints: RequestOption[] = [ {
  type: 'GET',
  endpoint: `${endpointBaseURL}/episode_group/{id}`,
  name: 'getDetails',
} ];

const tv = {
  ...createEndpoints(rootEndpoints),
  season: createEndpoints(seasonEndpoints),
  episode: createEndpoints(episodeEndpoints),
  group: createEndpoints(groupEndpoints),
};

export default tv;
