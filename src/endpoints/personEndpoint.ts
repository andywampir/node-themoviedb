import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/person';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/changes`,
    name: 'getChanges',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/movie_credits`,
    name: 'getMovieCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/tv_credits`,
    name: 'getTVCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/combined_credits`,
    name: 'getCombinedCredits',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/external_ids`,
    name: 'getExternalIDs',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/tagged_images`,
    name: 'getTaggedImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{person_id}/translations`,
    name: 'getTranslations',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/latest`,
    name: 'getLatest',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/popular`,
    name: 'getPopular',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/changes`,
    name: 'getChangeList',
  },
];

export default createEndpoints(endpoints);
