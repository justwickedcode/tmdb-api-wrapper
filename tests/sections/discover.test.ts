import { TmdbClient } from '../../src/tmdb-client';
import { DiscoverMovieResponse, DiscoverTVResponse } from '../../src/sections';

describe('TmdbClient Discover API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  describe('Movies', () => {
    it('should discover movies without options', async () => {
      const res: DiscoverMovieResponse = await tmdb.discover.getMovies();
      expect(res).toHaveProperty('page');
      expect(res).toHaveProperty('results');
      expect(Array.isArray(res.results)).toBe(true);
      expect(res).toHaveProperty('total_pages');
      expect(res).toHaveProperty('total_results');
      console.log('Discover movies response:', res.results.slice(0, 3)); // first 3 results
    });

    it('should discover movies with filters', async () => {
      const res: DiscoverMovieResponse = await tmdb.discover.getMovies({
        language: 'en-US',
        sort_by: 'popularity.desc',
        vote_average_gte: 7,
      });
      console.log('Filtered discover movies:', res.results.slice(0, 3));
    });

    it('should ignore undefined or null params', async () => {
      const res: DiscoverMovieResponse = await tmdb.discover.getMovies({
        language: undefined,
        page: null,
      } as any);
      expect(Array.isArray(res.results)).toBe(true);
      console.log('Discover movies with undefined/null params:', res.results.slice(0, 3));
    });
  });

  describe('TV Shows', () => {
    it('should discover TV shows without options', async () => {
      const res: DiscoverTVResponse = await tmdb.discover.getTVShows();
      expect(res).toHaveProperty('page');
      expect(res).toHaveProperty('results');
      expect(Array.isArray(res.results)).toBe(true);
      expect(res).toHaveProperty('total_pages');
      expect(res).toHaveProperty('total_results');
      console.log('Discover TV shows response:', res.results.slice(0, 3));
    });

    it('should discover TV shows with filters', async () => {
      const res: DiscoverTVResponse = await tmdb.discover.getTVShows({
        language: 'en-US',
        sort_by: 'popularity.desc',
        'vote_average.gte': 8,
        with_genres: '18,35',
      });
      expect(res.results.every((r) => r.vote_average >= 8)).toBe(true);
      console.log('Filtered discover TV shows:', res.results.slice(0, 3));
    });

    it('should ignore undefined or null params for TV', async () => {
      const res: DiscoverTVResponse = await tmdb.discover.getTVShows({
        language: undefined,
        'vote_count.lte': null,
      } as any);
      expect(Array.isArray(res.results)).toBe(true);
      console.log('Discover TV shows with undefined/null params:', res.results.slice(0, 3));
    });
  });
});
