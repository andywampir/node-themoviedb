import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'genre';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/movie/list`,
    name: 'getMovieList',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/tv/list`,
    name: 'getTVList',
  },
];

export default createEndpoints(endpoints);
