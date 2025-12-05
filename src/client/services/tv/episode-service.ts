import * as orval from '../../__generated__/api/episode/episode';
import {
  TvEpisodeAccountStatesParams,
  TvEpisodeAddRatingBody,
  TvEpisodeAddRatingParams,
  TvEpisodeCreditsParams,
  TvEpisodeDeleteRatingParams,
  TvEpisodeDetailsParams,
  TvEpisodeImagesParams,
  TvEpisodeVideosParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../types';

export default class EpisodeService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getGroups(seriesId: number) {
    return await orval.tvSeriesEpisodeGroups(seriesId, this.defaultOptions);
  }

  public async getDetails(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeDetailsParams,
  ) {
    return await orval.tvEpisodeDetails(
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
    return await orval.tvEpisodeAccountStates(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getChangesById(episodeId: number) {
    return await orval.tvEpisodeChangesById(episodeId, this.defaultOptions);
  }

  public async getCredits(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    params?: TvEpisodeCreditsParams,
  ) {
    return await orval.tvEpisodeCredits(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getExternalIds(seriesId: number, seasonNumber: number, episodeNumber: string) {
    return await orval.tvEpisodeExternalIds(
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
    return await orval.tvEpisodeImages(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getTranslations(seriesId: number, seasonNumber: number, episodeNumber: number) {
    return await orval.tvEpisodeTranslations(
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
    return await orval.tvEpisodeVideos(
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
    return await orval.tvEpisodeAddRating(
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
    return await orval.tvEpisodeDeleteRating(
      seriesId,
      seasonNumber,
      episodeNumber,
      params,
      this.defaultOptions,
    );
  }

  public async getGroupDetails(tvEpisodeGroupId: string) {
    return await orval.tvEpisodeGroupDetails(tvEpisodeGroupId, this.defaultOptions);
  }
}
