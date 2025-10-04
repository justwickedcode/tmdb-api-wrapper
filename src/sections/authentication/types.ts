// Guest session
export interface GuestSessionResponse {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}

// Request token
export interface RequestTokenResponse {
    success: boolean;
    expires_at: string;
    request_token: string;
}

// Validate API key
export interface ValidateKeyResponse {
    success: boolean;
    status_code: number;
    status_message: string;
}

// Create v3 session from request token
export interface CreateSessionResponse {
    success: boolean;
    session_id: string;
}

// Create v3 session from v4 access token
export interface CreateSessionFromV4Response {
    success: boolean;
    session_id: string;
}

// Request body for creating v3 session from v4 token
export interface CreateSessionFromV4Request {
    access_token: string; // v4 access token
}

// Validate request token with username & password
export interface ValidateRequestTokenWithLoginRequest {
    username: string;
    password: string;
    request_token: string;
}

export interface ValidateRequestTokenWithLoginResponse {
    success: boolean;
    expires_at: string;
    request_token: string;
}

// Delete session
export interface DeleteSessionRequest {
    session_id: string;
}

export interface DeleteSessionResponse {
    success: boolean;
}
