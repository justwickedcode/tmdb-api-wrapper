import { trendingAll, TrendingAllParams, trendingMovies, TrendingMoviesParams, trendingPeople, TrendingPeopleParams, trendingTv, TrendingTvParams } from '../../__generated__/api/tmdbApi';
import { CustomRequestInit } from '../../types';

export default class TrendingService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getAll(params?: TrendingAllParams, timeWindow: 'day' | 'week' = 'day') {
    return await trendingAll(params, timeWindow, this.defaultOptions);
  }

  public async getMovies(params?: TrendingMoviesParams, timeWindow: 'day' | 'week' = 'day') {
    return await trendingMovies(params, timeWindow, this.defaultOptions);
  }

  public async getPeople(params?: TrendingPeopleParams, timeWindow: 'day' | 'week' = 'day') {
    return await trendingPeople(params, timeWindow, this.defaultOptions);
  }

  public async getTv(params?: TrendingTvParams, timeWindow: 'day' | 'week' = 'day') {
    return await trendingTv(params, timeWindow, this.defaultOptions);
  }
}
