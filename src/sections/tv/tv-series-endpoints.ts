import HttpConnector from '../../http-connector';
import {
  TvSeriesDetails,
  AccountState,
  AggregateCreditsResponse,
  AlternativeTitlesResponse,
  ChangesResponse,
  ContentRatingsResponse,
  CreditsResponse,
  EpisodeGroup,
  ExternalIds,
  ImagesResponse,
  KeywordsResponse,
  LatestResponse,
  ListsResponse,
  RecommendationsResponse,
  ReviewsResponse,
  SimilarResponse,
  TranslationsResponse,
  VideosResponse,
  WatchProvidersResponse,
  AddRatingRequest,
  RatingResponse,
} from './types';
import { TvSeriesListsEndpoints } from './tv-series-lists-endpoints';
import { TvSeasonsEndpoints } from './tv-seasons-endpoints';
import { TvEpisodesEndpoints } from './tv-episodes-endpoints';
import { TvEpisodeGroupsEndpoints } from './tv-episode-groups-endpoints';

const BASE_PATH = '/tv';

export class TvSeriesEndpoints {
  private readonly http: HttpConnector;
  public lists: TvSeriesListsEndpoints;
  public seasons: TvSeasonsEndpoints;
  public episodes: TvEpisodesEndpoints;
  public episodeGroups: TvEpisodeGroupsEndpoints;

  constructor(http: HttpConnector) {
    this.http = http;
    this.lists = new TvSeriesListsEndpoints(this.http);
    this.seasons = new TvSeasonsEndpoints(this.http);
    this.episodes = new TvEpisodesEndpoints(this.http);
    this.episodeGroups = new TvEpisodeGroupsEndpoints(this.http);
  }

  getDetails(tv_id: number, params?: { language?: string }): Promise<TvSeriesDetails> {
    return this.http.get<TvSeriesDetails>(`${BASE_PATH}/${tv_id}`, { params });
  }

  getAccountStates(tv_id: number, params: { session_id: string }): Promise<AccountState> {
    return this.http.get<AccountState>(`${BASE_PATH}/${tv_id}/account_states`, { params });
  }

  getAggregateCredits(tv_id: number): Promise<AggregateCreditsResponse> {
    return this.http.get<AggregateCreditsResponse>(`${BASE_PATH}/${tv_id}/aggregate_credits`);
  }

  getAlternativeTitles(
    tv_id: number,
    params?: { country?: string },
  ): Promise<AlternativeTitlesResponse> {
    return this.http.get<AlternativeTitlesResponse>(`${BASE_PATH}/${tv_id}/alternative_titles`, {
      params,
    });
  }

  getChanges(
    tv_id: number,
    params?: { start_date?: string; end_date?: string; page?: number },
  ): Promise<ChangesResponse> {
    return this.http.get<ChangesResponse>(`${BASE_PATH}/${tv_id}/changes`, { params });
  }

  getContentRatings(tv_id: number): Promise<ContentRatingsResponse> {
    return this.http.get<ContentRatingsResponse>(`${BASE_PATH}/${tv_id}/content_ratings`);
  }

  getCredits(tv_id: number): Promise<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${BASE_PATH}/${tv_id}/credits`);
  }

  getEpisodeGroups(tv_id: number): Promise<{ id: number; results: EpisodeGroup[] }> {
    return this.http.get<{ id: number; results: EpisodeGroup[] }>(
      `${BASE_PATH}/${tv_id}/episode_groups`,
    );
  }

  getExternalIds(tv_id: number): Promise<ExternalIds> {
    return this.http.get<ExternalIds>(`${BASE_PATH}/${tv_id}/external_ids`);
  }

  getImages(tv_id: number): Promise<ImagesResponse> {
    return this.http.get<ImagesResponse>(`${BASE_PATH}/${tv_id}/images`);
  }

  getKeywords(tv_id: number): Promise<KeywordsResponse> {
    return this.http.get<KeywordsResponse>(`${BASE_PATH}/${tv_id}/keywords`);
  }

  getLatest(): Promise<LatestResponse> {
    return this.http.get<LatestResponse>(`${BASE_PATH}/latest`);
  }

  getLists(tv_id: number, params: { page?: number } = {}): Promise<ListsResponse> {
    return this.http.get<ListsResponse>(`${BASE_PATH}/${tv_id}/lists`, { params });
  }

  getRecommendations(
    tv_id: number,
    params: { language?: string; page?: number } = {},
  ): Promise<RecommendationsResponse> {
    return this.http.get<RecommendationsResponse>(`${BASE_PATH}/${tv_id}/recommendations`, {
      params,
    });
  }

  getReviews(
    tv_id: number,
    params: { language?: string; page?: number } = {},
  ): Promise<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(`${BASE_PATH}/${tv_id}/reviews`, { params });
  }

  getSimilar(
    tv_id: number,
    params: { language?: string; page?: number } = {},
  ): Promise<SimilarResponse> {
    return this.http.get<SimilarResponse>(`${BASE_PATH}/${tv_id}/similar`, { params });
  }

  getTranslations(tv_id: number): Promise<TranslationsResponse> {
    return this.http.get<TranslationsResponse>(`${BASE_PATH}/${tv_id}/translations`);
  }

  getVideos(tv_id: number, params?: { language?: string }): Promise<VideosResponse> {
    return this.http.get<VideosResponse>(`${BASE_PATH}/${tv_id}/videos`, { params });
  }

  getWatchProviders(tv_id: number): Promise<WatchProvidersResponse> {
    return this.http.get<WatchProvidersResponse>(`${BASE_PATH}/${tv_id}/watch/providers`);
  }

  addRating(
    tv_id: number,
    body: AddRatingRequest,
    params: { session_id: string },
  ): Promise<RatingResponse> {
    return this.http.post<RatingResponse>(`${BASE_PATH}/${tv_id}/rating`, body, { params });
  }

  deleteRating(tv_id: number, params: { session_id: string }): Promise<RatingResponse> {
    return this.http.delete<RatingResponse>(`${BASE_PATH}/${tv_id}/rating`, { params });
  }
}
