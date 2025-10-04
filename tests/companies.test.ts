import { TMDBClient } from '../src/TMDBClient';

describe('Company API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  const companyId = 2; // Disney
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  it('should fetch company details', async () => {
    const details = await tmdb.companies.getDetails(companyId);
    expect(details).toHaveProperty('id', companyId);
    expect(details).toHaveProperty('name');
    expect(details).toHaveProperty('logo_path');
    console.log('Company details test output:', details);
  });

  it('should fetch company alternative names', async () => {
    const altNames = await tmdb.companies.getAlternativeNames(companyId);
    expect(altNames).toHaveProperty('id', companyId);
    expect(Array.isArray(altNames.results)).toBe(true);
    console.log('Company alternative names test output:', altNames.results);
  });

  it('should fetch company images', async () => {
    const images = await tmdb.companies.getImages(companyId);
    expect(images).toHaveProperty('id', companyId);
    expect(Array.isArray(images.logos)).toBe(true);
    console.log('Company images test output:', images.logos);
  });
});
