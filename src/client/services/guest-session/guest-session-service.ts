import { GuestSessionRatedMoviesParams, guestSessionRatedMovies, GuestSessionRatedTvParams, guestSessionRatedTv, GuestSessionRatedTvEpisodesParams, guestSessionRatedTvEpisodes } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class GuestSessionService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getRatedMovies(guestSessionId: string, params?: GuestSessionRatedMoviesParams) {
    return await guestSessionRatedMovies(guestSessionId, params, this.defaultOptions);
  }

  public async getRatedTv(guestSessionId: string, params?: GuestSessionRatedTvParams) {
    return await guestSessionRatedTv(guestSessionId, params, this.defaultOptions);
  }

  public async getTvEpisodes(guestSessionId: string, params?: GuestSessionRatedTvEpisodesParams) {
    return await guestSessionRatedTvEpisodes(guestSessionId, params, this.defaultOptions);
  }
}
