import { TmdbClient } from '../../src/tmdb-client';
import {
  ChangedEntity,
  MovieChangesResponse,
  TVChangesResponse,
  PersonChangesResponse,
} from '../../src/sections/changes/types';

describe('Changes API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  it('should fetch a list of changed movies', async () => {
    const res: MovieChangesResponse = await tmdb.changes.getMovieChanges();

    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);

    if (res.results.length > 0) {
      const first: ChangedEntity = res.results[0];
      expect(first).toHaveProperty('id');
      expect(typeof first.id).toBe('number');
      expect(first).toHaveProperty('adult');
      expect(typeof first.adult).toBe('boolean');
    }

    console.log(`Fetched ${res.results.length} changed movies (page ${res.page})`);
  });

  it('should fetch a list of changed TV shows', async () => {
    const res: TVChangesResponse = await tmdb.changes.getTVChanges();

    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);

    if (res.results.length > 0) {
      const first: ChangedEntity = res.results[0];
      expect(first).toHaveProperty('id');
      expect(typeof first.id).toBe('number');
      expect(first).toHaveProperty('adult');
      expect(typeof first.adult).toBe('boolean');
    }

    console.log(`Fetched ${res.results.length} changed TV shows (page ${res.page})`);
  });

  it('should fetch a list of changed people', async () => {
    const res: PersonChangesResponse = await tmdb.changes.getPersonChanges();

    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);

    if (res.results.length > 0) {
      const first: ChangedEntity = res.results[0];
      expect(first).toHaveProperty('id');
      expect(typeof first.id).toBe('number');
      expect(first).toHaveProperty('adult');
      expect(typeof first.adult).toBe('boolean');
    }

    console.log(`Fetched ${res.results.length} changed people (page ${res.page})`);
  });
});
