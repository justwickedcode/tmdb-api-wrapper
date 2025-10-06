import { TMDBClient } from '../../src/TMDBClient';

describe('People API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;
  const examplePersonId = 287; // Brad Pitt
  const examplePage = 1;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  it('should fetch person details', async () => {
    const details = await tmdb.people.getDetails(examplePersonId);
    expect(details).toHaveProperty('id', examplePersonId);
    expect(details).toHaveProperty('name');
    console.log('Person details:', details);
  });

  it('should fetch person changes', async () => {
    const changes = await tmdb.people.getChanges(examplePersonId);
    expect(Array.isArray(changes.changes)).toBe(true);
    console.log('Person changes:', changes.changes);
  });

  it('should fetch combined credits', async () => {
    const credits = await tmdb.people.getCombinedCredits(examplePersonId);
    expect(credits).toHaveProperty('id', examplePersonId);
    expect(Array.isArray(credits.cast)).toBe(true);
    expect(Array.isArray(credits.crew)).toBe(true);
    console.log('Combined credits:', credits);
  });

  it('should fetch external IDs', async () => {
    const externalIds = await tmdb.people.getExternalIds(examplePersonId);
    expect(externalIds).toHaveProperty('id', examplePersonId);
    expect(externalIds).toHaveProperty('imdb_id');
    console.log('External IDs:', externalIds);
  });

  it('should fetch person images', async () => {
    const images = await tmdb.people.getImages(examplePersonId);
    expect(images).toHaveProperty('id', examplePersonId);
    expect(Array.isArray(images.profiles)).toBe(true);
    console.log('Images:', images.profiles);
  });

  it('should fetch latest person', async () => {
    const latest = await tmdb.people.getLatest();
    expect(latest).toHaveProperty('id');
    expect(latest).toHaveProperty('name');
    console.log('Latest person:', latest);
  });

  it('should fetch movie credits', async () => {
    const movieCredits = await tmdb.people.getMovieCredits(examplePersonId);
    expect(movieCredits).toHaveProperty('id', examplePersonId);
    expect(Array.isArray(movieCredits.cast)).toBe(true);
    expect(Array.isArray(movieCredits.crew)).toBe(true);
    console.log('Movie credits:', movieCredits);
  });

  it('should fetch TV credits', async () => {
    const tvCredits = await tmdb.people.getTvCredits(examplePersonId);
    expect(tvCredits).toHaveProperty('id', examplePersonId);
    expect(Array.isArray(tvCredits.cast)).toBe(true);
    expect(Array.isArray(tvCredits.crew)).toBe(true);
    console.log('TV credits:', tvCredits);
  });

  it('should fetch translations', async () => {
    const translations = await tmdb.people.getTranslations(examplePersonId);
    expect(translations).toHaveProperty('id', examplePersonId);
    expect(Array.isArray(translations.translations)).toBe(true);
    console.log('Translations:', translations.translations);
  });

  it('should fetch popular people from lists', async () => {
    const popularPeople = await tmdb.people.lists.popular({ page: examplePage });
    expect(popularPeople).toHaveProperty('page', examplePage);
    expect(Array.isArray(popularPeople.results)).toBe(true);
    console.log('Popular people:', popularPeople.results);
  });
});
