import HttpConnector from '../../http-connector';
import { MovieChangesResponse, TVChangesResponse, PersonChangesResponse } from './types';

/** Query params for change list endpoints */
export interface ChangeListParams {
  start_date?: string;
  end_date?: string;
  page?: number;
}

export class ChangesEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get changed movie IDs (up to 14 days range) */
  getMovieChanges(params?: ChangeListParams): Promise<MovieChangesResponse> {
    return this.http.get<MovieChangesResponse>('/movie/changes', { params });
  }

  /** Get changed TV show IDs (up to 14 days range) */
  getTVChanges(params?: ChangeListParams): Promise<TVChangesResponse> {
    return this.http.get<TVChangesResponse>('/tv/changes', { params });
  }

  /** Get changed person IDs (up to 14 days range) */
  getPersonChanges(params?: ChangeListParams): Promise<PersonChangesResponse> {
    return this.http.get<PersonChangesResponse>('/person/changes', { params });
  }
}
