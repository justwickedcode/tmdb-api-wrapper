import HTTPClient from '../../HTTPClient';
import {
  PaginatedTrendingResponse,
  TrendingResultBase,
  TrendingMovieResult,
  TrendingTvResult,
  TrendingPersonResult,
  TrendingTimeWindow,
} from './types';

const BASE_PATH = '/trending';

export class TrendingEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get all trending items */
  getAll(
    time_window: TrendingTimeWindow = 'day',
    params?: { page?: number },
  ): Promise<PaginatedTrendingResponse<TrendingResultBase>> {
    return this.http.get<PaginatedTrendingResponse<TrendingResultBase>>(
      `${BASE_PATH}/all/${time_window}`,
      { params },
    );
  }

  /** Get trending movies */
  getMovies(
    time_window: TrendingTimeWindow = 'day',
    params?: { page?: number },
  ): Promise<PaginatedTrendingResponse<TrendingMovieResult>> {
    return this.http.get<PaginatedTrendingResponse<TrendingMovieResult>>(
      `${BASE_PATH}/movie/${time_window}`,
      { params },
    );
  }

  /** Get trending TV shows */
  getTv(
    time_window: TrendingTimeWindow = 'day',
    params?: { page?: number },
  ): Promise<PaginatedTrendingResponse<TrendingTvResult>> {
    return this.http.get<PaginatedTrendingResponse<TrendingTvResult>>(
      `${BASE_PATH}/tv/${time_window}`,
      { params },
    );
  }

  /** Get trending people */
  getPeople(
    time_window: TrendingTimeWindow = 'day',
    params?: { page?: number },
  ): Promise<PaginatedTrendingResponse<TrendingPersonResult>> {
    return this.http.get<PaginatedTrendingResponse<TrendingPersonResult>>(
      `${BASE_PATH}/person/${time_window}`,
      { params },
    );
  }
}
