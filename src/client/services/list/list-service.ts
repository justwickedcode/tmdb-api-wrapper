import * as orval from '../../__generated__/api/list/list';
import {
  ListAddMovieBody,
  ListAddMovieParams,
  ListCheckItemStatusParams,
  ListClearParams,
  ListCreateBody,
  ListCreateParams,
  ListDeleteParams,
  ListDetailsParams,
  ListRemoveMovieBody,
  ListRemoveMovieParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class ListService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async addMovie(
    listId: number,
    listAddMovieBody: ListAddMovieBody,
    params: ListAddMovieParams,
  ) {
    return await orval.listAddMovie(listId, listAddMovieBody, params, this.defaultOptions);
  }

  public async checkItemStatus(listId: number, params?: ListCheckItemStatusParams) {
    return await orval.listCheckItemStatus(listId, params, this.defaultOptions);
  }

  public async clear(listId: number, params: ListClearParams) {
    return await orval.listClear(listId, params, this.defaultOptions);
  }

  public async create(listCreateBody: ListCreateBody, params: ListCreateParams) {
    return await orval.listCreate(listCreateBody, params, this.defaultOptions);
  }

  public async delete(listId: number, params: ListDeleteParams) {
    return await orval.listDelete(listId, params, this.defaultOptions);
  }

  public async getDetails(listId: number, params?: ListDetailsParams) {
    return await orval.listDetails(listId, params, this.defaultOptions);
  }

  public async removeMovie(
    listId: number,
    listRemoveMovieBody: ListRemoveMovieBody,
    params: ListRemoveMovieParams,
  ) {
    return await orval.listRemoveMovie(listId, listRemoveMovieBody, params, this.defaultOptions);
  }
}
