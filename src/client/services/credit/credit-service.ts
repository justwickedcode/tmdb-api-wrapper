import { creditDetails } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class CreditService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(creditId: string) {
    return await creditDetails(creditId, this.defaultOptions);
  }
}
