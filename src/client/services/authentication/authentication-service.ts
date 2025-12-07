import { authenticationValidateKey, authenticationCreateGuestSession, authenticationCreateRequestToken, AuthenticationCreateSessionBody, authenticationCreateSession, AuthenticationCreateSessionFromV4TokenBody, authenticationCreateSessionFromV4Token, AuthenticationCreateSessionFromLoginBody, authenticationCreateSessionFromLogin, AuthenticationDeleteSessionBody, authenticationDeleteSession } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class AuthenticationService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async validateKey() {
    return await authenticationValidateKey(this.defaultOptions);
  }

  public async createGuestSession() {
    return await authenticationCreateGuestSession(this.defaultOptions);
  }

  public async createRequestToken() {
    return await authenticationCreateRequestToken(this.defaultOptions);
  }

  public async createSession(authenticationCreateSessionBody: AuthenticationCreateSessionBody) {
    return await authenticationCreateSession(
      authenticationCreateSessionBody,
      this.defaultOptions,
    );
  }

  public async createSessionFromV4Token(
    authenticationCreateSessionFromV4TokenBody: AuthenticationCreateSessionFromV4TokenBody,
  ) {
    return await authenticationCreateSessionFromV4Token(
      authenticationCreateSessionFromV4TokenBody,
      this.defaultOptions,
    );
  }

  public async createSessionFromLogin(
    authenticationCreateSessionFromLoginBody: AuthenticationCreateSessionFromLoginBody,
  ) {
    return await authenticationCreateSessionFromLogin(
      authenticationCreateSessionFromLoginBody,
      this.defaultOptions,
    );
  }

  public async deleteSession(authenticationDeleteSessionBody: AuthenticationDeleteSessionBody) {
    return await authenticationDeleteSession(
      authenticationDeleteSessionBody,
      this.defaultOptions,
    );
  }
}
