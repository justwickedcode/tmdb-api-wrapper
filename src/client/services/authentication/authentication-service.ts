import * as orval from '../../__generated__/api/authentication/authentication';
import {
  AuthenticationCreateSessionBody,
  AuthenticationCreateSessionFromLoginBody,
  AuthenticationCreateSessionFromV4TokenBody,
  AuthenticationDeleteSessionBody,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../types';

export default class AuthenticationService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async validateKey() {
    return await orval.authenticationValidateKey(this.defaultOptions);
  }

  public async createGuestSession() {
    return await orval.authenticationCreateGuestSession(this.defaultOptions);
  }

  public async createRequestToken() {
    return await orval.authenticationCreateRequestToken(this.defaultOptions);
  }

  public async createSession(authenticationCreateSessionBody: AuthenticationCreateSessionBody) {
    return await orval.authenticationCreateSession(
      authenticationCreateSessionBody,
      this.defaultOptions,
    );
  }

  public async createSessionFromV4Token(
    authenticationCreateSessionFromV4TokenBody: AuthenticationCreateSessionFromV4TokenBody,
  ) {
    return await orval.authenticationCreateSessionFromV4Token(
      authenticationCreateSessionFromV4TokenBody,
      this.defaultOptions,
    );
  }

  public async createSessionFromLogin(
    authenticationCreateSessionFromLoginBody: AuthenticationCreateSessionFromLoginBody,
  ) {
    return await orval.authenticationCreateSessionFromLogin(
      authenticationCreateSessionFromLoginBody,
      this.defaultOptions,
    );
  }

  public async deleteSession(authenticationDeleteSessionBody: AuthenticationDeleteSessionBody) {
    return await orval.authenticationDeleteSession(
      authenticationDeleteSessionBody,
      this.defaultOptions,
    );
  }
}
