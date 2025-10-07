import HttpConnector from '../../http-connector';
import { MovieCertificationsResponse, TVCertificationsResponse } from './types';

const BASE_PATH = '/certification';

export class CertificationsEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get all movie certifications */
  getMovieCertifications(): Promise<MovieCertificationsResponse> {
    return this.http.get<MovieCertificationsResponse>(`${BASE_PATH}/movie/list`);
  }

  /** Get all TV certifications */
  getTVCertifications(): Promise<TVCertificationsResponse> {
    return this.http.get<TVCertificationsResponse>(`${BASE_PATH}/tv/list`);
  }
}
