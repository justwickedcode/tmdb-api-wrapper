/** A single country/region for watch providers */
export interface WatchProviderRegion {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

/** Response for available regions */
export interface WatchProviderRegionsResponse {
  results: WatchProviderRegion[];
}

/** Display priority info for a provider */
export interface DisplayPriority {
  display_priority: number;
}

/** Single watch provider info for movies or TV */
export interface WatchProvider {
  provider_id: number;
  provider_name: string;
  logo_path: string | null;
  display_priorities: DisplayPriority;
}

/** Response for watch providers (movies or TV) */
export interface WatchProvidersResponse {
  results: WatchProvider[];
}
