import HTTPClient from '../../HTTPClient';
import { PaginatedResponse, PersonSummary } from './types';

export interface PeopleListQuery {
  language?: string; // default en-US
  page?: number; // default 1
}

export class PeopleListsEndpoints {
  constructor(private readonly http: HTTPClient) {}

  /** Get popular people */
  async popular(params?: PeopleListQuery): Promise<PaginatedResponse<PersonSummary>> {
    return this.http.get<PaginatedResponse<PersonSummary>>('/person/popular', {
      params: { ...params },
    });
  }
}
