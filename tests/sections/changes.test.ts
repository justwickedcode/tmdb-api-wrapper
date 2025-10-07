import { TmdbClient } from '../../src/tmdb-client';
import {
  ChangedEntity,
  MovieChangesResponse,
  TVChangesResponse,
  PersonChangesResponse,
} from '../../src/sections';

describe('Changes API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  const validateResults = (results: ChangedEntity[]) => {
    expect(Array.isArray(results)).toBe(true);
    if (results.length > 0) {
      const first = results[0];
      expect(first).toHaveProperty('id');
      expect(typeof first.id).toBe('number');
      expect(first).toHaveProperty('adult');
      expect(typeof first.adult).toBe('boolean');
    }
  };

  it('should fetch changed movies with no params', async () => {
    const params = undefined;
    console.log('Testing getMovieChanges with params:', params);
    const res: MovieChangesResponse = await tmdb.changes.getMovieChanges(params);
    validateResults(res.results);
    console.log(`Fetched ${res.results.length} changed movies (page ${res.page})`);
  });

  it('should fetch changed movies with all query params', async () => {
    const params = { start_date: '2025-10-01', end_date: '2025-10-07', page: 2 };
    console.log('Testing getMovieChanges with params:', params);
    const res: MovieChangesResponse = await tmdb.changes.getMovieChanges(params);
    validateResults(res.results);
    expect(res.page).toBe(2);
    console.log(`Fetched ${res.results.length} changed movies (page ${res.page})`);
  });

  it('should fetch changed TV shows with only start_date', async () => {
    const params = { start_date: '2025-10-01' };
    console.log('Testing getTVChanges with params:', params);
    const res: TVChangesResponse = await tmdb.changes.getTVChanges(params);
    validateResults(res.results);
    console.log(`Fetched ${res.results.length} changed TV shows (page ${res.page})`);
  });

  it('should fetch changed TV shows with only end_date', async () => {
    const params = { end_date: '2025-10-07' };
    console.log('Testing getTVChanges with params:', params);
    const res: TVChangesResponse = await tmdb.changes.getTVChanges(params);
    validateResults(res.results);
    console.log(`Fetched ${res.results.length} changed TV shows (page ${res.page})`);
  });

  it('should fetch changed people with page param', async () => {
    const params = { page: 1 };
    console.log('Testing getPersonChanges with params:', params);
    const res: PersonChangesResponse = await tmdb.changes.getPersonChanges(params);
    validateResults(res.results);
    expect(res.page).toBe(1);
    console.log(`Fetched ${res.results.length} changed people (page ${res.page})`);
  });

  it('should fetch changed people with all query params', async () => {
    const params = { start_date: '2025-10-01', end_date: '2025-10-07', page: 1 };
    console.log('Testing getPersonChanges with params:', params);
    const res: PersonChangesResponse = await tmdb.changes.getPersonChanges(params);
    validateResults(res.results);
    expect(res.page).toBe(1);
    console.log(`Fetched ${res.results.length} changed people (page ${res.page})`);
  });
});
