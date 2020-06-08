import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'discover';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/movie`,
    name: 'movie',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/tv`,
    name: 'tv',
  },
];

export default createEndpoints(endpoints);
