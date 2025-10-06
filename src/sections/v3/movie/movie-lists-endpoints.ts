import HTTPClient from '../../../HTTPClient';
import {
  DatedMovieResponse,
  DiscoverQuery,
  MovieListQuery,
  MovieSummary,
  PaginatedResponse,
} from './types';

export class MovieListsEndpoints {
  constructor(private client: HTTPClient) {}

  /** Get movies currently in theatres */
  async nowPlaying(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.client.get<DatedMovieResponse>('/movie/now_playing', { params: { ...params } });
  }

  /** Get most popular movies */
  async popular(params?: MovieListQuery): Promise<PaginatedResponse<MovieSummary>> {
    return this.client.get<PaginatedResponse<MovieSummary>>('/movie/popular', {
      params: { ...params },
    });
  }

  /** Get top rated movies */
  async topRated(params?: MovieListQuery): Promise<PaginatedResponse<MovieSummary>> {
    return this.client.get<PaginatedResponse<MovieSummary>>('/movie/top_rated', {
      params: { ...params },
    });
  }

  /** Get upcoming movie releases */
  async upcoming(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.client.get<DatedMovieResponse>('/movie/upcoming', { params: { ...params } });
  }
}
