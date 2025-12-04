import * as orval from "../../__generated__/api/review/review";
import { CustomRequestInit } from "../../types";

export default class ReviewService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}

    public async getDetails(reviewId: string) {
        return await orval.reviewDetails(reviewId, this.defaultOptions);
    }
}