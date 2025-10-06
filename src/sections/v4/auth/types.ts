/** Request to exchange request token for access token */
export interface CreateAccessTokenRequest {
  request_token: string;
}

/** Response from creating an access token */
export interface CreateAccessTokenResponse {
  access_token: string;
  account_id: string;
  success: boolean;
  status_message?: string;
}

/** Response from creating a request token */
export interface CreateRequestTokenResponse {
  request_token: string;
  success: boolean;
  status_message?: string;
}

/** Response from deleting (revoking) an access token */
export interface DeleteAccessTokenResponse {
  success: boolean;
  status_message?: string;
}
