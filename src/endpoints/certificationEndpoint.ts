import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'certification';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/movie/list`,
    name: 'getMovieCertifications',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/tv/list`,
    name: 'getTVCertifications',
  },
];

export default createEndpoints(endpoints);
