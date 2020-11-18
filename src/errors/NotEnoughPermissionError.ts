import BaseHTTPError from './BaseHTTPError';

export default class NotEnoughPermissionError extends BaseHTTPError {
  public constructor(message: string, code: number) {
    super({
      message,
      statusCode: code,
      shortMessage: 'Not Enough Permission',
      httpCode: 401,
    });
  }
}
