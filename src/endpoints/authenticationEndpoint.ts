import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/authentication';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/guest_session/new`,
    name: 'createGuestSession',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/token/new`,
    name: 'createRequestToken',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/session/new`,
    name: 'createSession',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/token/validate_with_login`,
    name: 'createSessionWithLogin',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/session/convert/4`,
    name: 'createSessionFromAccessToken',
  }, {
    type: 'DELETE',
    endpoint: `${endpointBaseURL}/session`,
    name: 'deleteSession',
  },
];

export default createEndpoints(endpoints);
