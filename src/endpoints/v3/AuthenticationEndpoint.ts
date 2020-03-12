/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  AuthenticationReturnType, AuthenticationValidateTokenOptions,
} from '../../interfaces/authentication';
import { SearchParametrs } from '../../interfaces/common';

export default class AuthenticationEndpoint extends Executor<AuthenticationReturnType> {
  private readonly apiKey: string;

  public constructor(apiKey: string) {
    super();

    this.apiKey = apiKey;
  }

  public newGuestSession(): AuthenticationEndpoint {
    const searchParams: SearchParametrs = { apiKey: this.apiKey };

    this.addToExecutionList(
      'newGuestSession',
      rqst('authentication/guest_session/new', { searchParams }),
    );

    return this;
  }

  public newToken(): AuthenticationEndpoint {
    const searchParams: SearchParametrs = { apiKey: this.apiKey };

    this.addToExecutionList(
      'newToken',
      rqst('authentication/token/new', { searchParams }),
    );

    return this;
  }

  public newSession(requestToken: string): AuthenticationEndpoint {
    const searchParams: SearchParametrs = { apiKey: this.apiKey };

    this.addToExecutionList(
      'newSession',
      rqst.post('authentication/session/new', {
        searchParams,
        json: { request_token: requestToken }
      }),
    );

    return this;
  }

  public validateToken(options: AuthenticationValidateTokenOptions): AuthenticationEndpoint {
    const searchParams: SearchParametrs = { apiKey: this.apiKey };

    this.addToExecutionList(
      'validateToken',
      rqst.post('authentication/token/validate_with_login', {
        searchParams,
        json: {
          username: options.username,
          password: options.password,
          request_token: options.requestToken,
        },
      }),
    );

    return this;
  }

  public convertToken(accessToken: string): AuthenticationEndpoint {
    const searchParams: SearchParametrs = { apiKey: this.apiKey };

    this.addToExecutionList(
      'convertToken',
      rqst.post('authentication/session/convert/4', {
        searchParams,
        json: { access_token: accessToken },
      }),
    );

    return this;
  }

  public deleteSession(sessionID: string): AuthenticationEndpoint {
    const searchParams: SearchParametrs = { apiKey: this.apiKey };

    this.addToExecutionList(
      'deleteSession',
      rqst.delete('authentication/session', {
        searchParams,
        json: { session_id: sessionID },
      }),
    );

    return this;
  }
}
