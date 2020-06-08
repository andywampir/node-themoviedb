import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'review';
const endpoints: RequestOption[] = [ {
  type: 'GET',
  endpoint: `${endpointBaseURL}/{review_id}`,
  name: 'getDetails',
} ];

export default createEndpoints(endpoints);
