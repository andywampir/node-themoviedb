import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'find';
const endpoints: RequestOption[] = [ {
  type: 'GET',
  endpoint: `${endpointBaseURL}/{external_id}`,
  name: 'byExternalID',
} ];

export default createEndpoints(endpoints);
