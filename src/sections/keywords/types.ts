import { MovieBase, PaginatedResponse } from '../base-types';

/** Keyword details */
export interface KeywordDetails {
  id: number;
  name: string;
}

/** Keyword movies response */
export interface KeywordMoviesResponse extends PaginatedResponse<MovieBase> {
  id: number;
}
