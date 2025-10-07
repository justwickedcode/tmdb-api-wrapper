import { MovieBase, PaginatedResponse, TVBase } from '../base-types';
export type DiscoverResponse<T> = PaginatedResponse<T>;
export type DiscoverMovieResponse = DiscoverResponse<MovieBase>;
export type DiscoverTVResponse = DiscoverResponse<TVBase>;
