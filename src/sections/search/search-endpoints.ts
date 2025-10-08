import HttpConnector from '../../http-connector';
import {
  SearchBaseQuery,
  SearchWithRegionQuery,
  SearchCollectionResponse,
  SearchCompanyResponse,
  SearchKeywordResponse,
  SearchMovieResponse,
  SearchPersonResponse,
  SearchTvResponse,
  SearchMultiResponse,
} from './types';

const BASE_PATH = '/search';

export class SearchEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Search collections */
  collection(params: SearchBaseQuery): Promise<SearchCollectionResponse> {
    return this.http.get<SearchCollectionResponse>(`${BASE_PATH}/collection`, { params });
  }

  /** Search companies */
  company(params: Omit<SearchBaseQuery, 'language'>): Promise<SearchCompanyResponse> {
    return this.http.get<SearchCompanyResponse>(`${BASE_PATH}/company`, { params });
  }

  /** Search keywords */
  keyword(params: Omit<SearchBaseQuery, 'language'>): Promise<SearchKeywordResponse> {
    return this.http.get<SearchKeywordResponse>(`${BASE_PATH}/keyword`, { params });
  }

  /** Search movies */
  movie(params: SearchWithRegionQuery): Promise<SearchMovieResponse> {
    return this.http.get<SearchMovieResponse>(`${BASE_PATH}/movie`, { params });
  }

  /** Search multi (movie, TV, person, collection) */
  multi(params: SearchWithRegionQuery): Promise<SearchMultiResponse> {
    return this.http.get<SearchMultiResponse>(`${BASE_PATH}/multi`, { params });
  }

  /** Search people */
  person(params: SearchBaseQuery): Promise<SearchPersonResponse> {
    return this.http.get<SearchPersonResponse>(`${BASE_PATH}/person`, { params });
  }

  /** Search TV shows */
  tv(params: SearchBaseQuery): Promise<SearchTvResponse> {
    return this.http.get<SearchTvResponse>(`${BASE_PATH}/tv`, { params });
  }
}
