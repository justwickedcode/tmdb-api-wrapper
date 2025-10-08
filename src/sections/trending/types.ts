import { PaginatedResponse } from '../base-types';

/** === ENUM-LIKE TYPES === */
export type TrendingMediaType = 'all' | 'movie' | 'tv' | 'person';
export type TrendingTimeWindow = 'day' | 'week';

/** === QUERY PARAM TYPES === */
export interface TrendingQuery {
  time_window?: TrendingTimeWindow; // default 'day'
  page?: number; // default 1
}

/** === BASE RESULT === */
export interface TrendingResultBase {
  id: number;
  popularity: number;
  media_type: TrendingMediaType;
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview?: string;
  original_language?: string;
  title?: string;
  name?: string;
  adult?: boolean;
}

/** === MEDIA RESULT TYPES === */

export interface TrendingMovieResult extends TrendingResultBase {
  media_type: 'movie';
  release_date?: string;
  genre_ids?: number[];
}

export interface TrendingTvResult extends TrendingResultBase {
  media_type: 'tv';
  first_air_date?: string;
  genre_ids?: number[];
}

export interface TrendingPersonResult extends TrendingResultBase {
  media_type: 'person';
  profile_path?: string | null;
  known_for: (TrendingMovieResult | TrendingTvResult)[];
  gender: number;
  name: string;
}

/** === RESPONSE TYPES === */

export type TrendingAllResponse = PaginatedResponse<TrendingResultBase>;
export type TrendingMoviesResponse = PaginatedResponse<TrendingMovieResult>;
export type TrendingTvResponse = PaginatedResponse<TrendingTvResult>;
export type TrendingPeopleResponse = PaginatedResponse<TrendingPersonResult>;
