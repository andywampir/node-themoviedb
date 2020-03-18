export default class UnknownHTTPError extends Error {
  public constructor(message: string) {
    super(message);
  }
}
