/* eslint-disable max-classes-per-file */
class BaseError extends Error {
  public code: number;
  public errorCode: number;

  public constructor(code: number, message: string, errorCode: number) {
    super(message);
    this.code = code;
    this.errorCode = errorCode;
  }
}

export class BadRequest extends BaseError {
  public constructor() {
    super(0, 'Bad Request', 400);
  }
}

export class UnauthorizedError extends BaseError {
  public constructor(code: number, message: string) {
    super(code, message, 401);
  }
}

export class NotFoundError extends BaseError {
  public constructor(code: number, message: string) {
    super(code, message, 404);
  }
}

export class RequestTimeout extends BaseError {
  public constructor() {
    super(0, 'Request Timeout', 408);
  }
}

export class TooManyRequests extends BaseError {
  public retryAfter: number;

  public constructor(retryAfter: number) {
    super(0, 'Too many requests per IP', 429);
    this.retryAfter = retryAfter;
  }
}
