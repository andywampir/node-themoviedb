/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  AuthenticationReturnType, AuthenticationValidateTokenOptions,
} from '../../interfaces/v3/authentication';

export default class AuthenticationEndpoint extends Executor<AuthenticationReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super(rqst);

    this.apiKey = apiKey;
  }

  public newGuestSession(): AuthenticationEndpoint {
    this.addToExecutionList(
      'newGuestSession',
      {
        uri: 'authentication/guest_session/new',
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public newToken(): AuthenticationEndpoint {
    this.addToExecutionList(
      'newToken',
      {
        uri: 'authentication/token/new',
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public newSession(requestToken: string): AuthenticationEndpoint {
    this.addToExecutionList(
      'newSession',
      {
        uri: 'authentication/session/new',
        method: 'post',
        searchParams: { api_key: this.apiKey },
        json: { request_token: requestToken },
      },
    );

    return this;
  }

  public validateToken(options: AuthenticationValidateTokenOptions): AuthenticationEndpoint {
    this.addToExecutionList(
      'validateToken',
      {
        uri: 'authentication/token/validate_with_login',
        method: 'post',
        searchParams: { api_key: this.apiKey },
        json: {
          username: options.username,
          password: options.password,
          request_token: options.requestToken,
        },
      },
    );

    return this;
  }

  public convertToken(accessToken: string): AuthenticationEndpoint {
    this.addToExecutionList(
      'convertToken',
      {
        uri: 'authentication/session/convert/4',
        method: 'post',
        searchParams: { api_key: this.apiKey },
        json: { access_token: accessToken },
      },
    );

    return this;
  }

  public deleteSession(sessionID: string): AuthenticationEndpoint {
    this.addToExecutionList(
      'deleteSession',
      {
        uri: 'authentication/session',
        method: 'delete',
        searchParams: { api_key: this.apiKey },
        json: { session_id: sessionID },
      },
    );

    return this;
  }
}
