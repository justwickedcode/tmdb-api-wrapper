import HttpConnector from '../../http-connector';
import { ReviewDetailsResponse } from './types';

export class ReviewsEndpoints {
  private readonly http: HttpConnector;
  private readonly BASE_PATH = '/review';

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get review details by ID */
  getDetails(reviewId: string): Promise<ReviewDetailsResponse> {
    return this.http.get<ReviewDetailsResponse>(`${this.BASE_PATH}/${reviewId}`);
  }
}
