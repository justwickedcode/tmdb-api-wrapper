import { GenreMovieListParams, genreMovieList, GenreTvListParams, genreTvList } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class GenreService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getMovieList(params?: GenreMovieListParams) {
    return await genreMovieList(params, this.defaultOptions);
  }

  public async getTvList(params?: GenreTvListParams) {
    return await genreTvList(params, this.defaultOptions);
  }
}
