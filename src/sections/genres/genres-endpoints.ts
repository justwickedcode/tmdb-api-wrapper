import HttpConnector from '../../http-connector';
import { GenreListResponse } from './types';

const BASE_PATH_MOVIE = '/genre/movie/list';
const BASE_PATH_TV = '/genre/tv/list';

export class GenresEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get list of movie genres */
  async getMovieGenres(language?: string): Promise<GenreListResponse> {
    const params = language ? { language } : undefined;
    return this.http.get<GenreListResponse>(BASE_PATH_MOVIE, { params });
  }

  /** Get list of TV genres */
  async getTVGenres(language?: string): Promise<GenreListResponse> {
    const params = language ? { language } : undefined;
    return this.http.get<GenreListResponse>(BASE_PATH_TV, { params });
  }
}
