import {
  CreatedRequestOptions,
  RequestType,
  RequestOption,
} from './interfaces';
import parseEndpoint from './parseEndpoint';
import normalizeQuery from './normalizeQuery';
import { request } from './requests';
import catchHTTPErrors from './catchHTTPErrors';
import DataController from '../DataController';
import { URLSearchParams } from 'url';

const createEndpoint = (type: RequestType, endpoint: string) => {
  const data = DataController.getInstance();

  return async ({ body, pathParameters, query }: CreatedRequestOptions) => {
    if (pathParameters) {
      endpoint = parseEndpoint(endpoint, pathParameters);
    }

    if (query) {
      if (query['api_key']) {
        delete query['api_key'];
      }

      if (query['language']) {
        delete query['language'];
      }
    }

    const readyQuery = new URLSearchParams({
      api_key: data.get('apiKey'),
      language: data.get('language'),
    });

    if (query) {
      normalizeQuery(query).forEach(entry => {
        readyQuery.append(entry[0], entry[1]);
      });
    }

    try {
      switch (type) {
        case 'GET': {
          const response = await request(endpoint, { query: readyQuery });

          return {
            data: response.body,
            headers: response.headers,
            rateLimit: {
              limit: parseInt(response.headers['x-ratelimit-limit'] as string, 10),
              remaining: parseInt(response.headers['x-ratelimit-remaining'] as string, 10),
              reset: parseInt(response.headers['x-ratelimit-reset'] as string, 10),
            },
          };
        }

        case 'POST': {
          const response = await request.post(endpoint, { query: readyQuery, body });

          return {
            data: response.body,
            headers: response.headers,
            rateLimit: {
              limit: parseInt(response.headers['x-ratelimit-limit'] as string, 10),
              remaining: parseInt(response.headers['x-ratelimit-remaining'] as string, 10),
              reset: parseInt(response.headers['x-ratelimit-reset'] as string, 10),
            },
          };
        }

        case 'DELETE': {
          const response = await request.delete(endpoint, { query: readyQuery, body });

          return {
            data: response.body,
            headers: response.headers,
            rateLimit: {
              limit: parseInt(response.headers['x-ratelimit-limit'] as string, 10),
              remaining: parseInt(response.headers['x-ratelimit-remaining'] as string, 10),
              reset: parseInt(response.headers['x-ratelimit-reset'] as string, 10),
            },
          };
        }

        default: break;
      }
    } catch (error) {
      catchHTTPErrors(error);
      throw error;
    }
  };
};

export default (endpoints: RequestOption[]) => {
  const root = {};

  endpoints.forEach(endpoint => {
    root[endpoint.name] = createEndpoint(endpoint.type, endpoint.endpoint);
  });

  return root;
};
