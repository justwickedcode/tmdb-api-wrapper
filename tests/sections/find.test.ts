import { TMDBClient } from '../../src/TMDBClient';
import { FindResponse } from '../../src/sections/find/types';

describe('Find API integration via TMDBClient', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  it('should find a movie by IMDb ID', async () => {
    const imdbID = 'tt0111161'; // The Shawshank Redemption
    const res: FindResponse = await tmdb.find.byID(imdbID, { external_source: 'imdb_id' });

    expect(res.movie_results.length).toBeGreaterThan(0);
    expect(res.movie_results[0]).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
    });
    console.log('Movie result:', res.movie_results[0]);
  });

  it('should find a TV show by TVDB ID', async () => {
    const tvdbID = '81189'; // Breaking Bad
    const res: FindResponse = await tmdb.find.byID(tvdbID, { external_source: 'tvdb_id' });

    expect(res.tv_results.length).toBeGreaterThan(0);
    expect(res.tv_results[0]).toMatchObject({ id: expect.any(Number), name: expect.any(String) });
    console.log('TV result:', res.tv_results[0]);
  });

  it('should find a person by IMDb ID', async () => {
    const personIMDbID = 'nm0000209'; // Brad Pitt
    const res: FindResponse = await tmdb.find.byID(personIMDbID, { external_source: 'imdb_id' });

    expect(res.person_results.length).toBeGreaterThan(0);
    expect(res.person_results[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
    });
    console.log('Person result:', res.person_results[0]);
  });

  it('should handle language option', async () => {
    const imdbID = 'tt0111161'; // The Shawshank Redemption
    const res: FindResponse = await tmdb.find.byID(imdbID, {
      external_source: 'imdb_id',
      language: 'fr-FR',
    });

    expect(res.movie_results.length).toBeGreaterThan(0);
    expect(res.movie_results[0]).toHaveProperty('title');
    console.log('Movie title in French:', res.movie_results[0].title);
  });

  it('should throw an error if external_source is missing', async () => {
    await expect(tmdb.find.byID('tt0111161', {} as any)).rejects.toThrow(
      'external_source is required',
    );
  });

  it('should return empty arrays for unknown ID', async () => {
    const res: FindResponse = await tmdb.find.byID('notarealid123', { external_source: 'imdb_id' });

    expect(res.movie_results).toEqual([]);
    expect(res.tv_results).toEqual([]);
    expect(res.person_results).toEqual([]);
  });
});
