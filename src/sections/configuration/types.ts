/** Base image configuration for TMDb */
export interface ConfigurationImages {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

/** Complete configuration details response */
export interface ConfigurationDetailsResponse {
  images: ConfigurationImages;
  change_keys: string[];
}

/** Country information */
export interface ConfigurationCountry {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

export type ConfigurationCountriesResponse = ConfigurationCountry[];

/** Job/department mapping */
export interface ConfigurationJob {
  department: string;
  jobs: string[];
}

export type ConfigurationJobsResponse = ConfigurationJob[];

/** Supported language info */
export interface ConfigurationLanguage {
  iso_639_1: string;
  english_name: string;
  name: string;
}

export type ConfigurationLanguagesResponse = ConfigurationLanguage[];

/** List of primary translation codes */
export type ConfigurationPrimaryTranslationsResponse = string[];

/** Timezone info grouped by country */
export interface ConfigurationTimezone {
  iso_3166_1: string;
  zones: string[];
}

export type ConfigurationTimezonesResponse = ConfigurationTimezone[];
