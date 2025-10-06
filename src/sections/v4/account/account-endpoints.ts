import HTTPClient from '../../../HTTPClient';
import {
  AccountListResponse,
  AccountMediaActionRequest,
  AccountMediaListResponse,
  AccountRateRequest,
} from './types';

const BASE_PATH = '/account';

export class AccountEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get all lists created by the account */
  getLists(account_id: string, params?: { page?: number }): Promise<AccountListResponse> {
    return this.http.get<AccountListResponse>(`${BASE_PATH}/${account_id}/lists`, { params });
  }

  /** Get favorite movies */
  getFavoriteMovies(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(`${BASE_PATH}/${account_id}/movie/favorites`, {
      params,
    });
  }

  /** Get favorite TV shows */
  getFavoriteTv(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(`${BASE_PATH}/${account_id}/tv/favorites`, {
      params,
    });
  }

  /** Mark a movie or TV show as favorite/unfavorite */
  markFavorite(account_id: string, body: AccountMediaActionRequest): Promise<unknown> {
    return this.http.post(`${BASE_PATH}/${account_id}/favorite`, body);
  }

  /** Get rated movies */
  getRatedMovies(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(`${BASE_PATH}/${account_id}/movie/ratings`, {
      params,
    });
  }

  /** Get rated TV shows */
  getRatedTv(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(`${BASE_PATH}/${account_id}/tv/ratings`, {
      params,
    });
  }

  /** Rate a movie or TV show */
  rateMedia(account_id: string, body: AccountRateRequest): Promise<unknown> {
    return this.http.post(`${BASE_PATH}/${account_id}/ratings`, body);
  }

  /** Get recommended movies */
  getRecommendedMovies(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(
      `${BASE_PATH}/${account_id}/movie/recommendations`,
      { params },
    );
  }

  /** Get recommended TV shows */
  getRecommendedTv(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(
      `${BASE_PATH}/${account_id}/tv/recommendations`,
      { params },
    );
  }

  /** Get watchlist movies */
  getWatchlistMovies(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(`${BASE_PATH}/${account_id}/movie/watchlist`, {
      params,
    });
  }

  /** Get watchlist TV shows */
  getWatchlistTv(
    account_id: string,
    params?: { page?: number; language?: string },
  ): Promise<AccountMediaListResponse> {
    return this.http.get<AccountMediaListResponse>(`${BASE_PATH}/${account_id}/tv/watchlist`, {
      params,
    });
  }

  /** Add or remove a media item from the watchlist */
  markWatchlist(account_id: string, body: AccountMediaActionRequest): Promise<unknown> {
    return this.http.post(`${BASE_PATH}/${account_id}/watchlist`, body);
  }
}
