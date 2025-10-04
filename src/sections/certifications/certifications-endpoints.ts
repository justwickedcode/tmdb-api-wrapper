import HTTPClient from '../../HTTPClient';
import { MovieCertificationsResponse, TVCertificationsResponse } from './types';

const BASE_PATH = '/certification';

export class CertificationsEndpoints {
  private readonly http: HTTPClient;

  constructor(http: HTTPClient) {
    this.http = http;
  }

  /** Get all movie certifications */
  async getMovieCertifications(): Promise<MovieCertificationsResponse> {
    return this.http.get<MovieCertificationsResponse>(`${BASE_PATH}/movie/list`);
  }

  /** Get all TV certifications */
  async getTVCertifications(): Promise<TVCertificationsResponse> {
    return this.http.get<TVCertificationsResponse>(`${BASE_PATH}/tv/list`);
  }
}
