import * as orval from "../../__generated__/api/person/person";
import { ChangesPeopleListParams, PersonChangesParams, PersonCombinedCreditsParams, PersonDetailsParams, PersonMovieCreditsParams, PersonPopularListParams, PersonTaggedImagesParams, PersonTvCreditsParams } from "../../__generated__/schema";
import { CustomRequestInit } from "../../types";

export default class PersonService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}

    public async changesPeopleList(params?: ChangesPeopleListParams) {
        return await orval.changesPeopleList(params, this.defaultOptions);
    }

    public async personPopularList(params?: PersonPopularListParams) {
        return await orval.personPopularList(params, this.defaultOptions);
    }

    public async personDetails(personId: number,
        params?: PersonDetailsParams) {
        return await orval.personDetails(personId, params, this.defaultOptions);
    }

    public async personChanges(personId: number,
        params?: PersonChangesParams) {
        return await orval.personChanges(personId, params, this.defaultOptions);
    }

    public async personCombinedCredits(personId: string,
        params?: PersonCombinedCreditsParams) {
        return await orval.personCombinedCredits(personId, params, this.defaultOptions);
    }

    public async personExternalIds(personId: number) {
        return await orval.personExternalIds(personId, this.defaultOptions);
    }

    public async personImages(personId: number) {
        return await orval.personImages(personId, this.defaultOptions);
    }

    public async personLatestId() {
        return await orval.personLatestId(this.defaultOptions);
    }

    public async personMovieCredits(personId: number,
        params?: PersonMovieCreditsParams) {
        return await orval.personMovieCredits(personId, params, this.defaultOptions);
    }

    public async personTvCredits(personId: number,
        params?: PersonTvCreditsParams) {
        return await orval.personTvCredits(personId, params, this.defaultOptions);
    }

    public async personTaggedImages(personId: number,
        params?: PersonTaggedImagesParams) {
        return await orval.personTaggedImages(personId, params, this.defaultOptions);
    }

    public async translations(personId: number) {
        return await orval.translations(personId, this.defaultOptions);
    }
}