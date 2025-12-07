import { ChangesTvListParams, changesTvList, TvSeriesAiringTodayListParams, tvSeriesAiringTodayList, TvSeriesOnTheAirListParams, tvSeriesOnTheAirList, TvSeriesPopularListParams, tvSeriesPopularList, TvSeriesTopRatedListParams, tvSeriesTopRatedList, TvSeriesDetailsParams, tvSeriesDetails, TvSeriesAccountStatesParams, tvSeriesAccountStates, TvSeriesAggregateCreditsParams, tvSeriesAggregateCredits, tvSeriesAlternativeTitles, TvSeriesChangesParams, tvSeriesChanges, tvSeriesContentRatings, TvSeriesCreditsParams, tvSeriesCredits, tvSeriesExternalIds, TvSeriesImagesParams, tvSeriesImages, tvSeriesKeywords, tvSeriesLatestId, ListsCopyParams, listsCopy, TvSeriesRecommendationsParams, tvSeriesRecommendations, TvSeriesReviewsParams, tvSeriesReviews, tvSeriesScreenedTheatrically, TvSeriesSimilarParams, tvSeriesSimilar, tvSeriesTranslations, TvSeriesVideosParams, tvSeriesVideos, tvSeriesWatchProviders, TvSeriesAddRatingBody, TvSeriesAddRatingParams, tvSeriesAddRating, TvSeriesDeleteRatingParams, tvSeriesDeleteRating } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";
import EpisodeService from "./episode-service";
import SeasonService from "./season-service";

export default class TVService {
  public episode: EpisodeService;
  public season: SeasonService;
  constructor(private readonly defaultOptions: CustomRequestInit) {
    this.episode = new EpisodeService(defaultOptions);
    this.season = new SeasonService(defaultOptions);
  }

  public async getChangesTvList(params?: ChangesTvListParams) {
    return await changesTvList(params, this.defaultOptions);
  }

  public async getAiringTodayList(params?: TvSeriesAiringTodayListParams) {
    return await tvSeriesAiringTodayList(params, this.defaultOptions);
  }

  public async getOnTheAirList(params?: TvSeriesOnTheAirListParams) {
    return await tvSeriesOnTheAirList(params, this.defaultOptions);
  }

  public async getPopularList(params?: TvSeriesPopularListParams) {
    return await tvSeriesPopularList(params, this.defaultOptions);
  }

  public async getTopRatedList(params?: TvSeriesTopRatedListParams) {
    return await tvSeriesTopRatedList(params, this.defaultOptions);
  }

  public async getDetails(seriesId: number, params?: TvSeriesDetailsParams) {
    return await tvSeriesDetails(seriesId, params, this.defaultOptions);
  }

  public async getAccountStates(seriesId: number, params?: TvSeriesAccountStatesParams) {
    return await tvSeriesAccountStates(seriesId, params, this.defaultOptions);
  }

  public async getAggregateCredits(seriesId: number, params?: TvSeriesAggregateCreditsParams) {
    return await tvSeriesAggregateCredits(seriesId, params, this.defaultOptions);
  }

  public async getAlternativeTitles(seriesId: number) {
    return await tvSeriesAlternativeTitles(seriesId, this.defaultOptions);
  }

  public async getChanges(seriesId: number, params?: TvSeriesChangesParams) {
    return await tvSeriesChanges(seriesId, params, this.defaultOptions);
  }

  public async getContentRatings(seriesId: number) {
    return await tvSeriesContentRatings(seriesId, this.defaultOptions);
  }

  public async getCredits(seriesId: number, params?: TvSeriesCreditsParams) {
    return await tvSeriesCredits(seriesId, params, this.defaultOptions);
  }

  public async getExternalIds(seriesId: number) {
    return await tvSeriesExternalIds(seriesId, this.defaultOptions);
  }

  public async getImages(seriesId: number, params?: TvSeriesImagesParams) {
    return await tvSeriesImages(seriesId, params, this.defaultOptions);
  }

  public async getKeywords(seriesId: number) {
    return await tvSeriesKeywords(seriesId, this.defaultOptions);
  }

  public async getLatestId() {
    return await tvSeriesLatestId(this.defaultOptions);
  }

  public async getListsCopy(seriesId: number, params?: ListsCopyParams) {
    return await listsCopy(seriesId, params, this.defaultOptions);
  }

  public async getRecommendations(seriesId: number, params?: TvSeriesRecommendationsParams) {
    return await tvSeriesRecommendations(seriesId, params, this.defaultOptions);
  }

  public async getReviews(seriesId: number, params?: TvSeriesReviewsParams) {
    return await tvSeriesReviews(seriesId, params, this.defaultOptions);
  }

  public async getScreenedTheatrically(seriesId: number) {
    return await tvSeriesScreenedTheatrically(seriesId, this.defaultOptions);
  }

  public async getSimilar(seriesId: string, params?: TvSeriesSimilarParams) {
    return await tvSeriesSimilar(seriesId, params, this.defaultOptions);
  }

  public async getTranslations(seriesId: number) {
    return await tvSeriesTranslations(seriesId, this.defaultOptions);
  }

  public async getVideos(seriesId: number, params?: TvSeriesVideosParams) {
    return await tvSeriesVideos(seriesId, params, this.defaultOptions);
  }

  public async getWatchProviders(seriesId: number) {
    return await tvSeriesWatchProviders(seriesId, this.defaultOptions);
  }

  public async addRating(
    seriesId: number,
    tvSeriesAddRatingBody: TvSeriesAddRatingBody,
    params?: TvSeriesAddRatingParams,
  ) {
    return await tvSeriesAddRating(
      seriesId,
      tvSeriesAddRatingBody,
      params,
      this.defaultOptions,
    );
  }

  public async deleteRating(seriesId: number, params?: TvSeriesDeleteRatingParams) {
    return await tvSeriesDeleteRating(seriesId, params, this.defaultOptions);
  }
}
