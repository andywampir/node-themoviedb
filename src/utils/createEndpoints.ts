/* eslint-disable @typescript-eslint/no-dynamic-delete */
/* eslint-disable dot-notation */
/* eslint-disable camelcase */
import { URLSearchParams } from 'url';

import { Response } from 'got';

import {
  CreatedRequestOptions,
  RequestType,
  RequestOption,
} from './interfaces';
import parseEndpoint from './parseEndpoint';
import normalizeQuery from './normalizeQuery';
import request from './requests';
import catchHTTPErrors from './catchHTTPErrors';
import DataController from '../DataController';

interface Endpoint {
  data: unknown;
  headers: unknown;
}

type Request = (options: CreatedRequestOptions) => Promise<Endpoint>;

const createEndpoint = (type: RequestType, endpoint: string): Request => {
  const data = DataController.getInstance();

  return async (options: CreatedRequestOptions): Promise<Endpoint> => {
    const {
      body,
      pathParameters,
      query,
    } = options;
    let parsedEndpoint: string = null;
    let response: Response<string> = null;

    if (pathParameters)
      parsedEndpoint = parseEndpoint(endpoint, pathParameters);

    if (query) {
      if (query['api_key'])
        delete query['api_key'];
      if (query['language'])
        delete query['language'];
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
          response = await request(parsedEndpoint, { searchParams: readyQuery });
          break;
        }

        case 'POST': {
          response = await request.post(endpoint, {
            searchParams: readyQuery,
            json: body,
          });
          break;
        }

        case 'DELETE': {
          response = await request.delete(endpoint, {
            searchParams: readyQuery,
            json: body,
          });
          break;
        }
      }

      return {
        data: JSON.parse(response.body),
        headers: response.headers,
      };
    } catch (error) {
      catchHTTPErrors(error);
      throw error;
    }
  };
};

export default (endpoints: RequestOption[]): { [key: string]: Request } => {
  const root: { [key: string]: Request } = {};

  endpoints.forEach(endpoint => {
    root[endpoint.name] = createEndpoint(endpoint.type, endpoint.endpoint);
  });

  return root;
};
