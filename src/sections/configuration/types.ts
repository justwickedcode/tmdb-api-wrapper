/** Configuration Details Response */
export interface ConfigurationDetails {
    images: {
        base_url: string;
        secure_base_url: string;
        backdrop_sizes: string[];
        logo_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
        still_sizes: string[];
    };
    change_keys: string[];
}

/** Represents a country used by TMDB */
export interface ConfigurationCountry {
    iso_3166_1: string;
    english_name: string;
    native_name: string;
}

/** Represents a job/department combination */
export interface ConfigurationJob {
    department: string;
    jobs: string[];
}

/** Represents a language supported by TMDB */
export interface ConfigurationLanguage {
    iso_639_1: string;
    english_name: string;
    name: string;
}

/** List of primary translations (ISO language tags) */
export type ConfigurationPrimaryTranslations = string[];

/** Represents a timezone grouping by country */
export interface ConfigurationTimezone {
    iso_3166_1: string;
    zones: string[];
}
