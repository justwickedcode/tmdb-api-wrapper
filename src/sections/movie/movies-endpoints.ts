import HttpConnector from '../../http-connector';
import { CreditsResponse } from '../tv/types';
import { MovieListsEndpoints } from './movie-lists-endpoints';
import {
  MovieDetails,
  MovieImages,
  MovieReleaseDates,
  MovieVideos,
  MovieKeywords,
  MovieReviews,
  MovieTranslations,
  DatedMovieResponse,
  DiscoverQuery,
  MovieListQuery,
  PopularMoviesResponse,
  TopRatedMoviesResponse,
  DiscoverMoviesResponse,
  RecommendationsResponse,
  SimilarMoviesResponse,
} from './types';

const BASE_PATH = '/movie';

export class MoviesEndpoints {
  private readonly http: HttpConnector;
  public lists: MovieListsEndpoints;

  constructor(http: HttpConnector) {
    this.http = http;
    this.lists = new MovieListsEndpoints(http);
  }

  /** Get movie details by ID */
  async getDetails(movie_id: number, params?: { language?: string }): Promise<MovieDetails> {
    return this.http.get<MovieDetails>(`${BASE_PATH}/${movie_id}`, { params });
  }

  /** Get movie credits (cast and crew) */
  async getCredits(movie_id: number): Promise<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${BASE_PATH}/${movie_id}/credits`);
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
    return this.http.get<MovieReviews>(`${BASE_PATH}/${movie_id}/reviews`, { params });
  }

  /** Get translations */
  async getTranslations(movie_id: number): Promise<MovieTranslations> {
    return this.http.get<MovieTranslations>(`${BASE_PATH}/${movie_id}/translations`);
  }

  /** Get recommendations */
  async getRecommendations(
    movie_id: number,
    params?: MovieListQuery,
  ): Promise<RecommendationsResponse> {
    return this.http.get<RecommendationsResponse>(`${BASE_PATH}/${movie_id}/recommendations`, {
      params,
    });
  }

  /** Get similar movies */
  async getSimilar(movie_id: number, params?: MovieListQuery): Promise<SimilarMoviesResponse> {
    return this.http.get<SimilarMoviesResponse>(`${BASE_PATH}/${movie_id}/similar`, { params });
  }

  /** Now playing */
  async nowPlaying(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.http.get<DatedMovieResponse>(`${BASE_PATH}/now_playing`, { params });
  }

  /** Popular movies */
  async popular(params?: MovieListQuery): Promise<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(`${BASE_PATH}/popular`, { params });
  }

  /** Top rated movies */
  async topRated(params?: MovieListQuery): Promise<TopRatedMoviesResponse> {
    return this.http.get<TopRatedMoviesResponse>(`${BASE_PATH}/top_rated`, { params });
  }

  /** Upcoming movies */
  async upcoming(params?: MovieListQuery): Promise<DatedMovieResponse> {
    return this.http.get<DatedMovieResponse>(`${BASE_PATH}/upcoming`, { params });
  }

  /** Discover movies */
  async discover(params?: DiscoverQuery): Promise<DiscoverMoviesResponse> {
    return this.http.get<DiscoverMoviesResponse>(`/discover/movie`, { params });
  }
}
