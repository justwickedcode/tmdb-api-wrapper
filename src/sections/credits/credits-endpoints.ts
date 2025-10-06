import HttpConnector from '../../http-connector';
import { CreditDetails } from './types';

const BASE_PATH = '/credit';

export class CreditsEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get credit details by credit ID */
  async getDetails(credit_id: string): Promise<CreditDetails> {
    const res = await this.http.get<CreditDetails>(`${BASE_PATH}/${credit_id}`);
    console.log('Credit details:', res);
    return res;
  }
}
