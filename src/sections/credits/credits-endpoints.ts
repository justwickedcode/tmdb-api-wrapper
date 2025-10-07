import HttpConnector from '../../http-connector';
import { CreditDetailsResponse } from './types';

const BASE_PATH = '/credit';

export class CreditsEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get credit details by credit ID */
  getDetails(credit_id: string): Promise<CreditDetailsResponse> {
    return this.http.get<CreditDetailsResponse>(`${BASE_PATH}/${credit_id}`);
  }
}
