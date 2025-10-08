import { TmdbClient } from '../../src/tmdb-client';

describe('Trending API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  const examplePage = 1;

  it('should fetch all trending items', async () => {
    const res = await tmdb.trending.getAll({ time_window: 'day', page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    console.log('Trending all:', res.results);
  });

  it('should fetch trending movies', async () => {
    const res = await tmdb.trending.getMovies({ time_window: 'day', page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    res.results.forEach((movie) => expect(movie.media_type).toBe('movie'));
    console.log('Trending movies:', res.results);
  });

  it('should fetch trending TV shows', async () => {
    const res = await tmdb.trending.getTv({ time_window: 'day', page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    res.results.forEach((tv) => expect(tv.media_type).toBe('tv'));
    console.log('Trending TV:', res.results);
  });

  it('should fetch trending people', async () => {
    const res = await tmdb.trending.getPeople({ time_window: 'day', page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    res.results.forEach((person) => expect(person.media_type).toBe('person'));
    console.log('Trending people:', res.results);
  });
});
