import HTTPClient from '../../HTTPClient';
import {
  TvSeasonDetails,
  AccountState,
  AggregatedCredits,
  ChangesResponse,
  CreditsResponse,
  ExternalIds,
  ImagesResponse,
  TranslationsResponse,
  VideosResponse,
  WatchProvidersResponse,
} from './types';

const BASE_PATH = '/tv';

export class TvSeasonsEndpoints {
  private readonly http: HTTPClient;
  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get TV season details */
  getDetails(
    tv_id: number,
    season_number: number,
    params?: { language?: string },
  ): Promise<TvSeasonDetails> {
    return this.http.get<TvSeasonDetails>(`${BASE_PATH}/${tv_id}/season/${season_number}`, {
      params,
    });
  }

  /** Get account states for a TV season */
  getAccountStates(
    tv_id: number,
    season_number: number,
    params: { session_id: string },
  ): Promise<AccountState> {
    return this.http.get<AccountState>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/account_states`,
      { params },
    );
  }

  /** Get aggregated credits for a TV season */
  getAggregatedCredits(
    tv_id: number,
    season_number: number,
    params: { language?: string } = { language: 'en-US' },
  ): Promise<AggregatedCredits> {
    return this.http.get<AggregatedCredits>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/aggregate_credits`,
      { params },
    );
  }

  /** Get changes for a TV season */
  getChanges(
    season_number: number,
    params?: { start_date?: string; end_date?: string; page?: number },
  ): Promise<ChangesResponse> {
    return this.http.get<ChangesResponse>(`${BASE_PATH}/season/${season_number}/changes`, {
      params,
    });
  }

  /** Get credits for a TV season */
  getCredits(tv_id: number, season_number: number): Promise<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${BASE_PATH}/${tv_id}/season/${season_number}/credits`);
  }

  /** Get external IDs for a TV season */
  getExternalIds(tv_id: number, season_number: number): Promise<ExternalIds> {
    return this.http.get<ExternalIds>(`${BASE_PATH}/${tv_id}/season/${season_number}/external_ids`);
  }

  /** Get images for a TV season */
  getImages(tv_id: number, season_number: number): Promise<ImagesResponse> {
    return this.http.get<ImagesResponse>(`${BASE_PATH}/${tv_id}/season/${season_number}/images`);
  }

  /** Get translations for a TV season */
  getTranslations(tv_id: number, season_number: number): Promise<TranslationsResponse> {
    return this.http.get<TranslationsResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/translations`,
    );
  }

  /** Get videos for a TV season */
  getVideos(
    tv_id: number,
    season_number: number,
    params?: { language?: string },
  ): Promise<VideosResponse> {
    return this.http.get<VideosResponse>(`${BASE_PATH}/${tv_id}/season/${season_number}/videos`, {
      params,
    });
  }

  /** Get watch providers for a TV season */
  getWatchProviders(tv_id: number, season_number: number): Promise<WatchProvidersResponse> {
    return this.http.get<WatchProvidersResponse>(
      `${BASE_PATH}/${tv_id}/season/${season_number}/watch/providers`,
    );
  }
}
