import { SearchCollectionParams, searchCollection, SearchCompanyParams, searchCompany, SearchKeywordParams, searchKeyword, SearchMovieParams, searchMovie, SearchMultiParams, searchMulti, SearchPersonParams, searchPerson, SearchTvParams, searchTv } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class SearchService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getCollection(params: SearchCollectionParams) {
    return await searchCollection(params, this.defaultOptions);
  }

  public async getCompany(params: SearchCompanyParams) {
    return await searchCompany(params, this.defaultOptions);
  }

  public async getKeyword(params: SearchKeywordParams) {
    return await searchKeyword(params, this.defaultOptions);
  }

  public async getMovie(params: SearchMovieParams) {
    return await searchMovie(params, this.defaultOptions);
  }

  public async getMulti(params: SearchMultiParams) {
    return await searchMulti(params, this.defaultOptions);
  }

  public async getPerson(params: SearchPersonParams) {
    return await searchPerson(params, this.defaultOptions);
  }

  public async getTv(params: SearchTvParams) {
    return await searchTv(params, this.defaultOptions);
  }
}
