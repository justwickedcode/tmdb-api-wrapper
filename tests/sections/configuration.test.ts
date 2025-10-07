import { TmdbClient } from '../../src/tmdb-client';
import {
  ConfigurationCountriesResponse,
  ConfigurationDetailsResponse,
  ConfigurationJobsResponse,
  ConfigurationLanguagesResponse,
  ConfigurationPrimaryTranslationsResponse,
  ConfigurationTimezonesResponse,
} from '../../src/sections/configuration/types';

describe('Configuration API integration', () => {
  const apiKey = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(apiKey);
  });

  it('should fetch configuration details', async () => {
    const details: ConfigurationDetailsResponse = await tmdb.configuration.getDetails();
    expect(details).toHaveProperty('images');
    expect(details.images).toHaveProperty('secure_base_url');
    expect(Array.isArray(details.change_keys)).toBe(true);
    console.log('Configuration details:', details);
  });

  it('should fetch configuration countries', async () => {
    const countries: ConfigurationCountriesResponse =
      await tmdb.configuration.getCountries('en-US');
    expect(Array.isArray(countries)).toBe(true);
    if (countries.length > 0) {
      expect(countries[0]).toHaveProperty('iso_3166_1');
      expect(countries[0]).toHaveProperty('english_name');
      expect(countries[0]).toHaveProperty('native_name');
    }
    console.log('Configuration countries:', countries);
  });

  it('should fetch configuration jobs', async () => {
    const jobs: ConfigurationJobsResponse = await tmdb.configuration.getJobs();
    expect(Array.isArray(jobs)).toBe(true);
    if (jobs.length > 0) {
      expect(jobs[0]).toHaveProperty('department');
      expect(Array.isArray(jobs[0].jobs)).toBe(true);
    }
    console.log('Configuration jobs:', jobs);
  });

  it('should fetch configuration languages', async () => {
    const languages: ConfigurationLanguagesResponse = await tmdb.configuration.getLanguages();
    expect(Array.isArray(languages)).toBe(true);
    if (languages.length > 0) {
      expect(languages[0]).toHaveProperty('iso_639_1');
      expect(languages[0]).toHaveProperty('english_name');
      expect(languages[0]).toHaveProperty('name');
    }
    console.log('Configuration languages:', languages);
  });

  it('should fetch primary translations', async () => {
    const translations: ConfigurationPrimaryTranslationsResponse =
      await tmdb.configuration.getPrimaryTranslations();
    expect(Array.isArray(translations)).toBe(true);
    translations.forEach((t) => expect(typeof t).toBe('string'));
    console.log('Primary translations:', translations);
  });

  it('should fetch configuration timezones', async () => {
    const timezones: ConfigurationTimezonesResponse = await tmdb.configuration.getTimezones();
    expect(Array.isArray(timezones)).toBe(true);
    if (timezones.length > 0) {
      expect(timezones[0]).toHaveProperty('iso_3166_1');
      expect(Array.isArray(timezones[0].zones)).toBe(true);
    }
    console.log('Configuration timezones:', timezones);
  });
});
