import { PaginatedResponse, MovieBase, ImageInfo } from '../base-types';

/**
 * Response type for endpoints that include date ranges (e.g., now_playing, upcoming)
 */
export interface DatedMovieResponse extends PaginatedResponse<MovieBase> {
  dates: {
    maximum: string;
    minimum: string;
  };
}

/** Named wrappers for common movie list responses */
export type PopularMoviesResponse = PaginatedResponse<MovieBase>;
export type TopRatedMoviesResponse = PaginatedResponse<MovieBase>;
export type DiscoverMoviesResponse = PaginatedResponse<MovieBase>;
export type RecommendationsResponse = PaginatedResponse<MovieBase>;
export type SimilarMoviesResponse = PaginatedResponse<MovieBase>;

/** Query params shared by many movie endpoints */
export interface MovieListQuery {
  language?: string; // defaults to 'en-US'
  page?: number; // defaults to 1
  region?: string; // ISO-3166-1 code
}

/** Monetization types used with watch providers */
export type MonetizationType = 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';

/** Sort options for discover/movie */
export type DiscoverSortOption =
  | 'popularity.asc'
  | 'popularity.desc'
  | 'release_date.asc'
  | 'release_date.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'
  | 'original_title.asc'
  | 'original_title.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc';

/** Query parameters for discover/movie */
export interface DiscoverQuery extends MovieListQuery {
  certification?: string;
  'certification.gte'?: string;
  'certification.lte'?: string;
  certification_country?: string;
  include_adult?: boolean;
  include_video?: boolean;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  region?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  sort_by?: DiscoverSortOption;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  watch_region?: string;
  with_cast?: string;
  with_companies?: string;
  with_crew?: string;
  with_genres?: string;
  with_keywords?: string;
  with_origin_country?: string;
  with_original_language?: string;
  with_people?: string;
  with_release_type?: string;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_watch_monetization_types?: MonetizationType | `${MonetizationType},${MonetizationType}`;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
  year?: number;
}

/** Detailed movie information */
export interface MovieDetails extends MovieBase {
  belongs_to_collection: { id: number; name: string } | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  revenue: number;
  runtime: number | null;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string | null;
}

/** Movie credits */
export interface MovieCredits {
  id: number;
  cast: Array<{
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number | null;
    id: number;
    name: string;
    order: number;
    profile_path: string | null;
  }>;
  crew: Array<{
    credit_id: string;
    department: string;
    gender: number | null;
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
  }>;
}

/** Movie images (using shared ImageInfo type) */
export interface MovieImages {
  id: number;
  backdrops: ImageInfo[];
  posters: ImageInfo[];
}

/** Movie release dates */
export interface MovieReleaseDates {
  id: number;
  results: Array<{
    iso_3166_1: string;
    release_dates: Array<{
      certification: string;
      iso_639_1: string | null;
      release_date: string;
      type: number;
      note: string;
    }>;
  }>;
}

/** Movie videos */
export interface MovieVideos {
  id: number;
  results: Array<{
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
  }>;
}

/** Movie keywords */
export interface MovieKeywords {
  id: number;
  keywords: Array<{ id: number; name: string }>;
}

/** Movie reviews */
export interface MovieReviews
  extends PaginatedResponse<{
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string | null;
      rating: number | null;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }> {}

/** Movie translations */
export interface MovieTranslations {
  id: number;
  translations: Array<{
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      title: string;
      overview: string;
      homepage: string | null;
    };
  }>;
}
