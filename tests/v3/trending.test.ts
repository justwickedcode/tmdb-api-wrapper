import { TMDBClientV3 } from '../../src/TMDBClientV3';

describe('Trending API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClientV3;

  beforeAll(() => {
    tmdb = new TMDBClientV3(accessToken);
  });

  const examplePage = 1;

  it('should fetch all trending items', async () => {
    const res = await tmdb.trending.getAll('day', { page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    console.log('Trending all:', res.results);
  });

  it('should fetch trending movies', async () => {
    const res = await tmdb.trending.getMovies('day', { page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    res.results.forEach((movie) => expect(movie.media_type).toBe('movie'));
    console.log('Trending movies:', res.results);
  });

  it('should fetch trending TV shows', async () => {
    const res = await tmdb.trending.getTv('day', { page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    res.results.forEach((tv) => expect(tv.media_type).toBe('tv'));
    console.log('Trending TV:', res.results);
  });

  it('should fetch trending people', async () => {
    const res = await tmdb.trending.getPeople('day', { page: examplePage });
    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    res.results.forEach((person) => expect(person.media_type).toBe('person'));
    console.log('Trending people:', res.results);
  });
});
