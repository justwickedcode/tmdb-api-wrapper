import HttpConnector from '../../http-connector';
import { MovieChangesResponse, TVChangesResponse, PersonChangesResponse } from './types';

/** Query params for change list endpoints */
interface ChangeQueryParams {
  start_date?: string;
  end_date?: string;
  page?: number;
}

export class ChangesEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get changed movie IDs */
  getMovieChanges(params?: ChangeQueryParams): Promise<MovieChangesResponse> {
    return this.http.get<MovieChangesResponse>('/movie/changes', { params });
  }

  /** Get changed TV show IDs */
  getTVChanges(params?: ChangeQueryParams): Promise<TVChangesResponse> {
    return this.http.get<TVChangesResponse>('/tv/changes', { params });
  }

  /** Get changed person IDs */
  getPersonChanges(params?: ChangeQueryParams): Promise<PersonChangesResponse> {
    return this.http.get<PersonChangesResponse>('/person/changes', { params });
  }
}
