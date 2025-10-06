import HttpConnector from '../../http-connector';
import {
  ConfigurationDetails,
  ConfigurationCountry,
  ConfigurationJob,
  ConfigurationLanguage,
  ConfigurationPrimaryTranslations,
  ConfigurationTimezone,
} from './types';

const BASE_PATH = '/configuration';

export class ConfigurationEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get API configuration details (base URLs, image sizes, etc.) */
  async getDetails(): Promise<ConfigurationDetails> {
    const res = await this.http.get<ConfigurationDetails>(`${BASE_PATH}`);
    console.log('Configuration details:', res);
    return res;
  }

  /** Get the list of countries used throughout TmdbClient */
  async getCountries(language?: string): Promise<ConfigurationCountry[]> {
    const res = await this.http.get<ConfigurationCountry[]>(`${BASE_PATH}/countries`, {
      params: { language },
    });
    console.log('Configuration countries:', res);
    return res;
  }

  /** Get the list of jobs and departments used on TmdbClient */
  async getJobs(): Promise<ConfigurationJob[]> {
    const res = await this.http.get<ConfigurationJob[]>(`${BASE_PATH}/jobs`);
    console.log('Configuration jobs:', res);
    return res;
  }

  /** Get the list of languages used throughout TmdbClient */
  async getLanguages(): Promise<ConfigurationLanguage[]> {
    const res = await this.http.get<ConfigurationLanguage[]>(`${BASE_PATH}/languages`);
    console.log('Configuration languages:', res);
    return res;
  }

  /** Get the list of primary translations supported on TmdbClient */
  async getPrimaryTranslations(): Promise<ConfigurationPrimaryTranslations> {
    const res = await this.http.get<ConfigurationPrimaryTranslations>(
      `${BASE_PATH}/primary_translations`,
    );
    console.log('Configuration primary translations:', res);
    return res;
  }

  /** Get the list of timezones used throughout TmdbClient */
  async getTimezones(): Promise<ConfigurationTimezone[]> {
    const res = await this.http.get<ConfigurationTimezone[]>(`${BASE_PATH}/timezones`);
    console.log('Configuration timezones:', res);
    return res;
  }
}
