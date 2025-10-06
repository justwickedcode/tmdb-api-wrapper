import HttpConnector from '../../http-connector';
import { ReviewDetails } from './types';

export class ReviewsEndpoints {
  private readonly http: HttpConnector;
  private readonly BASE_PATH = '/review';

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get review details by ID */
  getDetails(reviewId: string): Promise<ReviewDetails> {
    return this.http.get<ReviewDetails>(`${this.BASE_PATH}/${reviewId}`);
  }
}
