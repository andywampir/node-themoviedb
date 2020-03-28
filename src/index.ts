import AccountEndpoint from './endpoints/v3/AccountEndpoint';
import AuthentificationEndpoint from './endpoints/v3/AuthenticationEndpoint';
import CertificationEndpoint from './endpoints/v3/CertificationEndpoint';

import {
  RequiredApiKeyError, RequiredSessionIDError
} from './errors';

interface AccountEndpointOptions {
  sessionID?: string;
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
      throw new RequiredApiKeyError();

    this.apiKey = options.apiKey;
    this.language = options.language ?? 'en-US';
  }

  public setApiKey(apiKey: string): void {
    if (!apiKey || typeof apiKey !== 'string')
      throw new RequiredApiKeyError();

    this.apiKey = apiKey;
  }

  public setLanguage(language: string): void {
    this.language = language;
  }

  public setSessionID(sessionID: string): void {
    if (!sessionID || typeof sessionID !== 'string')
      throw new RequiredSessionIDError();

    this.sessionID = sessionID;
  }

  public account(options: AccountEndpointOptions): AccountEndpoint {
    if (!options.sessionID && !this.sessionID)
      throw new RequiredSessionIDError();

    return new AccountEndpoint({
      apiKey: this.apiKey,
      sessionID: options.sessionID ?? this.sessionID as string,
      language: options.language ?? this.language,
    });
  }

  public authentication(): AuthentificationEndpoint {
    return new AuthentificationEndpoint(this.apiKey);
  }

  public certification(): CertificationEndpoint {
    return new CertificationEndpoint(this.apiKey);
  }
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
