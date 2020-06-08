/* eslint-disable no-extra-parens */
/* eslint-disable camelcase */
import { HTTPError } from 'got';

import * as errors from './errors';

interface ErrorResponse {
  status_code: number;
  status_message: string;
}

export default (error: Error): void => {
  if (error instanceof HTTPError) {
    switch ((error as HTTPError).response.statusCode) {
      case 400: {
        throw new errors.BadRequest();
      }

      case 401: {
        const {
          status_code,
          status_message,
        } = (error as HTTPError).response.body as ErrorResponse;

        throw new errors.UnauthorizedError(status_code, status_message);
      }

      case 404: {
        const {
          status_code,
          status_message,
        } = (error as HTTPError).response.body as ErrorResponse;

        throw new errors.NotFoundError(status_code, status_message);
      }

      case 408: {
        throw new errors.RequestTimeout();
      }

      default: break;
    }
  }
};
