import { TmdbClient } from '../../src/tmdb-client';

describe('Genres API integration via TmdbClient', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  it('should fetch movie genres', async () => {
    const res = await tmdb.genres.getMovieGenres();
    expect(Array.isArray(res.genres)).toBe(true);
    expect(res.genres.length).toBeGreaterThan(0);
    expect(res.genres[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
    });
    console.log('Movie genre sample:', res.genres[0]);
  });

  it('should fetch TV genres', async () => {
    const res = await tmdb.genres.getTVGenres();
    expect(Array.isArray(res.genres)).toBe(true);
    expect(res.genres.length).toBeGreaterThan(0);
    expect(res.genres[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
    });
    console.log('TV genre sample:', res.genres[0]);
  });

  it('should fetch movie genres with language parameter', async () => {
    const res = await tmdb.genres.getMovieGenres({ language: 'fr-FR' });
    expect(Array.isArray(res.genres)).toBe(true);
    console.log('French movie genre sample:', res.genres[0].name);
  });

  it('should fetch TV genres with language parameter', async () => {
    const res = await tmdb.genres.getTVGenres({ language: 'es-ES' });
    expect(Array.isArray(res.genres)).toBe(true);
    console.log('Spanish TV genre sample:', res.genres[0].name);
  });
});
