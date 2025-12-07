import { keywordDetails, KeywordMoviesParams, keywordMovies } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class KeywordService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(keywordId: number) {
    return await keywordDetails(keywordId, this.defaultOptions);
  }

  public async getMovies(keywordId: string, params?: KeywordMoviesParams) {
    return await keywordMovies(keywordId, params, this.defaultOptions);
  }
}
