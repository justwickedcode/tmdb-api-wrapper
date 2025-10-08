import HttpConnector from '../../http-connector';
import {
  TrendingQuery,
  TrendingAllResponse,
  TrendingMoviesResponse,
  TrendingTvResponse,
  TrendingPeopleResponse,
  TrendingTimeWindow,
} from './types';

const BASE_PATH = '/trending';

export class TrendingEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get all trending items */
  getAll(params: TrendingQuery = {}): Promise<TrendingAllResponse> {
    const time_window: TrendingTimeWindow = params.time_window ?? 'day';
    return this.http.get<TrendingAllResponse>(`${BASE_PATH}/all/${time_window}`, { params });
  }

  /** Get trending movies */
  getMovies(params: TrendingQuery = {}): Promise<TrendingMoviesResponse> {
    const time_window: TrendingTimeWindow = params.time_window ?? 'day';
    return this.http.get<TrendingMoviesResponse>(`${BASE_PATH}/movie/${time_window}`, { params });
  }

  /** Get trending TV shows */
  getTv(params: TrendingQuery = {}): Promise<TrendingTvResponse> {
    const time_window: TrendingTimeWindow = params.time_window ?? 'day';
    return this.http.get<TrendingTvResponse>(`${BASE_PATH}/tv/${time_window}`, { params });
  }

  /** Get trending people */
  getPeople(params: TrendingQuery = {}): Promise<TrendingPeopleResponse> {
    const time_window: TrendingTimeWindow = params.time_window ?? 'day';
    return this.http.get<TrendingPeopleResponse>(`${BASE_PATH}/person/${time_window}`, { params });
  }
}
