import { TmdbClient } from '../../src/tmdb-client';

describe('Genres API integration via TmdbClient', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  it('should fetch movie genres', async () => {
    const res = await tmdb.genres.getMovieGenres();
    expect(res.genres.length).toBeGreaterThan(0);
    expect(res.genres[0]).toHaveProperty('id');
    expect(res.genres[0]).toHaveProperty('name');
    console.log('Movie genre sample:', res.genres[0]);
  });

  it('should fetch TV genres', async () => {
    const res = await tmdb.genres.getTVGenres();
    expect(res.genres.length).toBeGreaterThan(0);
    expect(res.genres[0]).toHaveProperty('id');
    expect(res.genres[0]).toHaveProperty('name');
    console.log('TV genre sample:', res.genres[0]);
  });

  it('should fetch movie genres in French', async () => {
    const res = await tmdb.genres.getMovieGenres('fr-FR');
    expect(res.genres.length).toBeGreaterThan(0);
    console.log('French movie genre sample:', res.genres[0].name);
  });

  it('should fetch TV genres in Spanish', async () => {
    const res = await tmdb.genres.getTVGenres('es-ES');
    expect(res.genres.length).toBeGreaterThan(0);
    console.log('Spanish TV genre sample:', res.genres[0].name);
  });
});
