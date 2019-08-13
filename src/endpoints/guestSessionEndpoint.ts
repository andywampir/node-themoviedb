import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = '/guest_session';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{guest_session_id}/rated/movies`,
    name: 'getRatedMovies',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{guest_session_id}/rated/tv`,
    name: 'getRatedTVShows',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{guest_session_id}/rated/tv/episodes`,
    name: 'getRatedTVEpisodes',
  },
];

export default createEndpoints(endpoints);
