import HttpConnector from '../../http-connector';
import {
  PaginatedSearchResponse,
  SearchCollectionResult,
  SearchCompanyResult,
  SearchKeywordResult,
  SearchMovieResult,
  SearchPersonResult,
  SearchTvResult,
} from './types';

const BASE_PATH = '/search';

export class SearchEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  async collection(query: string, params?: { page?: number; language?: string }) {
    return this.http.get<PaginatedSearchResponse<SearchCollectionResult>>(
      `${BASE_PATH}/collection`,
      {
        params: { query, ...params },
      },
    );
  }

  async company(query: string, params?: { page?: number }) {
    return this.http.get<PaginatedSearchResponse<SearchCompanyResult>>(`${BASE_PATH}/company`, {
      params: { query, ...params },
    });
  }

  async keyword(query: string, params?: { page?: number }) {
    return this.http.get<PaginatedSearchResponse<SearchKeywordResult>>(`${BASE_PATH}/keyword`, {
      params: { query, ...params },
    });
  }

  async movie(
    query: string,
    params?: { page?: number; language?: string; include_adult?: boolean; region?: string },
  ) {
    return this.http.get<PaginatedSearchResponse<SearchMovieResult>>(`${BASE_PATH}/movie`, {
      params: { query, ...params },
    });
  }

  async multi(
    query: string,
    params?: { page?: number; language?: string; include_adult?: boolean; region?: string },
  ) {
    return this.http.get<
      PaginatedSearchResponse<
        SearchMovieResult | SearchTvResult | SearchPersonResult | SearchCollectionResult
      >
    >(`${BASE_PATH}/multi`, { params: { query, ...params } });
  }

  async person(query: string, params?: { page?: number; language?: string }) {
    return this.http.get<PaginatedSearchResponse<SearchPersonResult>>(`${BASE_PATH}/person`, {
      params: { query, ...params },
    });
  }

  async tv(query: string, params?: { page?: number; language?: string }) {
    return this.http.get<PaginatedSearchResponse<SearchTvResult>>(`${BASE_PATH}/tv`, {
      params: { query, ...params },
    });
  }
}
