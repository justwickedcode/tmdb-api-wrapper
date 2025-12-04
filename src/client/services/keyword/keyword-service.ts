import * as orval from "../../__generated__/api/keyword/keyword"
import { KeywordMoviesParams } from "../../__generated__/schema";
import { CustomRequestInit } from "../../types";

export default class KeywordService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}

    public async getDetails(keywordId: number) {
        return await orval.keywordDetails(keywordId, this.defaultOptions);
    }

    public async getMovies(keywordId: string,
        params?: KeywordMoviesParams) {
        return await orval.keywordMovies(keywordId, params, this.defaultOptions);
    }
}