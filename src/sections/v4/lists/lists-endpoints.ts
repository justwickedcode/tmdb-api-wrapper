import HTTPClient from '../../../HTTPClient';
import {
  TMDBListResponse,
  TMDBListCreateRequest,
  TMDBListUpdateRequest,
  TMDBListAddRemoveItemsRequest,
  TMDBListItemStatusResponse,
  TMDBGenericResponse,
} from './types';

const BASE_PATH = '/list';

export class ListsEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get details of a list */
  getDetails(list_id: number): Promise<TMDBListResponse> {
    return this.http.get<TMDBListResponse>(`${BASE_PATH}/${list_id}`);
  }

  /** Create a new list */
  create(body: TMDBListCreateRequest): Promise<TMDBGenericResponse> {
    return this.http.post(`${BASE_PATH}`, body);
  }

  /** Update a list’s metadata */
  update(list_id: number, body: TMDBListUpdateRequest): Promise<TMDBGenericResponse> {
    return this.http.put(`${BASE_PATH}/${list_id}`, body);
  }

  /** Clear all items from a list */
  clear(list_id: number): Promise<TMDBGenericResponse> {
    return this.http.post(`${BASE_PATH}/${list_id}/clear`, {});
  }

  /** Add items to a list */
  addItems(list_id: number, body: TMDBListAddRemoveItemsRequest): Promise<TMDBGenericResponse> {
    return this.http.post(`${BASE_PATH}/${list_id}/items`, body);
  }

  /** Update all items in a list */
  updateItems(list_id: number, body: TMDBListAddRemoveItemsRequest): Promise<TMDBGenericResponse> {
    return this.http.put(`${BASE_PATH}/${list_id}/items`, body);
  }

  /** Remove items from a list */
  removeItems(list_id: number, body: TMDBListAddRemoveItemsRequest): Promise<TMDBGenericResponse> {
    return this.http.delete(`${BASE_PATH}/${list_id}/items`, body);
  }

  /** Get item status in a list */
  getItemStatus(list_id: number, media_id: number): Promise<TMDBListItemStatusResponse> {
    return this.http.get<TMDBListItemStatusResponse>(`${BASE_PATH}/${list_id}/item_status`, {
      params: { media_id },
    });
  }

  /** Delete a list */
  delete(list_id: number): Promise<TMDBGenericResponse> {
    return this.http.delete(`${BASE_PATH}/${list_id}`);
  }
}
