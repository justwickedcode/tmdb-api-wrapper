import HttpConnector from '../../http-connector';
import { PeopleListsEndpoints } from './people-lists-endpoints';
import {
  PersonDetails,
  PersonChanges,
  PersonCombinedCredits,
  PersonExternalIds,
  PersonImages,
  PersonLatest,
  PersonMovieCredits,
  PersonTvCredits,
  PersonTranslations,
} from './types';

const BASE_PATH = '/person';

export class PeopleEndpoints {
  private readonly http: HttpConnector;
  public lists: PeopleListsEndpoints;

  constructor(http: HttpConnector) {
    this.http = http;
    this.lists = new PeopleListsEndpoints(this.http);
  }

  /** Get details for a person by ID */
  async getDetails(person_id: number, params?: { language?: string }): Promise<PersonDetails> {
    return this.http.get<PersonDetails>(`${BASE_PATH}/${person_id}`, { params });
  }

  /** Get changes for a person */
  async getChanges(
    person_id: number,
    params?: { start_date?: string; end_date?: string; page?: number },
  ) {
    return this.http.get<PersonChanges>(`${BASE_PATH}/${person_id}/changes`, { params });
  }

  /** Get combined credits (movie + TV) */
  async getCombinedCredits(person_id: number, params?: { language?: string }) {
    return this.http.get<PersonCombinedCredits>(`${BASE_PATH}/${person_id}/combined_credits`, {
      params,
    });
  }

  /** Get external IDs */
  async getExternalIds(person_id: number): Promise<PersonExternalIds> {
    return this.http.get<PersonExternalIds>(`${BASE_PATH}/${person_id}/external_ids`);
  }

  /** Get images for a person */
  async getImages(person_id: number): Promise<PersonImages> {
    return this.http.get<PersonImages>(`${BASE_PATH}/${person_id}/images`);
  }

  /** Get latest added person */
  async getLatest(): Promise<PersonLatest> {
    return this.http.get<PersonLatest>(`${BASE_PATH}/latest`);
  }

  /** Get movie credits */
  async getMovieCredits(person_id: number, params?: { language?: string }) {
    return this.http.get<PersonMovieCredits>(`${BASE_PATH}/${person_id}/movie_credits`, { params });
  }

  /** Get TV credits */
  async getTvCredits(person_id: number, params?: { language?: string }) {
    return this.http.get<PersonTvCredits>(`${BASE_PATH}/${person_id}/tv_credits`, { params });
  }

  /** Get translations */
  async getTranslations(person_id: number): Promise<PersonTranslations> {
    return this.http.get<PersonTranslations>(`${BASE_PATH}/${person_id}/translations`);
  }
}
