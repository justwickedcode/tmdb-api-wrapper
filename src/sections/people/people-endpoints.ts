import HttpConnector from '../../http-connector';
import { PeopleListsEndpoints } from './people-lists-endpoints';
import {
  PersonDetailsResponse,
  PersonCombinedCreditsResponse,
  PersonExternalIdsResponse,
  PersonImagesResponse,
  PersonLatestResponse,
  PersonMovieCreditsResponse,
  PersonTvCreditsResponse,
  PersonTranslationsResponse,
  PersonDetailedChangesResponse,
} from './types';

const BASE_PATH = '/person';

export class PeopleEndpoints {
  private readonly http: HttpConnector;
  public lists: PeopleListsEndpoints;

  constructor(http: HttpConnector) {
    this.http = http;
    this.lists = new PeopleListsEndpoints(http);
  }

  /** Get details for a person by ID */
  getDetails(person_id: number, params?: { language?: string }): Promise<PersonDetailsResponse> {
    return this.http.get<PersonDetailsResponse>(`${BASE_PATH}/${person_id}`, { params });
  }

  /** Get changes for a person */
  getChanges(
    person_id: number,
    params?: { start_date?: string; end_date?: string; page?: number },
  ): Promise<PersonDetailedChangesResponse> {
    return this.http.get<PersonDetailedChangesResponse>(`${BASE_PATH}/${person_id}/changes`, {
      params,
    });
  }

  /** Get combined credits (movie + TV) */
  getCombinedCredits(
    person_id: number,
    params?: { language?: string },
  ): Promise<PersonCombinedCreditsResponse> {
    return this.http.get<PersonCombinedCreditsResponse>(
      `${BASE_PATH}/${person_id}/combined_credits`,
      {
        params,
      },
    );
  }

  /** Get external IDs */
  getExternalIds(person_id: number): Promise<PersonExternalIdsResponse> {
    return this.http.get<PersonExternalIdsResponse>(`${BASE_PATH}/${person_id}/external_ids`);
  }

  /** Get images for a person */
  getImages(person_id: number): Promise<PersonImagesResponse> {
    return this.http.get<PersonImagesResponse>(`${BASE_PATH}/${person_id}/images`);
  }

  /** Get latest added person */
  getLatest(): Promise<PersonLatestResponse> {
    return this.http.get<PersonLatestResponse>(`${BASE_PATH}/latest`);
  }

  /** Get movie credits */
  getMovieCredits(
    person_id: number,
    params?: { language?: string },
  ): Promise<PersonMovieCreditsResponse> {
    return this.http.get<PersonMovieCreditsResponse>(`${BASE_PATH}/${person_id}/movie_credits`, {
      params,
    });
  }

  /** Get TV credits */
  getTvCredits(
    person_id: number,
    params?: { language?: string },
  ): Promise<PersonTvCreditsResponse> {
    return this.http.get<PersonTvCreditsResponse>(`${BASE_PATH}/${person_id}/tv_credits`, {
      params,
    });
  }

  /** Get translations */
  getTranslations(person_id: number): Promise<PersonTranslationsResponse> {
    return this.http.get<PersonTranslationsResponse>(`${BASE_PATH}/${person_id}/translations`);
  }
}
