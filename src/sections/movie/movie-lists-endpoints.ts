import HttpConnector from '../../http-connector';
import {
  DatedMovieResponse,
  MovieListQuery,
  PopularMoviesResponse,
  TopRatedMoviesResponse,
} from './types';

export class MovieListsEndpoints {
  constructor(private client: HttpConnector) {}

  /** Get movies currently in theatres */
  async getNowPlaying(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.client.get<DatedMovieResponse>('/movie/now_playing', { params });
  }

  /** Get most popular movies */
  async getPopular(params?: MovieListQuery): Promise<PopularMoviesResponse> {
    return this.client.get<PopularMoviesResponse>('/movie/popular', { params });
  }

  /** Get top rated movies */
  async getTopRated(params?: MovieListQuery): Promise<TopRatedMoviesResponse> {
    return this.client.get<TopRatedMoviesResponse>('/movie/top_rated', { params });
  }

  /** Get upcoming movie releases */
  async getUpcoming(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.client.get<DatedMovieResponse>('/movie/upcoming', { params });
  }
}
