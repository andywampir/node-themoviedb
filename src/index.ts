import AccountEndpoint from './endpoints/v3/AccountEndpoint';
import AuthentificationEndpoint from './endpoints/v3/AuthenticationEndpoint';
import CertificationsEndpoint from './endpoints/v3/CertificationsEndpoint';
import ChangesEndpoint from './endpoints/v3/ChangesEndpoint';
import CollectionsEndpoint from './endpoints/v3/CollectionsEndpoint';

import { RequiredParameterError } from './errors';

interface AccountEndpointOptions {
  sessionID?: string;
  language?: string;
  userID?: number;
}

interface CollectionEndpointOptions {
  collectionID?: number;
  language?: string;
}

interface MovieDBConstructorOptions {
  apiKey: string;
  language?: string;
}

export default class MovieDB {
  private apiKey: string;
  private language: string;
  private sessionID?: string;

  public constructor(options: MovieDBConstructorOptions) {
    if (!options.apiKey)
      throw new RequiredParameterError('apiKey');

    this.apiKey = options.apiKey;
    this.language = options.language ?? 'en-US';
  }

  public setApiKey(apiKey: string): void {
    if (!apiKey || typeof apiKey !== 'string')
      throw new RequiredParameterError('apiKey');

    this.apiKey = apiKey;
  }

  public setLanguage(language: string): void {
    this.language = language;
  }

  public setSessionID(sessionID: string): void {
    if (!sessionID || typeof sessionID !== 'string')
      throw new RequiredParameterError('sessionID');

    this.sessionID = sessionID;
  }

  public account(options?: AccountEndpointOptions): AccountEndpoint {
    return new AccountEndpoint({
      apiKey: this.apiKey,
      sessionID: options?.sessionID ?? this.sessionID,
      language: options?.language ?? this.language,
      userID: options?.userID,
    });
  }

  public authentication(): AuthentificationEndpoint {
    return new AuthentificationEndpoint(this.apiKey);
  }

  public certifications(): CertificationsEndpoint {
    return new CertificationsEndpoint(this.apiKey);
  }

  public changes(): ChangesEndpoint {
    return new ChangesEndpoint(this.apiKey);
  }

  public collections(options?: CollectionEndpointOptions): CollectionsEndpoint {
    return new CollectionsEndpoint({
      apiKey: this.apiKey,
      language: options?.language ?? this.language,
      collectionID: options?.collectionID,
    });
  }
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
