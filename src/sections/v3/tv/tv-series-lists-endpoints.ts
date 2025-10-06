import HTTPClient from '../../../HTTPClient';
import { PaginatedTvSeriesResponse, TvListQuery } from './types';

const BASE_PATH = '/tv';

export class TvSeriesListsEndpoints {
  constructor(private readonly http: HTTPClient) {}

  /** Get TV series airing today */
  getAiringToday(params?: TvListQuery): Promise<PaginatedTvSeriesResponse> {
    return this.http.get<PaginatedTvSeriesResponse>(`${BASE_PATH}/airing_today`, {
      params: { ...params },
    });
  }

  /** Get TV series currently on air */
  getOnTheAir(params?: TvListQuery): Promise<PaginatedTvSeriesResponse> {
    return this.http.get<PaginatedTvSeriesResponse>(`${BASE_PATH}/on_the_air`, {
      params: { ...params },
    });
  }

  /** Get popular TV series */
  getPopular(params?: TvListQuery): Promise<PaginatedTvSeriesResponse> {
    return this.http.get<PaginatedTvSeriesResponse>(`${BASE_PATH}/popular`, {
      params: { ...params },
    });
  }

  /** Get top rated TV series */
  getTopRated(params?: TvListQuery): Promise<PaginatedTvSeriesResponse> {
    return this.http.get<PaginatedTvSeriesResponse>(`${BASE_PATH}/top_rated`, {
      params: { ...params },
    });
  }
}
