export default class RequiredSessionIDError extends Error {
  public constructor() {
    super('You must specify session id');
  }
}
