import { ChangesMovieListParams, changesMovieList, MovieNowPlayingListParams, movieNowPlayingList, MoviePopularListParams, moviePopularList, MovieTopRatedListParams, movieTopRatedList, MovieUpcomingListParams, movieUpcomingList, MovieDetailsParams, movieDetails, MovieAccountStatesParams, movieAccountStates, MovieAlternativeTitlesParams, movieAlternativeTitles, MovieChangesParams, movieChanges, MovieCreditsParams, movieCredits, movieExternalIds, MovieImagesParams, movieImages, movieKeywords, movieLatestId, MovieListsParams, movieLists, MovieRecommendationsParams, movieRecommendations, movieReleaseDates, MovieReviewsParams, movieReviews, MovieSimilarParams, movieSimilar, movieTranslations, MovieVideosParams, movieVideos, movieWatchProviders, MovieAddRatingBody, MovieAddRatingParams, movieAddRating, MovieDeleteRatingParams, movieDeleteRating } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class MovieService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getChangesList(params?: ChangesMovieListParams) {
    return await changesMovieList(params, this.defaultOptions);
  }

  public async getNowPlayingList(params?: MovieNowPlayingListParams) {
    return await movieNowPlayingList(params, this.defaultOptions);
  }

  public async getPopularList(params?: MoviePopularListParams) {
    return await moviePopularList(params, this.defaultOptions);
  }

  public async getTopRatedList(params?: MovieTopRatedListParams) {
    return await movieTopRatedList(params, this.defaultOptions);
  }

  public async getUpcomingList(params?: MovieUpcomingListParams) {
    return await movieUpcomingList(params, this.defaultOptions);
  }

  public async getDetails(movieId: number, params?: MovieDetailsParams) {
    return await movieDetails(movieId, params, this.defaultOptions);
  }

  public async getAccountStates(movieId: number, params?: MovieAccountStatesParams) {
    return await movieAccountStates(movieId, params, this.defaultOptions);
  }

  public async getAlternativeTitles(movieId: number, params?: MovieAlternativeTitlesParams) {
    return await movieAlternativeTitles(movieId, params, this.defaultOptions);
  }

  public async getChanges(movieId: number, params?: MovieChangesParams) {
    return await movieChanges(movieId, params, this.defaultOptions);
  }

  public async getCredits(movieId: number, params?: MovieCreditsParams) {
    return await movieCredits(movieId, params, this.defaultOptions);
  }

  public async getExternalIds(movieId: number) {
    return await movieExternalIds(movieId, this.defaultOptions);
  }

  public async getImages(movieId: number, params?: MovieImagesParams) {
    return await movieImages(movieId, params, this.defaultOptions);
  }

  public async getKeywords(movieId: string) {
    return await movieKeywords(movieId, this.defaultOptions);
  }

  public async getLatestId() {
    return await movieLatestId(this.defaultOptions);
  }

  public async getLists(movieId: number, params?: MovieListsParams) {
    return await movieLists(movieId, params, this.defaultOptions);
  }

  public async getRecommendations(movieId: number, params?: MovieRecommendationsParams) {
    return await movieRecommendations(movieId, params, this.defaultOptions);
  }

  public async getReleaseDates(movieId: number) {
    return await movieReleaseDates(movieId, this.defaultOptions);
  }

  public async getReviews(movieId: number, params?: MovieReviewsParams) {
    return await movieReviews(movieId, params, this.defaultOptions);
  }

  public async getSimilar(movieId: number, params?: MovieSimilarParams) {
    return await movieSimilar(movieId, params, this.defaultOptions);
  }

  public async getTranslations(movieId: number) {
    return await movieTranslations(movieId, this.defaultOptions);
  }

  public async getVideos(movieId: number, params?: MovieVideosParams) {
    return await movieVideos(movieId, params, this.defaultOptions);
  }

  public async getWatchProviders(movieId: number) {
    return await movieWatchProviders(movieId, this.defaultOptions);
  }

  public async addRating(
    movieId: number,
    movieAddRatingBody: MovieAddRatingBody,
    params?: MovieAddRatingParams,
  ) {
    return await movieAddRating(movieId, movieAddRatingBody, params, this.defaultOptions);
  }

  public async deleteRating(movieId: number, params?: MovieDeleteRatingParams) {
    return await movieDeleteRating(movieId, params, this.defaultOptions);
  }
}
