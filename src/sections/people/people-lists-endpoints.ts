import HttpConnector from '../../http-connector';
import { PeopleListQuery, PopularPeopleResponse } from './types';

export class PeopleListsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get popular people */
  popular(params?: PeopleListQuery): Promise<PopularPeopleResponse> {
    return this.http.get<PopularPeopleResponse>('/person/popular', { params });
  }
}
