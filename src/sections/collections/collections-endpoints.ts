import HttpConnector from '../../http-connector';
import {
  CollectionDetailsResponse,
  CollectionImagesResponse,
  CollectionTranslationsResponse,
} from './types';

const BASE_PATH = '/collection';

/** Internal param types (not exported) */
interface DetailsQueryParams {
  language?: string;
}

interface ImagesQueryParams {
  language?: string;
  include_image_language?: string;
}

/**
 * Endpoints for fetching movie collection information
 * (details, images, and translations).
 */
export class CollectionsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get details about a specific collection */
  getDetails(
    collectionId: number,
    params?: DetailsQueryParams,
  ): Promise<CollectionDetailsResponse> {
    return this.http.get<CollectionDetailsResponse>(`${BASE_PATH}/${collectionId}`, { params });
  }

  /** Get images (backdrops and posters) for a collection */
  getImages(collectionId: number, params?: ImagesQueryParams): Promise<CollectionImagesResponse> {
    return this.http.get<CollectionImagesResponse>(`${BASE_PATH}/${collectionId}/images`, {
      params,
    });
  }

  /** Get available translations for a collection */
  getTranslations(collectionId: number): Promise<CollectionTranslationsResponse> {
    return this.http.get<CollectionTranslationsResponse>(
      `${BASE_PATH}/${collectionId}/translations`,
    );
  }
}
