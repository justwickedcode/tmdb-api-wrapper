import * as orval from '../../__generated__/api/tv/tv';
import {
  ChangesTvListParams,
  ListsCopyParams,
  TvSeriesAccountStatesParams,
  TvSeriesAddRatingBody,
  TvSeriesAddRatingParams,
  TvSeriesAggregateCreditsParams,
  TvSeriesAiringTodayListParams,
  TvSeriesChangesParams,
  TvSeriesCreditsParams,
  TvSeriesDeleteRatingParams,
  TvSeriesDetailsParams,
  TvSeriesImagesParams,
  TvSeriesOnTheAirListParams,
  TvSeriesPopularListParams,
  TvSeriesRecommendationsParams,
  TvSeriesReviewsParams,
  TvSeriesSimilarParams,
  TvSeriesTopRatedListParams,
  TvSeriesVideosParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';
import EpisodeService from './episode-service';
import SeasonService from './season-service';

export default class TVService {
  public episode: EpisodeService;
  public season: SeasonService;
  constructor(private readonly defaultOptions: CustomRequestInit) {
    this.episode = new EpisodeService(defaultOptions);
    this.season = new SeasonService(defaultOptions);
  }

  public async getChangesTvList(params?: ChangesTvListParams) {
    return await orval.changesTvList(params, this.defaultOptions);
  }

  public async getAiringTodayList(params?: TvSeriesAiringTodayListParams) {
    return await orval.tvSeriesAiringTodayList(params, this.defaultOptions);
  }

  public async getOnTheAirList(params?: TvSeriesOnTheAirListParams) {
    return await orval.tvSeriesOnTheAirList(params, this.defaultOptions);
  }

  public async getPopularList(params?: TvSeriesPopularListParams) {
    return await orval.tvSeriesPopularList(params, this.defaultOptions);
  }

  public async getTopRatedList(params?: TvSeriesTopRatedListParams) {
    return await orval.tvSeriesTopRatedList(params, this.defaultOptions);
  }

  public async getDetails(seriesId: number, params?: TvSeriesDetailsParams) {
    return await orval.tvSeriesDetails(seriesId, params, this.defaultOptions);
  }

  public async getAccountStates(seriesId: number, params?: TvSeriesAccountStatesParams) {
    return await orval.tvSeriesAccountStates(seriesId, params, this.defaultOptions);
  }

  public async getAggregateCredits(seriesId: number, params?: TvSeriesAggregateCreditsParams) {
    return await orval.tvSeriesAggregateCredits(seriesId, params, this.defaultOptions);
  }

  public async getAlternativeTitles(seriesId: number) {
    return await orval.tvSeriesAlternativeTitles(seriesId, this.defaultOptions);
  }

  public async getChanges(seriesId: number, params?: TvSeriesChangesParams) {
    return await orval.tvSeriesChanges(seriesId, params, this.defaultOptions);
  }

  public async getContentRatings(seriesId: number) {
    return await orval.tvSeriesContentRatings(seriesId, this.defaultOptions);
  }

  public async getCredits(seriesId: number, params?: TvSeriesCreditsParams) {
    return await orval.tvSeriesCredits(seriesId, params, this.defaultOptions);
  }

  public async getExternalIds(seriesId: number) {
    return await orval.tvSeriesExternalIds(seriesId, this.defaultOptions);
  }

  public async getImages(seriesId: number, params?: TvSeriesImagesParams) {
    return await orval.tvSeriesImages(seriesId, params, this.defaultOptions);
  }

  public async getKeywords(seriesId: number) {
    return await orval.tvSeriesKeywords(seriesId, this.defaultOptions);
  }

  public async getLatestId() {
    return await orval.tvSeriesLatestId(this.defaultOptions);
  }

  public async getListsCopy(seriesId: number, params?: ListsCopyParams) {
    return await orval.listsCopy(seriesId, params, this.defaultOptions);
  }

  public async getRecommendations(seriesId: number, params?: TvSeriesRecommendationsParams) {
    return await orval.tvSeriesRecommendations(seriesId, params, this.defaultOptions);
  }

  public async getReviews(seriesId: number, params?: TvSeriesReviewsParams) {
    return await orval.tvSeriesReviews(seriesId, params, this.defaultOptions);
  }

  public async getScreenedTheatrically(seriesId: number) {
    return await orval.tvSeriesScreenedTheatrically(seriesId, this.defaultOptions);
  }

  public async getSimilar(seriesId: string, params?: TvSeriesSimilarParams) {
    return await orval.tvSeriesSimilar(seriesId, params, this.defaultOptions);
  }

  public async getTranslations(seriesId: number) {
    return await orval.tvSeriesTranslations(seriesId, this.defaultOptions);
  }

  public async getVideos(seriesId: number, params?: TvSeriesVideosParams) {
    return await orval.tvSeriesVideos(seriesId, params, this.defaultOptions);
  }

  public async getWatchProviders(seriesId: number) {
    return await orval.tvSeriesWatchProviders(seriesId, this.defaultOptions);
  }

  public async addRating(
    seriesId: number,
    tvSeriesAddRatingBody: TvSeriesAddRatingBody,
    params?: TvSeriesAddRatingParams,
  ) {
    return await orval.tvSeriesAddRating(
      seriesId,
      tvSeriesAddRatingBody,
      params,
      this.defaultOptions,
    );
  }

  public async deleteRating(seriesId: number, params?: TvSeriesDeleteRatingParams) {
    return await orval.tvSeriesDeleteRating(seriesId, params, this.defaultOptions);
  }
}
