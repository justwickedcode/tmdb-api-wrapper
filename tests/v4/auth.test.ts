import { TMDBClientV4 } from '../../src/TMDBClientV4';

describe('TMDB AuthEndpoints (v4)', () => {
  let tmdb: TMDBClientV4;

  beforeAll(() => {
    const token = process.env.TMDB_API_KEY;
    if (!token) throw new Error('Missing TMDB_API_KEY in .env');
    tmdb = new TMDBClientV4(token);
  });

  test('should create a new request token', async () => {
    const res = await tmdb.auth.createRequestToken();

    expect(res).toHaveProperty('success', true);
    expect(typeof res.request_token).toBe('string');
    expect(res.request_token.length).toBeGreaterThan(10);
  });

  test('should fail to exchange an invalid request token for access token', async () => {
    await expect(
      tmdb.auth.createAccessToken({ request_token: 'invalid_token_123' }),
    ).rejects.toBeTruthy();
  });

  test('should fail to delete an access token without authorization', async () => {
    // Create a temporary unauthenticated client
    const unauthClient = new TMDBClientV4('');
    await expect(unauthClient.auth.deleteAccessToken('fake_token')).rejects.toBeTruthy();
  });

  // ⚠️ Uncomment below if you explicitly want to revoke your own token
  // test('should revoke current access token (logout)', async () => {
  //   const res = await tmdb.auth.deleteAccessToken(process.env.TMDB_ACCESS_TOKEN_V4!);
  //   expect(res.success).toBe(true);
  // });
});
