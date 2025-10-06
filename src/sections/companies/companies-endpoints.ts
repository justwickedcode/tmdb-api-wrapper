import HTTPClient from '../../HTTPClient';
import { CompanyDetails, CompanyAlternativeNamesResponse, CompanyImagesResponse } from './types';

const BASE_PATH = '/company';

export class CompaniesEndpoints {
  constructor(private readonly http: HTTPClient) {}

  /** Get company details by ID */
  async getDetails(company_id: number): Promise<CompanyDetails> {
    const res = await this.http.get<CompanyDetails>(`${BASE_PATH}/${company_id}`);
    console.log('Company details:', res);
    return res;
  }

  /** Get alternative names for a company */
  async getAlternativeNames(company_id: number): Promise<CompanyAlternativeNamesResponse> {
    const res = await this.http.get<CompanyAlternativeNamesResponse>(
      `${BASE_PATH}/${company_id}/alternative_names`,
    );
    console.log('Company alternative names:', res);
    return res;
  }

  /** Get company images/logos */
  async getImages(company_id: number): Promise<CompanyImagesResponse> {
    const res = await this.http.get<CompanyImagesResponse>(`${BASE_PATH}/${company_id}/images`);
    console.log('Company images:', res);
    return res;
  }
}
