import { RequestOption } from '../utils/interfaces';
import createEndpoints from '../utils/createEndpoints';

const endpointBaseURL = 'list';
const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{list_id}`,
    name: 'getDetails',
  }, {
    type: 'GET',
    endpoint: `${endpointBaseURL}/{list_id}/item_status`,
    name: 'checkItemStatus',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}`,
    name: 'createList',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{list_id}/add_item`,
    name: 'addMovie',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{list_id}/remove_item`,
    name: 'removeMovie',
  }, {
    type: 'POST',
    endpoint: `${endpointBaseURL}/{list_id}/clear`,
    name: 'clearList',
  }, {
    type: 'DELETE',
    endpoint: `${endpointBaseURL}/{list_id}`,
    name: 'deleteList',
  },
];

export default createEndpoints(endpoints);
