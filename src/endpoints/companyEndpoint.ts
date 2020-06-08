import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'company';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{company_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{company_id}/alternative_names`,
    name: 'getAlternativeNames',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{company_id}/images`,
    name: 'getImages',
  },
];

export default createEndpoints(endpoints);
