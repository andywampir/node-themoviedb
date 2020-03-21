export default class NotFoundError extends Error {
  public code: number;

  public constructor(code: number) {
    super('The resource you requested could not be found');

    this.code = code;
  }
}
