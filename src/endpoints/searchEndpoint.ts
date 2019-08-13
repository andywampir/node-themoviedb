import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/search';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/company`,
    name: 'companies',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/collection`,
    name: 'collections',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/keyword`,
    name: 'keywords',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/movie`,
    name: 'movies',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/multi`,
    name: 'multi',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/person`,
    name: 'people',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/tv`,
    name: 'TVShows',
  },
];

export default createEndpoints(endpoints);
