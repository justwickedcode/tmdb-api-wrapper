// Base media type for discover results (shared fields)
export interface BaseMedia {
  id: number;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  backdrop_path?: string | null;
  poster_path?: string | null;
  genre_ids: number[];
  original_language: string;
}

// Movie-specific media
export interface MovieBase extends BaseMedia {
  adult: boolean;
  original_title: string;
  title: string;
  video: boolean;
  release_date: string;
}

// TV-specific media
export interface TVBase extends BaseMedia {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}

// Discover responses
export interface DiscoverResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type DiscoverMovieResponse = DiscoverResponse<MovieBase>;
export type DiscoverTVResponse = DiscoverResponse<TVBase>;

// Discover query options
export interface DiscoverMovieOptions {
  language?: string;
  region?: string;
  sortBy?: string;
  page?: number;
  includeAdult?: boolean;
  includeVideo?: boolean;
  primaryReleaseYear?: number;
  primaryReleaseDateGte?: string;
  primaryReleaseDateLte?: string;
  withGenres?: string;
  withoutGenres?: string;
  withCast?: string;
  withCrew?: string;
  withCompanies?: string;
  withoutCompanies?: string;
  withKeywords?: string;
  withoutKeywords?: string;
  voteAverageGte?: number;
  voteAverageLte?: number;
  voteCountGte?: number;
  voteCountLte?: number;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  withReleaseType?: string;
  year?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface DiscoverTVOptions {
  language?: string;
  sortBy?: string;
  page?: number;
  timezone?: string;
  includeNullFirstAirDates?: boolean;
  firstAirDateYear?: number;
  voteAverageGte?: number;
  voteAverageLte?: number;
  voteCountGte?: number;
  voteCountLte?: number;
  withGenres?: string;
  withoutGenres?: string;
  withNetworks?: number;
  withOriginCountry?: string;
  withOriginalLanguage?: string;
  withWatchProviders?: string;
  watchRegion?: string;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  withStatus?: string;
  withType?: string;
  [key: string]: string | number | boolean | undefined;
}
