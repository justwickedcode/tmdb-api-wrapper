import { TvSeasonDetailsParams, TvSeasonAccountStatesParams, TvSeasonAggregateCreditsParams, TvSeasonChangesByIdParams, TvSeasonCreditsParams, TvSeasonImagesParams, TvSeasonVideosParams, TvSeasonWatchProvidersParams, tvSeasonAccountStates, tvSeasonAggregateCredits, tvSeasonChangesById, tvSeasonCredits, tvSeasonDetails, tvSeasonExternalIds, tvSeasonImages, tvSeasonTranslations, tvSeasonVideos, tvSeasonWatchProviders } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class SeasonService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonDetailsParams,
  ) {
    return await tvSeasonDetails(seriesId, seasonNumber, params, this.defaultOptions);
  }

  public async getAccountStates(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonAccountStatesParams,
  ) {
    return await tvSeasonAccountStates(seriesId, seasonNumber, params, this.defaultOptions);
  }

  public async getAggregateCredits(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonAggregateCreditsParams,
  ) {
    return await tvSeasonAggregateCredits(
      seriesId,
      seasonNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getChangesById(seriesId: number, params?: TvSeasonChangesByIdParams) {
    return await tvSeasonChangesById(seriesId, params, this.defaultOptions);
  }

  public async getCredits(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonCreditsParams,
  ) {
    return await tvSeasonCredits(seriesId, seasonNumber, params, this.defaultOptions);
  }

  public async getExternalIds(seriesId: number, seasonNumber: number) {
    return await tvSeasonExternalIds(seriesId, seasonNumber, this.defaultOptions);
  }

  public async getImages(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonImagesParams,
  ) {
    return await tvSeasonImages(seriesId, seasonNumber, params, this.defaultOptions);
  }

  public async getTranslations(seriesId: number, seasonNumber: number) {
    return await tvSeasonTranslations(seriesId, seasonNumber, this.defaultOptions);
  }

  public async getVideos(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonVideosParams,
  ) {
    return await tvSeasonVideos(seriesId, seasonNumber, params, this.defaultOptions);
  }

  public async getWatchProviders(
    seriesId: number,
    seasonNumber: number,
    params?: TvSeasonWatchProvidersParams,
  ) {
    return await tvSeasonWatchProviders(seriesId, seasonNumber, params, this.defaultOptions);
  }
}
