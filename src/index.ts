import AccountEndpoint from './endpoints/v3/AccountEndpoint';

import {
  RequiredApiKeyError, RequiredSessionIDError
} from './errors';

interface AccountEndpointOptions {
  sessionID?: string;
  language?: string;
}

export default class MovieDB {
  private apiKey: string;
  private language: string;
  private sessionID?: string;

  public constructor(apiKey: string, language?: string) {
    if (!apiKey)
      throw new RequiredApiKeyError();

    this.apiKey = apiKey;
    this.language = language ?? 'en-US';
  }

  public setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }

  public setLanguage(language: string): void {
    this.language = language;
  }

  public setSessionID(sessionID: string): void {
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
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
