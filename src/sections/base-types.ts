import { FindMovie, FindTV } from './find/types';

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

export interface PersonBase {
  adult: boolean;
  gender?: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  media_type: string;
}

export interface EpisodeBase {
  id: number;
  name: string;
  overview?: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id?: number;
  still_path?: string | null;
}

export interface SeasonBase {
  id: number;
  name: string;
  overview?: string;
  poster_path?: string | null;
  season_number: number;
  air_date?: string;
  episode_count: number;
  show_id?: number;
}
