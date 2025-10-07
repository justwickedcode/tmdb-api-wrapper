import HttpConnector from '../../http-connector';
import {
  ConfigurationCountriesResponse,
  ConfigurationDetailsResponse,
  ConfigurationJobsResponse,
  ConfigurationLanguagesResponse,
  ConfigurationPrimaryTranslationsResponse,
  ConfigurationTimezonesResponse,
} from './types';

const BASE_PATH = '/configuration';

/** Endpoints for TMDb configuration */
export class ConfigurationEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get API configuration details (base URLs, image sizes, etc.) */
  getDetails(): Promise<ConfigurationDetailsResponse> {
    return this.http.get<ConfigurationDetailsResponse>(`${BASE_PATH}`);
  }

  /** Get the list of countries used throughout TMDb */
  getCountries(language?: string): Promise<ConfigurationCountriesResponse> {
    return this.http.get<ConfigurationCountriesResponse>(`${BASE_PATH}/countries`, {
      params: language ? { language } : undefined,
    });
  }

  /** Get the list of jobs and departments */
  getJobs(): Promise<ConfigurationJobsResponse> {
    return this.http.get<ConfigurationJobsResponse>(`${BASE_PATH}/jobs`);
  }

  /** Get the list of supported languages */
  getLanguages(): Promise<ConfigurationLanguagesResponse> {
    return this.http.get<ConfigurationLanguagesResponse>(`${BASE_PATH}/languages`);
  }

  /** Get the list of primary translations */
  getPrimaryTranslations(): Promise<ConfigurationPrimaryTranslationsResponse> {
    return this.http.get<ConfigurationPrimaryTranslationsResponse>(
      `${BASE_PATH}/primary_translations`,
    );
  }

  /** Get the list of timezones */
  getTimezones(): Promise<ConfigurationTimezonesResponse> {
    return this.http.get<ConfigurationTimezonesResponse>(`${BASE_PATH}/timezones`);
  }
}
