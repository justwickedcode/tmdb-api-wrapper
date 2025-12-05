import * as orval from '../../__generated__/api/guest-session/guest-session';
import {
  GuestSessionRatedMoviesParams,
  GuestSessionRatedTvParams,
  GuestSessionRatedTvEpisodesParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class GuestSessionService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getRatedMovies(guestSessionId: string, params?: GuestSessionRatedMoviesParams) {
    return await orval.guestSessionRatedMovies(guestSessionId, params, this.defaultOptions);
  }

  public async getRatedTv(guestSessionId: string, params?: GuestSessionRatedTvParams) {
    return await orval.guestSessionRatedTv(guestSessionId, params, this.defaultOptions);
  }

  public async getTvEpisodes(guestSessionId: string, params?: GuestSessionRatedTvEpisodesParams) {
    return await orval.guestSessionRatedTvEpisodes(guestSessionId, params, this.defaultOptions);
  }
}
