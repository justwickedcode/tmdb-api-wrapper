import HTTPClient from '../../HTTPClient';
import { MovieListsEndpoints } from './movie-lists-endpoints';
import {
  MovieDetails,
  MovieCredits,
  MovieImages,
  MovieReleaseDates,
  MovieVideos,
  MovieKeywords,
  MovieReviews,
  MovieTranslations,
  MovieRecommendations,
  MovieSimilar,
  MovieSummary,
  PaginatedResponse,
  DatedMovieResponse,
  DiscoverQuery,
  MovieListQuery,
} from './types';

const BASE_PATH = '/movie';

export class MoviesEndpoints {
  private readonly http: HTTPClient;
  public lists: MovieListsEndpoints;

  constructor(http: HTTPClient) {
    this.http = http;
    this.lists = new MovieListsEndpoints(http);
  }

  /** Get movie details by ID */
  async getDetails(movie_id: number, params?: { language?: string }): Promise<MovieDetails> {
    return this.http.get<MovieDetails>(`${BASE_PATH}/${movie_id}`, { params });
  }

  /** Get movie credits (cast and crew) */
  async getCredits(movie_id: number): Promise<MovieCredits> {
    return this.http.get<MovieCredits>(`${BASE_PATH}/${movie_id}/credits`);
  }

  /** Get movie images */
  async getImages(movie_id: number): Promise<MovieImages> {
    return this.http.get<MovieImages>(`${BASE_PATH}/${movie_id}/images`);
  }

  /** Get release dates */
  async getReleaseDates(movie_id: number): Promise<MovieReleaseDates> {
    return this.http.get<MovieReleaseDates>(`${BASE_PATH}/${movie_id}/release_dates`);
  }

  /** Get videos */
  async getVideos(movie_id: number, params?: { language?: string }): Promise<MovieVideos> {
    return this.http.get<MovieVideos>(`${BASE_PATH}/${movie_id}/videos`, { params });
  }

  /** Get keywords */
  async getKeywords(movie_id: number): Promise<MovieKeywords> {
    return this.http.get<MovieKeywords>(`${BASE_PATH}/${movie_id}/keywords`);
  }

  /** Get reviews */
  async getReviews(movie_id: number, params?: MovieListQuery): Promise<MovieReviews> {
    return this.http.get<MovieReviews>(`${BASE_PATH}/${movie_id}/reviews`, {
      params: { ...params },
    });
  }

  /** Get translations */
  async getTranslations(movie_id: number): Promise<MovieTranslations> {
    return this.http.get<MovieTranslations>(`${BASE_PATH}/${movie_id}/translations`);
  }

  /** Get recommendations */
  async getRecommendations(
    movie_id: number,
    params?: MovieListQuery,
  ): Promise<MovieRecommendations> {
    return this.http.get<MovieRecommendations>(`${BASE_PATH}/${movie_id}/recommendations`, {
      params: { ...params },
    });
  }

  /** Get similar movies */
  async getSimilar(movie_id: number, params?: MovieListQuery): Promise<MovieSimilar> {
    return this.http.get<MovieSimilar>(`${BASE_PATH}/${movie_id}/similar`, {
      params: { ...params },
    });
  }

  /** Now playing */
  async nowPlaying(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.http.get<DatedMovieResponse>(`${BASE_PATH}/now_playing`, { params: { ...params } });
  }

  /** Popular movies */
  async popular(params?: MovieListQuery): Promise<PaginatedResponse<MovieSummary>> {
    return this.http.get<PaginatedResponse<MovieSummary>>(`${BASE_PATH}/popular`, {
      params: { ...params },
    });
  }

  /** Top rated movies */
  async topRated(params?: MovieListQuery): Promise<PaginatedResponse<MovieSummary>> {
    return this.http.get<PaginatedResponse<MovieSummary>>(`${BASE_PATH}/top_rated`, {
      params: { ...params },
    });
  }

  /** Upcoming movies */
  async upcoming(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.http.get<DatedMovieResponse>(`${BASE_PATH}/upcoming`, { params: { ...params } });
  }

  /** Discover movies */
  async discover(params?: DiscoverQuery): Promise<PaginatedResponse<MovieSummary>> {
    return this.http.get<PaginatedResponse<MovieSummary>>(`/discover/movie`, {
      params: { ...params },
    });
  }
}
