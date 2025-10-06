import HttpConnector from '../../http-connector';
import {
  AccountDetails,
  AddFavoriteRequestBody,
  AddFavoriteResponse,
  AddToWatchlistRequestBody,
  AddToWatchlistResponse,
  FavoriteMoviesResponse,
  FavoriteTVResponse,
  RatedMoviesResponse,
  RatedTVResponse,
  RatedTVEpisodesResponse,
  WatchlistMoviesResponse,
  WatchlistTVResponse,
  AccountListsResponse,
} from './types';

const BASE_PATH = '/account';

export class AccountEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get account details */
  async getDetails(account_id: number, session_id?: string): Promise<AccountDetails> {
    const params = session_id ? { session_id } : undefined;
    return this.http.get<AccountDetails>(`${BASE_PATH}/${account_id}`, { params });
  }

  /** Add a media item to favorites */
  async addFavorite(
    account_id: number,
    body: AddFavoriteRequestBody,
    session_id?: string,
  ): Promise<AddFavoriteResponse> {
    const params = session_id ? { session_id } : undefined;
    return this.http.post<AddFavoriteResponse>(`${BASE_PATH}/${account_id}/favorite`, body, {
      params,
    });
  }

  /** Add a media item to watchlist */
  async addToWatchlist(
    account_id: number,
    body: AddToWatchlistRequestBody,
    session_id?: string,
  ): Promise<AddToWatchlistResponse> {
    const params = session_id ? { session_id } : undefined;
    return this.http.post<AddToWatchlistResponse>(`${BASE_PATH}/${account_id}/watchlist`, body, {
      params,
    });
  }

  /** Get favorite movies */
  async getFavoriteMovies(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<FavoriteMoviesResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<FavoriteMoviesResponse>(`${BASE_PATH}/${account_id}/favorite/movies`, {
      params,
    });
  }

  /** Get favorite TV shows */
  async getFavoriteTV(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<FavoriteTVResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<FavoriteTVResponse>(`${BASE_PATH}/${account_id}/favorite/tv`, { params });
  }

  /** Get custom lists */
  async getCustomLists(
    account_id: number,
    options?: { page?: number },
    session_id?: string,
  ): Promise<AccountListsResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<AccountListsResponse>(`${BASE_PATH}/${account_id}/lists`, { params });
  }

  /** Get rated movies */
  async getRatedMovies(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<RatedMoviesResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<RatedMoviesResponse>(`${BASE_PATH}/${account_id}/rated/movies`, {
      params,
    });
  }

  /** Get rated TV shows */
  async getRatedTV(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<RatedTVResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<RatedTVResponse>(`${BASE_PATH}/${account_id}/rated/tv`, { params });
  }

  /** Get rated TV episodes */
  async getRatedTVEpisodes(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<RatedTVEpisodesResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<RatedTVEpisodesResponse>(`${BASE_PATH}/${account_id}/rated/tv/episodes`, {
      params,
    });
  }

  /** Get watchlist movies */
  async getWatchlistMovies(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<WatchlistMoviesResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<WatchlistMoviesResponse>(`${BASE_PATH}/${account_id}/watchlist/movies`, {
      params,
    });
  }

  /** Get watchlist TV shows */
  async getWatchlistTV(
    account_id: number,
    options?: Record<string, string | number>,
    session_id?: string,
  ): Promise<WatchlistTVResponse> {
    const params = { ...(options ?? {}), ...(session_id ? { session_id } : {}) };
    return this.http.get<WatchlistTVResponse>(`${BASE_PATH}/${account_id}/watchlist/tv`, {
      params,
    });
  }
}
