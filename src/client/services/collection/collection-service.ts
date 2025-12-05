import * as orval from '../../__generated__/api/collection/collection';
import { CollectionDetailsParams, CollectionImagesParams } from '../../__generated__/schema';
import { CustomRequestInit } from '../../../types';

export default class CollectionService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(collectionId: number, params?: CollectionDetailsParams) {
    return await orval.collectionDetails(collectionId, params, this.defaultOptions);
  }

  public async getImages(collectionId: number, params?: CollectionImagesParams) {
    return await orval.collectionImages(collectionId, params, this.defaultOptions);
  }

  public async getTranslations(collectionId: number) {
    return await orval.collectionTranslations(collectionId, this.defaultOptions);
  }
}
