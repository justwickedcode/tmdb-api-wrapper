import * as orval from '../../__generated__/api/person/person';
import {
  ChangesPeopleListParams,
  PersonChangesParams,
  PersonCombinedCreditsParams,
  PersonDetailsParams,
  PersonMovieCreditsParams,
  PersonPopularListParams,
  PersonTaggedImagesParams,
  PersonTvCreditsParams,
} from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class PersonService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getChangesPeopleList(params?: ChangesPeopleListParams) {
    return await orval.changesPeopleList(params, this.defaultOptions);
  }

  public async getPopularList(params?: PersonPopularListParams) {
    return await orval.personPopularList(params, this.defaultOptions);
  }

  public async getDetails(personId: number, params?: PersonDetailsParams) {
    return await orval.personDetails(personId, params, this.defaultOptions);
  }

  public async getChanges(personId: number, params?: PersonChangesParams) {
    return await orval.personChanges(personId, params, this.defaultOptions);
  }

  public async getCombinedCredits(personId: string, params?: PersonCombinedCreditsParams) {
    return await orval.personCombinedCredits(personId, params, this.defaultOptions);
  }

  public async getExternalIds(personId: number) {
    return await orval.personExternalIds(personId, this.defaultOptions);
  }

  public async getImages(personId: number) {
    return await orval.personImages(personId, this.defaultOptions);
  }

  public async getLatestId() {
    return await orval.personLatestId(this.defaultOptions);
  }

  public async getMovieCredits(personId: number, params?: PersonMovieCreditsParams) {
    return await orval.personMovieCredits(personId, params, this.defaultOptions);
  }

  public async getTvCredits(personId: number, params?: PersonTvCreditsParams) {
    return await orval.personTvCredits(personId, params, this.defaultOptions);
  }

  public async getTaggedImages(personId: number, params?: PersonTaggedImagesParams) {
    return await orval.personTaggedImages(personId, params, this.defaultOptions);
  }

  public async getTranslations(personId: number) {
    return await orval.translations(personId, this.defaultOptions);
  }
}
