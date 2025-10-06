import HTTPClient from '../../HTTPClient';
import { MovieChangesResponse, TVChangesResponse, PersonChangesResponse } from './types';

export class ChangesEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /**
   * Get a list of movie IDs that have been changed in the past 24 hours.
   * You can query up to 14 days using start_date and end_date.
   */
  async getMovieChanges(params?: {
    start_date?: string;
    end_date?: string;
    page?: number;
  }): Promise<MovieChangesResponse> {
    return this.http.get<MovieChangesResponse>('/movie/changes', { params });
  }

  /**
   * Get a list of TV show IDs that have been changed in the past 24 hours.
   * You can query up to 14 days using start_date and end_date.
   */
  async getTVChanges(params?: {
    start_date?: string;
    end_date?: string;
    page?: number;
  }): Promise<TVChangesResponse> {
    return this.http.get<TVChangesResponse>('/tv/changes', { params });
  }

  /**
   * Get a list of person IDs that have been changed in the past 24 hours.
   * You can query up to 14 days using start_date and end_date.
   */
  async getPersonChanges(params?: {
    start_date?: string;
    end_date?: string;
    page?: number;
  }): Promise<PersonChangesResponse> {
    return this.http.get<PersonChangesResponse>('/person/changes', { params });
  }
}
