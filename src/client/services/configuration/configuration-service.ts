import * as orval from "../../__generated__/api/configuration/configuration"
import { ConfigurationCountriesParams } from "../../__generated__/schema";
import { CustomRequestInit } from "../../types";

export default class ConfigurationService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}

    public async getDetails() {
        return await orval.configurationDetails(this.defaultOptions);
    }

    public async getCountries(params?: ConfigurationCountriesParams) {
        return await orval.configurationCountries(params, this.defaultOptions);
    }

    public async getJobs() {
        return await orval.configurationJobs(this.defaultOptions);
    }

    public async getLanguages() {
        return await orval.configurationLanguages(this.defaultOptions);
    }

    public async getPrimaryTranslations() {
        return await orval.configurationPrimaryTranslations(this.defaultOptions);
    }

    public async getTimezones() {
        return await orval.configurationTimezones(this.defaultOptions);
    }
}