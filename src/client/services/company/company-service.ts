import { companyDetails, companyAlternativeNames, companyImages } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class CompanyService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getDetails(companyId: number) {
    return await companyDetails(companyId, this.defaultOptions);
  }

  public async getAlternativeNames(companyId: number) {
    return await companyAlternativeNames(companyId, this.defaultOptions);
  }

  public async getImages(companyId: number) {
    return await companyImages(companyId, this.defaultOptions);
  }
}
