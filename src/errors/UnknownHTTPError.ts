export default class UnknownHTTPError extends Error {
  public httpCode: number;

  public constructor(message: string, httpCode: number) {
    super(message);

    this.httpCode = httpCode;
  }
}
