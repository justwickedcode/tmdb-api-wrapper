import { ChangesPeopleListParams, changesPeopleList, PersonPopularListParams, personPopularList, PersonDetailsParams, personDetails, PersonChangesParams, personChanges, PersonCombinedCreditsParams, personCombinedCredits, personExternalIds, personImages, personLatestId, PersonMovieCreditsParams, personMovieCredits, PersonTvCreditsParams, personTvCredits, PersonTaggedImagesParams, personTaggedImages, translations } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class PersonService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getChangesPeopleList(params?: ChangesPeopleListParams) {
    return await changesPeopleList(params, this.defaultOptions);
  }

  public async getPopularList(params?: PersonPopularListParams) {
    return await personPopularList(params, this.defaultOptions);
  }

  public async getDetails(personId: number, params?: PersonDetailsParams) {
    return await personDetails(personId, params, this.defaultOptions);
  }

  public async getChanges(personId: number, params?: PersonChangesParams) {
    return await personChanges(personId, params, this.defaultOptions);
  }

  public async getCombinedCredits(personId: string, params?: PersonCombinedCreditsParams) {
    return await personCombinedCredits(personId, params, this.defaultOptions);
  }

  public async getExternalIds(personId: number) {
    return await personExternalIds(personId, this.defaultOptions);
  }

  public async getImages(personId: number) {
    return await personImages(personId, this.defaultOptions);
  }

  public async getLatestId() {
    return await personLatestId(this.defaultOptions);
  }

  public async getMovieCredits(personId: number, params?: PersonMovieCreditsParams) {
    return await personMovieCredits(personId, params, this.defaultOptions);
  }

  public async getTvCredits(personId: number, params?: PersonTvCreditsParams) {
    return await personTvCredits(personId, params, this.defaultOptions);
  }

  public async getTaggedImages(personId: number, params?: PersonTaggedImagesParams) {
    return await personTaggedImages(personId, params, this.defaultOptions);
  }

  public async getTranslations(personId: number) {
    return await translations(personId, this.defaultOptions);
  }
}
