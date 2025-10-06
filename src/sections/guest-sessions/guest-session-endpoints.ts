import HttpConnector from '../../http-connector';
import {
  GuestSessionRatedMoviesOptions,
  GuestSessionRatedMoviesResponse,
  GuestSessionRatedTVShowsOptions,
  GuestSessionRatedTVShowsResponse,
  GuestSessionRatedTVEpisodesOptions,
  GuestSessionRatedTVEpisodesResponse,
} from './types';

// TODO: Figure out how this works and fix if needed
export class GuestSessionsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get rated movies for a guest session */
  getRatedMovies(
    guestSessionId: string,
    options?: GuestSessionRatedMoviesOptions,
  ): Promise<GuestSessionRatedMoviesResponse> {
    return this.http.get(`/guest_session/${guestSessionId}/rated/movies`, {
      params: options ? { ...options } : undefined,
    });
  }

  /** Get rated TV shows for a guest session */
  getRatedTVShows(
    guestSessionId: string,
    options?: GuestSessionRatedTVShowsOptions,
  ): Promise<GuestSessionRatedTVShowsResponse> {
    return this.http.get(`/guest_session/${guestSessionId}/rated/tv`, {
      params: options ? { ...options } : undefined,
    });
  }

  /** Get rated TV episodes for a guest session */
  getRatedTVEpisodes(
    guestSessionId: string,
    options?: GuestSessionRatedTVEpisodesOptions,
  ): Promise<GuestSessionRatedTVEpisodesResponse> {
    return this.http.get(`/guest_session/${guestSessionId}/rated/tv/episodes`, {
      params: options ? { ...options } : undefined,
    });
  }
}
