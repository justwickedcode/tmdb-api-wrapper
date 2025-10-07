import { TmdbClient } from '../../src/tmdb-client';
import {
  CompanyDetailsResponse,
  CompanyAlternativeNamesResponse,
  CompanyImagesResponse,
} from '../../src/sections';

describe('Companies API integration', () => {
  const apiKey = process.env.TMDB_API_KEY!;
  const COMPANY_ID = 2; // Disney
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(apiKey);
  });

  const validateCompanyDetails = (details: CompanyDetailsResponse) => {
    expect(details).toHaveProperty('id', COMPANY_ID);
    expect(details).toHaveProperty('name');
    expect(typeof details.name).toBe('string');
    expect(details).toHaveProperty('logo_path');
  };

  const validateAlternativeNames = (altNames: CompanyAlternativeNamesResponse) => {
    expect(altNames).toHaveProperty('id', COMPANY_ID);
    expect(Array.isArray(altNames.results)).toBe(true);
  };

  const validateCompanyImages = (images: CompanyImagesResponse) => {
    expect(images).toHaveProperty('id', COMPANY_ID);
    expect(Array.isArray(images.logos)).toBe(true);
  };

  it('fetches company details', async () => {
    const details = await tmdb.companies.getDetails(COMPANY_ID);
    validateCompanyDetails(details);
    console.log('Company details:', details);
  });

  it('fetches company alternative names', async () => {
    const altNames = await tmdb.companies.getAlternativeNames(COMPANY_ID);
    validateAlternativeNames(altNames);
    console.log('Alternative names:', altNames.results);
  });

  it('fetches company images', async () => {
    const images = await tmdb.companies.getImages(COMPANY_ID);
    validateCompanyImages(images);
    console.log('Company logos:', images.logos);
  });
});
