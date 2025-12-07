import { configurationDetails, ConfigurationCountriesParams, configurationCountries, configurationJobs, configurationLanguages, configurationPrimaryTranslations, configurationTimezones } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class ConfigurationService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails() {
    return await configurationDetails(this.defaultOptions);
  }

  public async getCountries(params?: ConfigurationCountriesParams) {
    return await configurationCountries(params, this.defaultOptions);
  }

  public async getJobs() {
    return await configurationJobs(this.defaultOptions);
  }

  public async getLanguages() {
    return await configurationLanguages(this.defaultOptions);
  }

  public async getPrimaryTranslations() {
    return await configurationPrimaryTranslations(this.defaultOptions);
  }

  public async getTimezones() {
    return await configurationTimezones(this.defaultOptions);
  }
}
