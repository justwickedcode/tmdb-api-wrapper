import { TMDBClientV3 } from '../../src/TMDBClientV3';
import {
  AddFavoriteRequestBody,
  AddToWatchlistRequestBody,
  AccountList,
  Movie,
  TV,
  RatedTVEpisode,
} from '../../src/sections/v3/account/types';

// Helper for paginated responses
function checkPaginatedResponse<T>(res: {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}) {
  expect(res).toHaveProperty('results');
  expect(Array.isArray(res.results)).toBe(true);
  expect(res).toHaveProperty('page');
  expect(res).toHaveProperty('total_pages');
  expect(res).toHaveProperty('total_results');
}

describe('AccountEndpoints API endpoints', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  const sessionId = process.env.TMDB_SESSION_ID!;
  const accountId = Number(process.env.TMDB_ACCOUNT_ID!);
  let tmdb: TMDBClientV3;

  beforeAll(() => {
    tmdb = new TMDBClientV3(accessToken);
  });

  // ----------------- AccountEndpoints -----------------
  it('should fetch account details', async () => {
    const details = await tmdb.account.getDetails(accountId, sessionId);
    expect(details).toHaveProperty('id');
    expect(details).toHaveProperty('username');
    expect(details.avatar).toBeDefined();
    console.log('AccountEndpoints details:', details);
  });

  // ----------------- Favorites -----------------
  it('should add a movie to favorites', async () => {
    const body: AddFavoriteRequestBody = {
      media_id: 763215,
      media_type: 'movie',
      favorite: true,
    };
    const res = await tmdb.account.addFavorite(accountId, body, sessionId);
    expect(res).toHaveProperty('status_code');
    expect(res.status_code).toBeGreaterThan(0);
    expect(res).toHaveProperty('status_message');
    console.log('Add favorite response:', res);
  });

  it('should add a movie to watchlist', async () => {
    const body: AddToWatchlistRequestBody = {
      media_id: 9806,
      media_type: 'movie',
      watchlist: true,
    };
    const res = await tmdb.account.addToWatchlist(accountId, body, sessionId);
    expect(res).toHaveProperty('status_code');
    expect(res.status_code).toBeGreaterThan(0);
    expect(res).toHaveProperty('status_message');
    console.log('Add to watchlist response:', res);
  });

  // ----------------- Favorites lists -----------------
  it('should fetch favorite movies', async () => {
    const res = await tmdb.account.getFavoriteMovies(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<Movie>(res);
    if (res.results.length > 0) {
      const m = res.results[0];
      expect(m).toHaveProperty('id');
      expect(m).toHaveProperty('title');
      expect(m).toHaveProperty('release_date');
    }
    console.log(
      'Favorite movies:',
      res.results.map((m) => m.title),
    );
  });

  it('should fetch favorite TV shows', async () => {
    const res = await tmdb.account.getFavoriteTV(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<TV>(res);
    if (res.results.length > 0) {
      const tv = res.results[0];
      expect(tv).toHaveProperty('id');
      expect(tv).toHaveProperty('name');
      expect(tv).toHaveProperty('first_air_date');
    }
    console.log(
      'Favorite TV shows:',
      res.results.map((tv) => tv.name),
    );
  });

  // ----------------- Custom Lists -----------------
  it('should fetch custom lists', async () => {
    const res = await tmdb.account.getCustomLists(accountId, { page: 1 }, sessionId);
    checkPaginatedResponse<AccountList>(res);
    if (res.results.length > 0) {
      const list = res.results[0];
      expect(list).toHaveProperty('id');
      expect(list).toHaveProperty('name');
      expect(list).toHaveProperty('description');
      expect(list).toHaveProperty('item_count');
    }
    console.log(
      'Custom lists:',
      res.results.map((l) => l.name),
    );
  });

  // ----------------- Rated Movies & TV -----------------
  it('should fetch rated movies', async () => {
    const res = await tmdb.account.getRatedMovies(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<Movie & { rating: number }>(res);
    if (res.results.length > 0) {
      const m = res.results[0];
      expect(m).toHaveProperty('id');
      expect(m).toHaveProperty('title');
      expect(m).toHaveProperty('release_date');
      expect(m).toHaveProperty('rating');
    }
    console.log(
      'Rated movies:',
      res.results.map((m) => `${m.title} (${m.rating})`),
    );
  });

  it('should fetch rated TV shows', async () => {
    const res = await tmdb.account.getRatedTV(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<TV & { rating: number }>(res);
    if (res.results.length > 0) {
      const tv = res.results[0];
      expect(tv).toHaveProperty('id');
      expect(tv).toHaveProperty('name');
      expect(tv).toHaveProperty('first_air_date');
      expect(tv).toHaveProperty('rating');
    }
    console.log(
      'Rated TV shows:',
      res.results.map((tv) => `${tv.name} (${tv.rating})`),
    );
  });

  it('should fetch rated TV episodes', async () => {
    const res = await tmdb.account.getRatedTVEpisodes(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<RatedTVEpisode>(res);
    if (res.results.length > 0) {
      const ep = res.results[0];
      expect(ep).toHaveProperty('id');
      expect(ep).toHaveProperty('name');
      expect(ep).toHaveProperty('season_number');
      expect(ep).toHaveProperty('episode_number');
      expect(ep).toHaveProperty('rating');
    }
    console.log(
      'Rated TV episodes:',
      res.results.map(
        (ep) => `${ep.name} (S${ep.season_number}E${ep.episode_number}, rating: ${ep.rating})`,
      ),
    );
  });

  // ----------------- Watchlists -----------------
  it('should fetch watchlist movies', async () => {
    const res = await tmdb.account.getWatchlistMovies(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<Movie>(res);
    if (res.results.length > 0) {
      const m = res.results[0];
      expect(m).toHaveProperty('id');
      expect(m).toHaveProperty('title');
      expect(m).toHaveProperty('release_date');
    }
    console.log(
      'Watchlist movies:',
      res.results.map((m) => m.title),
    );
  });

  it('should fetch watchlist TV shows', async () => {
    const res = await tmdb.account.getWatchlistTV(
      accountId,
      { language: 'en-US', page: 1, sort_by: 'created_at.desc' },
      sessionId,
    );
    checkPaginatedResponse<TV>(res);
    if (res.results.length > 0) {
      const tv = res.results[0];
      expect(tv).toHaveProperty('id');
      expect(tv).toHaveProperty('name');
      expect(tv).toHaveProperty('first_air_date');
    }
    console.log(
      'Watchlist TV shows:',
      res.results.map((tv) => tv.name),
    );
  });
});
