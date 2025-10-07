import HttpConnector from '../../http-connector';
import {
  CompanyAlternativeNamesResponse,
  CompanyDetailsResponse,
  CompanyImagesResponse,
} from './types';

const BASE_PATH = '/company';

export class CompaniesEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get company details by ID */
  async getDetails(companyId: number): Promise<CompanyDetailsResponse> {
    return this.http.get<CompanyDetailsResponse>(`${BASE_PATH}/${companyId}`);
  }

  /** Get alternative names for a company */
  async getAlternativeNames(companyId: number): Promise<CompanyAlternativeNamesResponse> {
    return this.http.get<CompanyAlternativeNamesResponse>(
      `${BASE_PATH}/${companyId}/alternative_names`,
    );
  }

  /** Get company images/logos */
  async getImages(companyId: number): Promise<CompanyImagesResponse> {
    return this.http.get<CompanyImagesResponse>(`${BASE_PATH}/${companyId}/images`);
  }
}
