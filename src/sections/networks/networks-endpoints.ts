// sections/networks/NetworksEndpoints.ts
import HTTPClient from '../../HTTPClient';
import { NetworkDetails, NetworkAlternativeNamesResponse, NetworkImagesResponse } from './types';

export class NetworksEndpoints {
  private readonly http: HTTPClient;
  private readonly BASE_PATH = '/network';

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get details of a network by ID */
  getDetails(networkId: number): Promise<NetworkDetails> {
    return this.http.get<NetworkDetails>(`${this.BASE_PATH}/${networkId}`);
  }

  /** Get alternative names for a network */
  getAlternativeNames(networkId: number): Promise<NetworkAlternativeNamesResponse> {
    return this.http.get<NetworkAlternativeNamesResponse>(
      `${this.BASE_PATH}/${networkId}/alternative_names`,
    );
  }

  /** Get images/logos for a network */
  getImages(networkId: number): Promise<NetworkImagesResponse> {
    return this.http.get<NetworkImagesResponse>(`${this.BASE_PATH}/${networkId}/images`);
  }
}
