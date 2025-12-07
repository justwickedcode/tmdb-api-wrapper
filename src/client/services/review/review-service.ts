import { reviewDetails } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class ReviewService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(reviewId: string) {
    return await reviewDetails(reviewId, this.defaultOptions);
  }
}
