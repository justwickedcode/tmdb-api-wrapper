import HttpConnector from '../../http-connector';
import { GenreListResponse } from './types';

const BASE_PATH_MOVIE = '/genre/movie/list';
const BASE_PATH_TV = '/genre/tv/list';

/** Optional query parameters for genre endpoints */
export interface GenreQueryParams {
  language?: string;
}

export class GenresEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get list of movie genres */
  async getMovieGenres(params?: GenreQueryParams): Promise<GenreListResponse> {
    return this.http.get<GenreListResponse>(BASE_PATH_MOVIE, { params });
  }

  /** Get list of TV genres */
  async getTVGenres(params?: GenreQueryParams): Promise<GenreListResponse> {
    return this.http.get<GenreListResponse>(BASE_PATH_TV, { params });
  }
}
