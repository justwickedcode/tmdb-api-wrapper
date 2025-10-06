import { TMDBClientV4 } from '../../src/TMDBClientV4';

const token = process.env.TMDB_API_KEY!;
const account_id = '4bc8892a017a3c0f92000002';

const tmdb = new TMDBClientV4(token);
// TODO: Understand how it works and fix
describe.skip('TMDB AccountEndpoints Integration (v4)', () => {
  test('get account lists', async () => {
    const res = await tmdb.account.getLists(account_id);
    expect(res).toHaveProperty('results');
  });

  test('get favorite movies', async () => {
    const res = await tmdb.account.getFavoriteMovies(account_id);
    expect(Array.isArray(res.results)).toBe(true);
  });

  test('get rated TV shows', async () => {
    const res = await tmdb.account.getRatedTv(account_id);
    expect(res).toHaveProperty('results');
  });

  test('get recommended movies', async () => {
    const res = await tmdb.account.getRecommendedMovies(account_id);
    expect(res).toHaveProperty('results');
  });

  test('get watchlist movies', async () => {
    const res = await tmdb.account.getWatchlistMovies(account_id);
    expect(res).toHaveProperty('results');
  });
});
