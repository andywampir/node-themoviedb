export default class UnknownError extends Error {
  public constructor(message: string) {
    super(message);
  }
}
