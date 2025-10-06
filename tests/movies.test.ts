import HTTPClient from '../src/HTTPClient';
import { MoviesEndpoints } from '../src/sections';
import { MovieListQuery } from '../src/sections/movie/types';
const API_KEY = process.env.TMDB_API_KEY!;

describe('MoviesEndpoints Integration Tests', () => {
  const client = new HTTPClient('https://api.themoviedb.org/3', API_KEY);
  const movies = new MoviesEndpoints(client);
  let testMovieId: number;

  it('fetches popular movies', async () => {
    const res = await movies.popular({ page: 1 });
    expect(res.results.length).toBeGreaterThan(0);
    testMovieId = res.results[0].id;
    console.log('Popular first movie:', res.results[0].title);
  });

  it('fetches now playing movies', async () => {
    const res = await movies.nowPlaying();
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Now Playing first movie:', res.results[0].title);
  });

  it('fetches top rated movies', async () => {
    const res = await movies.topRated();
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Top Rated first movie:', res.results[0].title);
  });

  it('fetches upcoming movies', async () => {
    const res = await movies.upcoming();
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Upcoming first movie:', res.results[0].title);
  });

  it('fetches movie details', async () => {
    const details = await movies.getDetails(testMovieId);
    expect(details).toHaveProperty('id', testMovieId);
    expect(details).toHaveProperty('title');
    console.log('Movie details:', details.title);
  });

  it('fetches movie credits', async () => {
    const credits = await movies.getCredits(testMovieId);
    expect(credits).toHaveProperty('id', testMovieId);
    expect(Array.isArray(credits.cast)).toBe(true);
    console.log('Credits cast count:', credits.cast.length);
  });

  it('fetches movie images', async () => {
    const images = await movies.getImages(testMovieId);
    expect(images).toHaveProperty('id', testMovieId);
    expect(Array.isArray(images.posters)).toBe(true);
    console.log('Movie posters count:', images.posters.length);
  });

  it('fetches release dates', async () => {
    const releaseDates = await movies.getReleaseDates(testMovieId);
    expect(releaseDates).toHaveProperty('id', testMovieId);
    expect(Array.isArray(releaseDates.results)).toBe(true);
  });

  it('fetches videos', async () => {
    const videos = await movies.getVideos(testMovieId);
    expect(videos).toHaveProperty('id', testMovieId);
    console.log('Video count:', videos.results.length);
  });

  it('fetches keywords', async () => {
    const keywords = await movies.getKeywords(testMovieId);
    expect(keywords).toHaveProperty('id', testMovieId);
    console.log('Keywords count:', keywords.keywords.length);
  });

  it('fetches reviews', async () => {
    const reviews = await movies.getReviews(testMovieId);
    expect(reviews).toHaveProperty('id', testMovieId);
    console.log('Reviews count:', reviews.results.length);
  });

  it('fetches translations', async () => {
    const translations = await movies.getTranslations(testMovieId);
    expect(translations).toHaveProperty('id', testMovieId);
    console.log('Translations count:', translations.translations.length);
  });

  it('fetches recommendations', async () => {
    const recs = await movies.getRecommendations(testMovieId);
    expect(recs.results.length).toBeGreaterThan(0);
    console.log('Recommendations first movie:', recs.results[0].title);
  });

  it('fetches similar movies', async () => {
    const similar = await movies.getSimilar(testMovieId);
    expect(similar.results.length).toBeGreaterThan(0);
    console.log('Similar first movie:', similar.results[0].title);
  });

  it('discovers movies', async () => {
    const discover = await movies.discover({ 'vote_average.gte': 8 });
    expect(discover.results.length).toBeGreaterThan(0);
    console.log('Discover first movie:', discover.results[0].title);
  });

  /** ---------------- Movie Lists Tests ---------------- */
  it('fetches now playing movies', async () => {
    const params: MovieListQuery = { page: 1, language: 'en-US', region: 'US' };
    const res = await movies.lists.nowPlaying(params);
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Now Playing first movie:', res.results[0].title);
  });

  it('fetches popular movies', async () => {
    const params: MovieListQuery = { page: 1, language: 'en-US', region: 'US' };
    const res = await movies.lists.popular(params);
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Popular first movie:', res.results[0].title);
  });

  it('fetches top rated movies', async () => {
    const params: MovieListQuery = { page: 1, language: 'en-US', region: 'US' };
    const res = await movies.lists.topRated(params);
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Top Rated first movie:', res.results[0].title);
  });

  it('fetches upcoming movies', async () => {
    const params: MovieListQuery = { page: 1, language: 'en-US', region: 'US' };
    const res = await movies.lists.upcoming(params);
    expect(res.results.length).toBeGreaterThan(0);
    console.log('Upcoming first movie:', res.results[0].title);
  });
});
