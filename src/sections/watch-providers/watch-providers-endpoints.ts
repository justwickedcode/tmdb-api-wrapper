import HttpConnector from '../../http-connector';
import { WatchProviderRegionsResponse, WatchProvidersResponse } from './types';

interface WatchProvidersParams {
  language?: string;
  watch_region?: string;
}

export class WatchProvidersEndpoints {
  private readonly http: HttpConnector;
  private readonly BASE_PATH = '/watch/providers';

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get all available regions */
  getRegions(params?: { language?: string }): Promise<WatchProviderRegionsResponse> {
    return this.http.get<WatchProviderRegionsResponse>(`${this.BASE_PATH}/regions`, { params });
  }

  /** Get all movie watch providers */
  getMovieProviders(params?: WatchProvidersParams): Promise<WatchProvidersResponse> {
    return this.http.get<WatchProvidersResponse>(`${this.BASE_PATH}/movie`, { params });
  }

  /** Get all TV watch providers */
  getTVProviders(params?: WatchProvidersParams): Promise<WatchProvidersResponse> {
    return this.http.get<WatchProvidersResponse>(`${this.BASE_PATH}/tv`, { params });
  }
}
