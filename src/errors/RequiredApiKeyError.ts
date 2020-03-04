export default class RequiredApiKeyError extends Error {
  public constructor() {
    super('You must specify api key');
  }
}
