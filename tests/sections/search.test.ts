import { TmdbClient } from '../../src/tmdb-client';

describe('Search API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;
  const exampleQuery = 'Inception';
  const examplePage = 1;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  it('should search collections', async () => {
    const res = await tmdb.search.collection({ query: exampleQuery, page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('Collection search results:', res.results);
  });

  it('should search companies', async () => {
    const res = await tmdb.search.company({ query: 'Disney', page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('Company search results:', res.results);
  });

  it('should search keywords', async () => {
    const res = await tmdb.search.keyword({ query: 'hero', page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('Keyword search results:', res.results);
  });

  it('should search movies', async () => {
    const res = await tmdb.search.movie({ query: exampleQuery, page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('Movie search results:', res.results);
  });

  it('should search multi', async () => {
    const res = await tmdb.search.multi({ query: exampleQuery, page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('Multi search results:', res.results);
  });

  it('should search people', async () => {
    const res = await tmdb.search.person({ query: 'Brad Pitt', page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('Person search results:', res.results);
  });

  it('should search TV shows', async () => {
    const res = await tmdb.search.tv({ query: 'Breaking Bad', page: examplePage });
    expect(res).toHaveProperty('results');
    console.log('TV search results:', res.results);
  });
});
