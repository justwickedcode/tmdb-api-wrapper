import * as orval from '../../__generated__/api/genre/genre';
import { GenreMovieListParams, GenreTvListParams } from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class GenreService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getMovieList(params?: GenreMovieListParams) {
    return await orval.genreMovieList(params, this.defaultOptions);
  }

  public async getTvList(params?: GenreTvListParams) {
    return await orval.genreTvList(params, this.defaultOptions);
  }
}
