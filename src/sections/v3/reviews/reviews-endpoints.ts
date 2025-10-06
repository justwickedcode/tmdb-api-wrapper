import HTTPClient from '../../../HTTPClient';
import { ReviewDetails } from './types';

export class ReviewsEndpoints {
  private readonly http: HTTPClient;
  private readonly BASE_PATH = '/review';

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get review details by ID */
  getDetails(reviewId: string): Promise<ReviewDetails> {
    return this.http.get<ReviewDetails>(`${this.BASE_PATH}/${reviewId}`);
  }
}
