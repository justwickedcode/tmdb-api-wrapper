import HttpConnector from '../../http-connector';
import {
  GuestSessionResponse,
  RequestTokenResponse,
  ValidateKeyResponse,
  CreateSessionResponse,
  CreateSessionFromV4Response,
  CreateSessionFromV4Request,
  ValidateRequestTokenWithLoginRequest,
  ValidateRequestTokenWithLoginResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
} from './types';

const BASE_PATH = '/authentication';
//TODO: Fix auth workflow for it to actually be usable
export class AuthenticationEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** ----------------- Guest Sessions ----------------- */

  /** Create a new guest session */
  createGuestSession(): Promise<GuestSessionResponse> {
    return this.http.get(`${BASE_PATH}/guest_session/new`);
  }

  /** ----------------- Request Tokens ----------------- */

  /** Create a new request token */
  createRequestToken(): Promise<RequestTokenResponse> {
    return this.http.get(`${BASE_PATH}/token/new`);
  }

  /** Validate a request token using username and password */
  validateRequestTokenWithLogin(
    body: ValidateRequestTokenWithLoginRequest,
  ): Promise<ValidateRequestTokenWithLoginResponse> {
    return this.http.post(`${BASE_PATH}/token/validate_with_login`, body);
  }

  /** ----------------- API Key Validation ----------------- */

  /** Validate the API key */
  validateKey(): Promise<ValidateKeyResponse> {
    return this.http.get(BASE_PATH);
  }

  /** ----------------- Sessions ----------------- */

  /** Create a new session using a validated request token */
  createSession(request_token: string): Promise<CreateSessionResponse> {
    return this.http.post(`${BASE_PATH}/session/new`, { request_token });
  }

  /** Create a sections session from a validated v4 access token */
  createSessionFromV4(body: CreateSessionFromV4Request): Promise<CreateSessionFromV4Response> {
    return this.http.post(`${BASE_PATH}/session/convert/4`, body);
  }

  /** Delete a TmdbClient session */
  deleteSession(body: DeleteSessionRequest): Promise<DeleteSessionResponse> {
    return this.http.delete(`${BASE_PATH}/session`, {
      body: JSON.stringify(body), // required for DELETE requests
    });
  }
}
