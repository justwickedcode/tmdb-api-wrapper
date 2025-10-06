import HTTPClient from '../../../HTTPClient';
import { KeywordDetails, KeywordMoviesResponse, KeywordMoviesOptions } from './types';

export class KeywordsEndpoints {
  constructor(private readonly http: HTTPClient) {}

  /** Get keyword details by ID */
  getDetails(keywordId: number): Promise<KeywordDetails> {
    return this.http.get<KeywordDetails>(`/keyword/${keywordId}`);
  }

  /** Get movies associated with a keyword */
  getMoviesByKeyword(
    keywordId: number,
    options?: KeywordMoviesOptions,
  ): Promise<KeywordMoviesResponse> {
    const params = { with_keywords: keywordId, ...options };
    return this.http.get<KeywordMoviesResponse>('/discover/movie', { params });
  }
}
