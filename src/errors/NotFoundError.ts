import BaseHTTPError from './BaseHTTPError';

export default class NotFoundError extends BaseHTTPError {
  public constructor(code: number) {
    super({
      statusCode: code,
      httpCode: 404,
      message: 'The resource you request could not be found',
      shortMessage: 'Not Found',
    });
  }
}
