import HTTPClient from '../../HTTPClient';
import {
  CollectionDetailsResponse,
  CollectionImagesResponse,
  CollectionTranslationsResponse,
} from './types';

const BASE_PATH = '/collection';

/**
 * Endpoints for fetching movie collection information
 * (details, images, and translations).
 */
export class CollectionsEndpoints {
  constructor(private readonly http: HTTPClient) {}

  /** 🔹 Get details about a specific collection */
  getDetails(
    collectionId: number,
    params?: { language?: string },
  ): Promise<CollectionDetailsResponse> {
    return this.http.get(`${BASE_PATH}/${collectionId}`, { params });
  }

  /** 🔹 Get images (backdrops and posters) for a collection */
  getImages(
    collectionId: number,
    params?: { language?: string; include_image_language?: string },
  ): Promise<CollectionImagesResponse> {
    return this.http.get(`${BASE_PATH}/${collectionId}/images`, { params });
  }

  /** 🔹 Get available translations for a collection */
  getTranslations(collectionId: number): Promise<CollectionTranslationsResponse> {
    return this.http.get(`${BASE_PATH}/${collectionId}/translations`);
  }
}
