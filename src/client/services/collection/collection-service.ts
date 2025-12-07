import { CollectionDetailsParams, collectionDetails, CollectionImagesParams, collectionImages, collectionTranslations } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class CollectionService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(collectionId: number, params?: CollectionDetailsParams) {
    return await collectionDetails(collectionId, params, this.defaultOptions);
  }

  public async getImages(collectionId: number, params?: CollectionImagesParams) {
    return await collectionImages(collectionId, params, this.defaultOptions);
  }

  public async getTranslations(collectionId: number) {
    return await collectionTranslations(collectionId, this.defaultOptions);
  }
}
