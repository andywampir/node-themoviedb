import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/trending';
const endpoints: RequestOption[] = [ {
  type: 'GET',
  endpoint: `${endpointBaseURL}/{media_type}/{time_window}`,
  name: 'getTrending',
} ];

export default createEndpoints(endpoints);
