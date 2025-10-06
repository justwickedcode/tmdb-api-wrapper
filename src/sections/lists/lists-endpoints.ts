import HttpConnector from '../../http-connector';
import {
  ListDetailsResponse,
  ListActionResponse,
  ListItemStatusResponse,
  ListCreateRequest,
  ListItemRequest,
} from './types';

const BASE_PATH = '/list';

/**
 * TmdbClient sections Lists API
 * @see https://developer.themoviedb.org/reference/list-details
 */
export class ListsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get list details by ID */
  async getDetails(
    list_id: number,
    params?: { language?: string; page?: number },
  ): Promise<ListDetailsResponse> {
    return this.http.get<ListDetailsResponse>(`${BASE_PATH}/${list_id}`, { params });
  }

  /** Create a new list (requires session_id) */
  async create(session_id: string, body: ListCreateRequest): Promise<ListActionResponse> {
    return this.http.post<ListActionResponse>(`${BASE_PATH}`, body, {
      params: { session_id },
    });
  }

  /** Add a movie to a list */
  async addItem(
    list_id: number,
    session_id: string,
    body: ListItemRequest,
  ): Promise<ListActionResponse> {
    return this.http.post<ListActionResponse>(`${BASE_PATH}/${list_id}/add_item`, body, {
      params: { session_id },
    });
  }

  /** Remove a movie from a list */
  async removeItem(
    list_id: number,
    session_id: string,
    body: ListItemRequest,
  ): Promise<ListActionResponse> {
    return this.http.post<ListActionResponse>(`${BASE_PATH}/${list_id}/remove_item`, body, {
      params: { session_id },
    });
  }

  /** Check if a movie is already in a list */
  async getItemStatus(
    list_id: number,
    params: { movie_id: number; language?: string },
  ): Promise<ListItemStatusResponse> {
    return this.http.get<ListItemStatusResponse>(`${BASE_PATH}/${list_id}/item_status`, { params });
  }

  /** Clear all items from a list */
  async clear(list_id: number, session_id: string, confirm = false): Promise<ListActionResponse> {
    return this.http.post<ListActionResponse>(
      `${BASE_PATH}/${list_id}/clear`,
      {},
      { params: { session_id, confirm } },
    );
  }

  /** Delete a list entirely */
  async delete(list_id: number, session_id: string): Promise<ListActionResponse> {
    return this.http.delete<ListActionResponse>(`${BASE_PATH}/${list_id}`, {
      params: { session_id },
    });
  }
}
