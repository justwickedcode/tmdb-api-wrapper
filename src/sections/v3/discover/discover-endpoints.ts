import HTTPClient from '../../../HTTPClient';
import {
  DiscoverMovieResponse,
  DiscoverMovieOptions,
  DiscoverTVResponse,
  DiscoverTVOptions,
} from './types';

export class DiscoverEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Discover movies with query options */
  async getMovies(options?: DiscoverMovieOptions): Promise<DiscoverMovieResponse> {
    return this.http.get<DiscoverMovieResponse>('/discover/movie', { params: options });
  }

  /** Discover TV shows with query options */
  async getTVShows(options?: DiscoverTVOptions): Promise<DiscoverTVResponse> {
    return this.http.get<DiscoverTVResponse>('/discover/tv', { params: options });
  }
}
