import * as orval from '../../__generated__/api/discover/discover';
import { DiscoverMovieParams, DiscoverTvParams } from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class DiscoverService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getMovie(params?: DiscoverMovieParams) {
    return await orval.discoverMovie(params, this.defaultOptions);
  }

  public async getTv(params?: DiscoverTvParams) {
    return await orval.discoverTv(params, this.defaultOptions);
  }
}
