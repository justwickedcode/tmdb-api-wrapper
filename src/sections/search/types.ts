import { PaginatedResponse } from '../base-types';

/** Shared base structure for search results */
export interface SearchResultBase {
  id: number;
  popularity: number;
  backdrop_path: string | null;
  poster_path?: string | null;
  overview?: string;
  original_language?: string;
  title?: string;
  name?: string;
  adult?: boolean;
  media_type?: string;
}

/** === QUERY PARAM TYPES === */

export interface SearchBaseQuery {
  query: string;
  page?: number;
  language?: string;
}

export interface SearchWithRegionQuery extends SearchBaseQuery {
  include_adult?: boolean;
  region?: string;
}

/** === RESULT TYPES === */

export interface SearchCollectionResult extends SearchResultBase {
  media_type: 'collection';
  name: string;
}

export interface SearchCompanyResult extends SearchResultBase {
  media_type: 'company';
  description: string | null;
  logo_path: string | null;
}

export interface SearchKeywordResult {
  id: number;
  name: string;
}

export interface SearchMovieResult extends SearchResultBase {
  media_type: 'movie';
  release_date?: string;
  genre_ids?: number[];
}

export interface SearchPersonResult extends SearchResultBase {
  media_type: 'person';
  known_for: (SearchMovieResult | SearchTvResult)[];
  gender: number;
  profile_path: string | null;
}

export interface SearchTvResult extends SearchResultBase {
  media_type: 'tv';
  first_air_date?: string;
  genre_ids?: number[];
}

/** === RESPONSE TYPES === */

export type SearchCollectionResponse = PaginatedResponse<SearchCollectionResult>;
export type SearchCompanyResponse = PaginatedResponse<SearchCompanyResult>;
export type SearchKeywordResponse = PaginatedResponse<SearchKeywordResult>;
export type SearchMovieResponse = PaginatedResponse<SearchMovieResult>;
export type SearchPersonResponse = PaginatedResponse<SearchPersonResult>;
export type SearchTvResponse = PaginatedResponse<SearchTvResult>;

export type SearchMultiResponse = PaginatedResponse<
  SearchMovieResult | SearchTvResult | SearchPersonResult | SearchCollectionResult
>;
