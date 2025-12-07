import { DiscoverMovieParams, discoverMovie, DiscoverTvParams, discoverTv } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class DiscoverService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getMovie(params?: DiscoverMovieParams) {
    return await discoverMovie(params, this.defaultOptions);
  }

  public async getTv(params?: DiscoverTvParams) {
    return await discoverTv(params, this.defaultOptions);
  }
}
