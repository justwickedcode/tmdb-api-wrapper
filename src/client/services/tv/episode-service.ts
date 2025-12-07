import { tvSeriesEpisodeGroups, TvEpisodeDetailsParams, tvEpisodeDetails, TvEpisodeAccountStatesParams, tvEpisodeAccountStates, tvEpisodeChangesById, TvEpisodeCreditsParams, tvEpisodeCredits, tvEpisodeExternalIds, TvEpisodeImagesParams, tvEpisodeImages, tvEpisodeTranslations, TvEpisodeVideosParams, tvEpisodeVideos, TvEpisodeAddRatingBody, TvEpisodeAddRatingParams, tvEpisodeAddRating, TvEpisodeDeleteRatingParams, tvEpisodeDeleteRating, tvEpisodeGroupDetails } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class EpisodeService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getGroups(seriesId: number) {
    return await tvSeriesEpisodeGroups(seriesId, this.defaultOptions);
  }

  public async getDetails(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeDetailsParams,
  ) {
    return await tvEpisodeDetails(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getAccountStates(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeAccountStatesParams,
  ) {
    return await tvEpisodeAccountStates(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getChangesById(episodeId: number) {
    return await tvEpisodeChangesById(episodeId, this.defaultOptions);
  }

  public async getCredits(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeCreditsParams,
  ) {
    return await tvEpisodeCredits(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getExternalIds(seriesId: number, seasonNumber: number, episodeNumber: string) {
    return await tvEpisodeExternalIds(
      seriesId,
      seasonNumber,
      episodeNumber,
      this.defaultOptions,
    );
  }

  public async getImages(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeImagesParams,
  ) {
    return await tvEpisodeImages(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getTranslations(seriesId: number, seasonNumber: number, episodeNumber: number) {
    return await tvEpisodeTranslations(
      seriesId,
      seasonNumber,
      episodeNumber,
      this.defaultOptions,
    );
  }

  public async getVideos(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeVideosParams,
  ) {
    return await tvEpisodeVideos(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async addRating(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    tvEpisodeAddRatingBody: TvEpisodeAddRatingBody,
    params?: TvEpisodeAddRatingParams,
  ) {
    return await tvEpisodeAddRating(
      seriesId,
      seasonNumber,
      episodeNumber,
      tvEpisodeAddRatingBody,
      params,
      this.defaultOptions,
    );
  }

  public async deleteRating(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeDeleteRatingParams,
  ) {
    return await tvEpisodeDeleteRating(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getGroupDetails(tvEpisodeGroupId: string) {
    return await tvEpisodeGroupDetails(tvEpisodeGroupId, this.defaultOptions);
  }
}
