import * as orval from '../../__generated__/api/account/account';
import {
  AccountAddFavoriteBody,
  AccountAddFavoriteParams,
  AccountAddToWatchlistBody,
  AccountAddToWatchlistParams,
  AccountDetailsParams,
  AccountFavoriteTvParams,
  AccountGetFavoritesParams,
  AccountListsParams,
  AccountRatedMoviesParams,
  AccountRatedTvEpisodesParams,
  AccountRatedTvParams,
  AccountWatchlistMoviesParams,
  AccountWatchlistTvParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../types';

export default class AccountService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(accountId: number, params: AccountDetailsParams) {
    return await orval.accountDetails(accountId, params, this.defaultOptions);
  }

  public async addFavorite(
    accountId: number,
    accountAddFavoriteBody: AccountAddFavoriteBody,
    params?: AccountAddFavoriteParams,
  ) {
    return await orval.accountAddFavorite(
      accountId,
      accountAddFavoriteBody,
      params,
      this.defaultOptions,
    );
  }

  public async addToWatchlist(
    accountId: number,
    accountAddToWatchlistBody: AccountAddToWatchlistBody,
    params?: AccountAddToWatchlistParams,
  ) {
    return await orval.accountAddToWatchlist(
      accountId,
      accountAddToWatchlistBody,
      params,
      this.defaultOptions,
    );
  }

  public async getFavorites(accountId: number, params?: AccountGetFavoritesParams) {
    return await orval.accountGetFavorites(accountId, params, this.defaultOptions);
  }

  public async getFavoriteTv(accountId: number, params?: AccountFavoriteTvParams) {
    return await orval.accountFavoriteTv(accountId, params, this.defaultOptions);
  }

  public async getLists(accountId: number, params?: AccountListsParams) {
    return await orval.accountLists(accountId, params, this.defaultOptions);
  }

  public async getRatedMovies(accountId: number, params?: AccountRatedMoviesParams) {
    return await orval.accountRatedMovies(accountId, params, this.defaultOptions);
  }

  public async getRatedTv(accountId: number, params?: AccountRatedTvParams) {
    return await orval.accountRatedTv(accountId, params, this.defaultOptions);
  }

  public async getRatedTvEpisodes(accountId: number, params?: AccountRatedTvEpisodesParams) {
    return await orval.accountRatedTvEpisodes(accountId, params, this.defaultOptions);
  }

  public async getWatchlistMovies(accountId: number, params?: AccountWatchlistMoviesParams) {
    return await orval.accountWatchlistMovies(accountId, params, this.defaultOptions);
  }

  public async getWatchlistTv(accountId: number, params?: AccountWatchlistTvParams) {
    return await orval.accountWatchlistTv(accountId, params, this.defaultOptions);
  }
}
