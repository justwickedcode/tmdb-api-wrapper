import * as orval from '../../__generated__/api/search/search';
import {
  SearchCollectionParams,
  SearchCompanyParams,
  SearchKeywordParams,
  SearchMovieParams,
  SearchMultiParams,
  SearchPersonParams,
  SearchTvParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../types';

export default class SearchService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getCollection(params: SearchCollectionParams) {
    return await orval.searchCollection(params, this.defaultOptions);
  }

  public async getCompany(params: SearchCompanyParams) {
    return await orval.searchCompany(params, this.defaultOptions);
  }

  public async getKeyword(params: SearchKeywordParams) {
    return await orval.searchKeyword(params, this.defaultOptions);
  }

  public async getMovie(params: SearchMovieParams) {
    return await orval.searchMovie(params, this.defaultOptions);
  }

  public async getMulti(params: SearchMultiParams) {
    return await orval.searchMulti(params, this.defaultOptions);
  }

  public async getPerson(params: SearchPersonParams) {
    return await orval.searchPerson(params, this.defaultOptions);
  }

  public async getTv(params: SearchTvParams) {
    return await orval.searchTv(params, this.defaultOptions);
  }
}
