import { networkDetails, detailsCopy, alternativeNamesCopy } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class NetworkService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(networkId: number) {
    return await networkDetails(networkId, this.defaultOptions);
  }

  public async getDetailsCopy(networkId: number) {
    return await detailsCopy(networkId, this.defaultOptions);
  }

  public async getAlternativeNamesCopy(networkId: number) {
    return await alternativeNamesCopy(networkId, this.defaultOptions);
  }
}
