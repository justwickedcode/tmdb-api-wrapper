import { TMDBClientV3 } from '../../src/TMDBClientV3';

describe('Keywords API integration via TMDBClientV3', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClientV3;

  beforeAll(() => {
    tmdb = new TMDBClientV3(accessToken);
  });

  it('should fetch keyword details by ID', async () => {
    // Example keyword ID: 3423 = liquor
    const keywordId = 3423;

    const keyword = await tmdb.keywords.getDetails(keywordId);
    expect(keyword).toHaveProperty('id', keywordId);
    expect(keyword).toHaveProperty('name');
    console.log('Keyword details:', keyword);
  });

  it('should fetch movies for a keyword', async () => {
    // Example keyword ID: 3423 = liquor
    const keywordId = 3423;

    const movies = await tmdb.keywords.getMoviesByKeyword(keywordId, {
      language: 'en-US',
      page: 1,
      include_adult: false,
    });

    expect(movies).toHaveProperty('results');
    expect(Array.isArray(movies.results)).toBe(true);
    console.log(`Movies for keyword ${keywordId}:`, movies.results.slice(0, 3));
  });

  it('should fetch movies for a keyword without optional params', async () => {
    // Example keyword ID: 3423 = liquor
    const keywordId = 3423;

    const movies = await tmdb.keywords.getMoviesByKeyword(keywordId);

    expect(movies).toHaveProperty('results');
    expect(Array.isArray(movies.results)).toBe(true);
    console.log(`Movies for keyword ${keywordId} (default params):`, movies.results.slice(0, 3));
  });
});
