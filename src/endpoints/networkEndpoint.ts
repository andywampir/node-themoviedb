import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/network';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{network_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{network_id}/alternative_names`,
    name: 'getAlternativeNames',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{network_id}/images`,
    name: 'getImages',
  },
];

export default createEndpoints(endpoints);
