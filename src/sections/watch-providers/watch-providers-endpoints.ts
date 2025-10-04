import HTTPClient from '../../HTTPClient';
import { WatchProviderRegionsResponse, WatchProvidersResponse } from './types';

export class WatchProvidersEndpoints {
  private readonly http: HTTPClient;
  private readonly BASE_PATH = '/watch/providers';

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get all available regions */
  getRegions(language: string = 'en-US'): Promise<WatchProviderRegionsResponse> {
    return this.http.get<WatchProviderRegionsResponse>(`${this.BASE_PATH}/regions`, {
      params: { language },
    });
  }

  /** Get all movie watch providers */
  getMovieProviders(options?: {
    language?: string;
    watch_region?: string;
  }): Promise<WatchProvidersResponse> {
    return this.http.get<WatchProvidersResponse>(`${this.BASE_PATH}/movie`, { params: options });
  }

  /** Get all TV watch providers */
  getTVProviders(options?: {
    language?: string;
    watch_region?: string;
  }): Promise<WatchProvidersResponse> {
    return this.http.get<WatchProvidersResponse>(`${this.BASE_PATH}/tv`, { params: options });
  }
}
