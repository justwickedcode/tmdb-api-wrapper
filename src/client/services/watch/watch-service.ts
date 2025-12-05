import * as orval from '../../__generated__/api/watch/watch';
import {
  WatchProvidersAvailableRegionsParams,
  WatchProvidersMovieListParams,
  WatchProviderTvListParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class WatchService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getAvailableRegions(params?: WatchProvidersAvailableRegionsParams) {
    return await orval.watchProvidersAvailableRegions(params, this.defaultOptions);
  }

  public async getMovieList(params?: WatchProvidersMovieListParams) {
    return await orval.watchProvidersMovieList(params, this.defaultOptions);
  }

  public async getTvList(params?: WatchProviderTvListParams) {
    return await orval.watchProviderTvList(params, this.defaultOptions);
  }
}
