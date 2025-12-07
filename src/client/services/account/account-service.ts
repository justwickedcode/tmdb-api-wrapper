import { AccountDetailsParams, accountDetails, AccountAddFavoriteBody, AccountAddFavoriteParams, accountAddFavorite, AccountAddToWatchlistBody, AccountAddToWatchlistParams, accountAddToWatchlist, AccountGetFavoritesParams, accountGetFavorites, AccountFavoriteTvParams, accountFavoriteTv, AccountListsParams, accountLists, AccountRatedMoviesParams, accountRatedMovies, AccountRatedTvParams, accountRatedTv, AccountRatedTvEpisodesParams, accountRatedTvEpisodes, AccountWatchlistMoviesParams, accountWatchlistMovies, AccountWatchlistTvParams, accountWatchlistTv } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class AccountService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(accountId: number, params: AccountDetailsParams) {
    return await accountDetails(accountId, params, this.defaultOptions);
  }

  public async addFavorite(
    accountId: number,
    accountAddFavoriteBody: AccountAddFavoriteBody,
    params?: AccountAddFavoriteParams,
  ) {
    return await accountAddFavorite(
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
    return await accountAddToWatchlist(
      accountId,
      accountAddToWatchlistBody,
      params,
      this.defaultOptions,
    );
  }

  public async getFavorites(accountId: number, params?: AccountGetFavoritesParams) {
    return await accountGetFavorites(accountId, params, this.defaultOptions);
  }

  public async getFavoriteTv(accountId: number, params?: AccountFavoriteTvParams) {
    return await accountFavoriteTv(accountId, params, this.defaultOptions);
  }

  public async getLists(accountId: number, params?: AccountListsParams) {
    return await accountLists(accountId, params, this.defaultOptions);
  }

  public async getRatedMovies(accountId: number, params?: AccountRatedMoviesParams) {
    return await accountRatedMovies(accountId, params, this.defaultOptions);
  }

  public async getRatedTv(accountId: number, params?: AccountRatedTvParams) {
    return await accountRatedTv(accountId, params, this.defaultOptions);
  }

  public async getRatedTvEpisodes(accountId: number, params?: AccountRatedTvEpisodesParams) {
    return await accountRatedTvEpisodes(accountId, params, this.defaultOptions);
  }

  public async getWatchlistMovies(accountId: number, params?: AccountWatchlistMoviesParams) {
    return await accountWatchlistMovies(accountId, params, this.defaultOptions);
  }

  public async getWatchlistTv(accountId: number, params?: AccountWatchlistTvParams) {
    return await accountWatchlistTv(accountId, params, this.defaultOptions);
  }
}
