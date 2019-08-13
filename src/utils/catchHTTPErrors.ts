import { HTTPError } from 'got';
import * as errors from './errors';

export default (error: Error) => {
  if (error instanceof HTTPError) {
    switch (error.statusCode) {
      case 400: {
        throw new errors.BadRequest();
      }

      case 401: {
        const {
          status_code,
          status_message,
        } = error.response.body;

        throw new errors.UnauthorizedError(status_code, status_message);
      }

      case 404: {
        const {
          status_code,
          status_message,
        } = error.response.body;

        throw new errors.NotFoundError(status_code, status_message);
      }

      case 408: {
        throw new errors.RequestTimeout();
      }

      case 429: {
        const retryAfter = parseInt(error.headers['retry-after'], 10);

        throw new errors.TooManyRequests(retryAfter);
      }

      default: break;
    }
  }
};
