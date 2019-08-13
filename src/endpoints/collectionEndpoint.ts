import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/collection';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{collection_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{collection_id}/images`,
    name: 'getImages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{collection_id}/translations`,
    name: 'getTranslations',
  },
];

export default createEndpoints(endpoints);
