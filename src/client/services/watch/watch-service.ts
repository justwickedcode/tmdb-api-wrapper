import { WatchProvidersAvailableRegionsParams, watchProvidersAvailableRegions, WatchProvidersMovieListParams, watchProvidersMovieList, WatchProviderTvListParams, watchProviderTvList } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class WatchService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getAvailableRegions(params?: WatchProvidersAvailableRegionsParams) {
    return await watchProvidersAvailableRegions(params, this.defaultOptions);
  }

  public async getMovieList(params?: WatchProvidersMovieListParams) {
    return await watchProvidersMovieList(params, this.defaultOptions);
  }

  public async getTvList(params?: WatchProviderTvListParams) {
    return await watchProviderTvList(params, this.defaultOptions);
  }
}
