import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'configuration';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}`,
    name: 'getAPIConfiguration',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/countries`,
    name: 'getCountries',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/jobs`,
    name: 'getJobs',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/languages`,
    name: 'getLanguages',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/primary_translations`,
    name: 'getPrimaryTranslations',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/timezones`,
    name: 'getTimezones',
  },
];

export default createEndpoints(endpoints);
