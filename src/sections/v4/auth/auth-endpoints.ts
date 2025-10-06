import HTTPClient from '../../../HTTPClient';
import {
  CreateAccessTokenRequest,
  CreateAccessTokenResponse,
  CreateRequestTokenResponse,
  DeleteAccessTokenResponse,
} from './types';

const BASE_PATH = '/auth';

export class AuthEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Create a new request token (used for user authentication) */
  async createRequestToken(): Promise<CreateRequestTokenResponse> {
    return this.http.post<CreateRequestTokenResponse>(`${BASE_PATH}/request_token`);
  }

  /** Exchange an approved request token for an access token */
  async createAccessToken(body: CreateAccessTokenRequest): Promise<CreateAccessTokenResponse> {
    return this.http.post<CreateAccessTokenResponse>(`${BASE_PATH}/access_token`, body);
  }

  /** Revoke an access token (logout) */
  async deleteAccessToken(access_token: string): Promise<DeleteAccessTokenResponse> {
    return this.http.delete<DeleteAccessTokenResponse>(`${BASE_PATH}/access_token`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  }
}
