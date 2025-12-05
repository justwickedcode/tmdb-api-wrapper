import * as orval from '../../__generated__/api/trending/trending';
import {
  TrendingAllParams,
  TrendingMoviesParams,
  TrendingPeopleParams,
  TrendingTvParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../types';

export default class TrendingService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getAll(params?: TrendingAllParams, timeWindow: 'day' | 'week' = 'day') {
    return await orval.trendingAll(params, timeWindow, this.defaultOptions);
  }

  public async getMovies(params?: TrendingMoviesParams, timeWindow: 'day' | 'week' = 'day') {
    return await orval.trendingMovies(params, timeWindow, this.defaultOptions);
  }

  public async getPeople(params?: TrendingPeopleParams, timeWindow: 'day' | 'week' = 'day') {
    return await orval.trendingPeople(params, timeWindow, this.defaultOptions);
  }

  public async getTv(params?: TrendingTvParams, timeWindow: 'day' | 'week' = 'day') {
    return await orval.trendingTv(params, timeWindow, this.defaultOptions);
  }
}
