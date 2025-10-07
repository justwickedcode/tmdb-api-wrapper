import HttpConnector from '../../http-connector';
import { KeywordDetails, KeywordMoviesResponse } from './types';

/** Options for fetching movies by keyword */
interface KeywordMoviesParams {
  language?: string;
  include_adult?: boolean;
  page?: number;
}

export class KeywordsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get keyword details by ID */
  getDetails(keywordId: number): Promise<KeywordDetails> {
    return this.http.get<KeywordDetails>(`/keyword/${keywordId}`);
  }

  /**
   * @deprecated Use `discover.getMovies()` instead.
   * Get movies associated with a keyword
   */
  getMoviesByKeyword(
    keywordId: number,
    params?: KeywordMoviesParams,
  ): Promise<KeywordMoviesResponse> {
    return this.http.get<KeywordMoviesResponse>(`/keyword/${keywordId}/movies`, { params });
  }
}
