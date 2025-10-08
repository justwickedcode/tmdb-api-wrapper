import HttpConnector from '../../http-connector';
import { TVBase } from '../base-types';
import { TvListQuery } from './types';

/** Response type for TV series lists */
export interface TvSeriesListResponse {
  page: number;
  results: TVBase[];
  total_pages: number;
  total_results: number;
}

/** Endpoints for fetching TV series lists */
export class TvSeriesListsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get TV series airing today */
  getAiringToday(params?: TvListQuery): Promise<TvSeriesListResponse> {
    return this.http.get<TvSeriesListResponse>(`/tv/airing_today`, { params });
  }

  /** Get TV series currently on air */
  getOnTheAir(params?: TvListQuery): Promise<TvSeriesListResponse> {
    return this.http.get<TvSeriesListResponse>(`/tv/on_the_air`, { params });
  }

  /** Get popular TV series */
  getPopular(params?: TvListQuery): Promise<TvSeriesListResponse> {
    return this.http.get<TvSeriesListResponse>(`/tv/popular`, { params });
  }

  /** Get top rated TV series */
  getTopRated(params?: TvListQuery): Promise<TvSeriesListResponse> {
    return this.http.get<TvSeriesListResponse>(`/tv/top_rated`, { params });
  }
}
