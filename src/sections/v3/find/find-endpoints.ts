import HTTPClient from '../../../HTTPClient';
import { FindResponse } from './types';

export interface FindByIDOptions {
  external_source:
    | 'imdb_id'
    | 'facebook_id'
    | 'instagram_id'
    | 'tvdb_id'
    | 'tiktok_id'
    | 'twitter_id'
    | 'wikidata_id'
    | 'youtube_id';
  language?: string;
}

export class FindEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Find movies, TV shows, or people by external ID */
  async byID(external_id: string, options: FindByIDOptions): Promise<FindResponse> {
    if (!options.external_source) {
      throw new Error('external_source is required');
    }

    const params: Record<string, string> = { external_source: options.external_source };
    if (options.language) params.language = options.language;

    return this.http.get<FindResponse>(`/find/${external_id}`, { params });
  }
}
