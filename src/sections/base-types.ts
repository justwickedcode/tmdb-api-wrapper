/** Generic paginated response */
export interface PaginatedResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

/** Common image structure used by TmdbClient for posters/backdrops */
export interface ImageInfo {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/** Base type for any media (movie or TV) */
export interface MediaBase {
  id: number;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

/** Movie-specific fields */
export interface MovieBase extends MediaBase {
  adult?: boolean; // Movies only
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
}

/** TV show-specific fields */
export interface TVBase extends MediaBase {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}
