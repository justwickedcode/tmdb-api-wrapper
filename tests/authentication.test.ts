import { TMDBClient } from '../src/TMDBClient';
import {
  GuestSessionResponse,
  RequestTokenResponse,
  ValidateKeyResponse,
} from '../src/sections/authentication/types';

describe('Authentication API integration', () => {
  const apiKey = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(apiKey);
  });

  // ----------------- Guest Session -----------------
  it('should create a guest session', async () => {
    const res: GuestSessionResponse = await tmdb.authentication.createGuestSession();
    expect(res.success).toBe(true);
    expect(res.guest_session_id).toBeDefined();
    expect(res.expires_at).toBeDefined();
    console.log('Guest session:', res);
  });

  // ----------------- Request Token -----------------
  it('should create a request token', async () => {
    const res: RequestTokenResponse = await tmdb.authentication.createRequestToken();
    expect(res.success).toBe(true);
    expect(res.request_token).toBeDefined();
    expect(res.expires_at).toBeDefined();
    console.log('Request token:', res);
  });

  // ----------------- API Key Validation -----------------
  it('should validate the API key', async () => {
    const res: ValidateKeyResponse = await tmdb.authentication.validateKey();
    expect(res.success).toBe(true);
    console.log('API key validation:', res);
  });
});
