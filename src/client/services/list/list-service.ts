import { ListAddMovieBody, ListAddMovieParams, listAddMovie, ListCheckItemStatusParams, listCheckItemStatus, ListClearParams, listClear, ListCreateBody, ListCreateParams, listCreate, ListDeleteParams, listDelete, ListDetailsParams, listDetails, ListRemoveMovieBody, ListRemoveMovieParams, listRemoveMovie } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class ListService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async addMovie(
    listId: number,
    listAddMovieBody: ListAddMovieBody,
    params: ListAddMovieParams,
  ) {
    return await listAddMovie(listId, listAddMovieBody, params, this.defaultOptions);
  }

  public async checkItemStatus(listId: number, params?: ListCheckItemStatusParams) {
    return await listCheckItemStatus(listId, params, this.defaultOptions);
  }

  public async clear(listId: number, params: ListClearParams) {
    return await listClear(listId, params, this.defaultOptions);
  }

  public async create(listCreateBody: ListCreateBody, params: ListCreateParams) {
    return await listCreate(listCreateBody, params, this.defaultOptions);
  }

  public async delete(listId: number, params: ListDeleteParams) {
    return await listDelete(listId, params, this.defaultOptions);
  }

  public async getDetails(listId: number, params?: ListDetailsParams) {
    return await listDetails(listId, params, this.defaultOptions);
  }

  public async removeMovie(
    listId: number,
    listRemoveMovieBody: ListRemoveMovieBody,
    params: ListRemoveMovieParams,
  ) {
    return await listRemoveMovie(listId, listRemoveMovieBody, params, this.defaultOptions);
  }
}
