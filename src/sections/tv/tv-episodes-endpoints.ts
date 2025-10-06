import HttpConnector from '../../http-connector';
import {
  TvEpisodeDetails,
  AccountState,
  ChangesResponse,
  CreditsResponse,
  ExternalIds,
  ImagesResponse,
  TranslationsResponse,
  VideosResponse,
  AddRatingRequest,
  RatingResponse,
} from './types';

const BASE_PATH = '/tv';

export class TvEpisodesEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get TV episode details */
  getDetails(
    tv_id: number,
    season_number: number,
    episode_number: number,
    params?: { language?: string },
  ): Promise<TvEpisodeDetails> {
    return this.http.get<TvEpisodeDetails>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}`,
      { params },
    );
  }

  /** Get account states for a TV episode */
  getAccountStates(
    tv_id: number,
    season_number: number,
    episode_number: number,
    params: { session_id: string },
  ): Promise<AccountState> {
    return this.http.get<AccountState>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/account_states`,
      { params },
    );
  }

  /** Get changes for a TV episode */
  getChanges(
    tv_id: number,
    season_number: number,
    episode_number: number,
  ): Promise<ChangesResponse> {
    return this.http.get<ChangesResponse>(`${BASE_PATH}/episode/${episode_number}/changes`);
  }

  /** Get credits for a TV episode */
  getCredits(
    tv_id: number,
    season_number: number,
    episode_number: number,
  ): Promise<CreditsResponse> {
    return this.http.get<CreditsResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/credits`,
    );
  }

  /** Get external IDs for a TV episode */
  getExternalIds(
    tv_id: number,
    season_number: number,
    episode_number: number,
  ): Promise<ExternalIds> {
    return this.http.get<ExternalIds>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/external_ids`,
    );
  }

  /** Get images for a TV episode */
  getImages(tv_id: number, season_number: number, episode_number: number): Promise<ImagesResponse> {
    return this.http.get<ImagesResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/images`,
    );
  }

  /** Get translations for a TV episode */
  getTranslations(
    tv_id: number,
    season_number: number,
    episode_number: number,
  ): Promise<TranslationsResponse> {
    return this.http.get<TranslationsResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/translations`,
    );
  }

  /** Get videos for a TV episode */
  getVideos(
    tv_id: number,
    season_number: number,
    episode_number: number,
    params?: { language?: string },
  ): Promise<VideosResponse> {
    return this.http.get<VideosResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/videos`,
      { params },
    );
  }

  /** Add a rating to a TV episode */
  addRating(
    tv_id: number,
    season_number: number,
    episode_number: number,
    body: AddRatingRequest,
    params: { session_id: string },
  ): Promise<RatingResponse> {
    return this.http.post<RatingResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/rating`,
      body,
      { params },
    );
  }

  /** Delete a rating from a TV episode */
  deleteRating(
    tv_id: number,
    season_number: number,
    episode_number: number,
    params: { session_id: string },
  ): Promise<RatingResponse> {
    return this.http.delete<RatingResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/episode/${episode_number}/rating`,
      { params },
    );
  }
}
