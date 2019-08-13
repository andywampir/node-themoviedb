import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/keyword';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{keyword_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{keyword_id}/movies`,
    name: 'getMovies',
  },
];

export default createEndpoints(endpoints);
