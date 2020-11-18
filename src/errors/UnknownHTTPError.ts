import BaseHTTPError from './BaseHTTPError';

export default class UnknownHTTPError extends BaseHTTPError {
  public constructor(message: string, httpCode: number) {
    super({
      httpCode,
      message,
      shortMessage: 'Unknown HTTP Error',
    });
  }
}
