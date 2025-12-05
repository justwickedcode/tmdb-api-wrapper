import * as orval from "../../__generated__/api/season/season";
import { TvSeasonAccountStatesParams, TvSeasonAggregateCreditsParams, TvSeasonChangesByIdParams, TvSeasonCreditsParams, TvSeasonDetailsParams, TvSeasonImagesParams, TvSeasonVideosParams, TvSeasonWatchProvidersParams } from "../../__generated__/schema";
import { CustomRequestInit } from "../../types";

export default class SeasonService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}
    
    public async tvSeasonDetails(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonDetailsParams) {
        return await orval.tvSeasonDetails(seriesId, seasonNumber, params, this.defaultOptions);
    }

    public async tvSeasonAccountStates(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonAccountStatesParams) {
        return await orval.tvSeasonAccountStates(seriesId, seasonNumber, params, this.defaultOptions);
    }

    public async tvSeasonAggregateCredits(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonAggregateCreditsParams) {
        return await orval.tvSeasonAggregateCredits(seriesId, seasonNumber, params, this.defaultOptions);
    }

    public async tvSeasonChangesById(seriesId: number,
        params?: TvSeasonChangesByIdParams) {
        return await orval.tvSeasonChangesById(seriesId, params, this.defaultOptions);
    }

    public async tvSeasonCredits(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonCreditsParams) {
        return await orval.tvSeasonCredits(seriesId, seasonNumber, params, this.defaultOptions);
    }

    public async tvSeasonExternalIds(seriesId: number,
        seasonNumber: number) {
        return await orval.tvSeasonExternalIds(seriesId, seasonNumber, this.defaultOptions);
    }

    public async tvSeasonImages(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonImagesParams) {
        return await orval.tvSeasonImages(seriesId, seasonNumber, params, this.defaultOptions);
    }

    public async tvSeasonTranslations(seriesId: number,
        seasonNumber: number) {
        return await orval.tvSeasonTranslations(seriesId, seasonNumber, this.defaultOptions);
    }

    public async tvSeasonVideos(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonVideosParams) {
        return await orval.tvSeasonVideos(seriesId, seasonNumber, params, this.defaultOptions);
    }

    public async tvSeasonWatchProviders(seriesId: number,
        seasonNumber: number,
        params?: TvSeasonWatchProvidersParams) {
        return await orval.tvSeasonWatchProviders(seriesId, seasonNumber, params, this.defaultOptions);
    }
}