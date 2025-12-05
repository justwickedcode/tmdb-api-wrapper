import * as orval from "../../__generated__/api/movie/movie";
import { ChangesMovieListParams, MovieAccountStatesParams, MovieAddRatingBody, MovieAddRatingParams, MovieAlternativeTitlesParams, MovieChangesParams, MovieCreditsParams, MovieDeleteRatingParams, MovieDetailsParams, MovieImagesParams, MovieListsParams, MovieNowPlayingListParams, MoviePopularListParams, MovieRecommendationsParams, MovieReviewsParams, MovieSimilarParams, MovieTopRatedListParams, MovieUpcomingListParams, MovieVideosParams } from "../../__generated__/schema";
import { CustomRequestInit } from "../../types";

export default class MovieService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}

    public async getChangesList(params?: ChangesMovieListParams) {
        return await orval.changesMovieList(params, this.defaultOptions);
    }

    public async getNowPlayingList(params?: MovieNowPlayingListParams) {
        return await orval.movieNowPlayingList(params, this.defaultOptions);
    }

    public async getPopularList(params?: MoviePopularListParams) {
        return await orval.moviePopularList(params, this.defaultOptions);
    }

    public async getTopRatedList(params?: MovieTopRatedListParams) {
        return await orval.movieTopRatedList(params, this.defaultOptions);
    }

    public async getUpcomingList(params?: MovieUpcomingListParams) {
        return await orval.movieUpcomingList(params, this.defaultOptions);
    }

    public async getDetails(movieId: number,
        params?: MovieDetailsParams) {
        return await orval.movieDetails(movieId, params, this.defaultOptions);
    }

    public async getAccountStates(movieId: number,
        params?: MovieAccountStatesParams) {
        return await orval.movieAccountStates(movieId, params, this.defaultOptions);
    }

    public async getAlternativeTitles(movieId: number,
        params?: MovieAlternativeTitlesParams) {
        return await orval.movieAlternativeTitles(movieId, params, this.defaultOptions);
    }

    public async getChanges(movieId: number,
        params?: MovieChangesParams) {
        return await orval.movieChanges(movieId, params, this.defaultOptions);
    }

    public async getCredits(movieId: number,
        params?: MovieCreditsParams) {
        return await orval.movieCredits(movieId, params, this.defaultOptions);
    }

    public async getExternalIds(movieId: number) {
        return await orval.movieExternalIds(movieId, this.defaultOptions);
    }

    public async getImages(movieId: number,
        params?: MovieImagesParams) {
        return await orval.movieImages(movieId, params, this.defaultOptions);
    }

    public async getKeywords(movieId: string) {
        return await orval.movieKeywords(movieId, this.defaultOptions);
    }

    public async getLatestId() {
        return await orval.movieLatestId(this.defaultOptions);
    }

    public async getLists(movieId: number,
        params?: MovieListsParams) {
        return await orval.movieLists(movieId, params, this.defaultOptions);
    }

    public async getRecommendations(movieId: number,
        params?: MovieRecommendationsParams) {
        return await orval.movieRecommendations(movieId, params, this.defaultOptions);
    }

    public async getReleaseDates(movieId: number) {
        return await orval.movieReleaseDates(movieId, this.defaultOptions);
    }

    public async getReviews(movieId: number,
        params?: MovieReviewsParams) {
        return await orval.movieReviews(movieId, params, this.defaultOptions);
    }

    public async getSimilar(movieId: number,
        params?: MovieSimilarParams) {
        return await orval.movieSimilar(movieId, params, this.defaultOptions);
    }

    public async getTranslations(movieId: number) {
        return await orval.movieTranslations(movieId, this.defaultOptions);
    }

    public async getVideos(movieId: number,
        params?: MovieVideosParams) {
        return await orval.movieVideos(movieId, params, this.defaultOptions);
    }

    public async getWatchProviders(movieId: number) {
        return await orval.movieWatchProviders(movieId, this.defaultOptions);
    }

    public async addRating(movieId: number,
        movieAddRatingBody: MovieAddRatingBody,
        params?: MovieAddRatingParams) {
        return await orval.movieAddRating(movieId, movieAddRatingBody, params, this.defaultOptions);
    }

    public async deleteRating(movieId: number,
        params?: MovieDeleteRatingParams) {
        return await orval.movieDeleteRating(movieId, params, this.defaultOptions);
    }
}