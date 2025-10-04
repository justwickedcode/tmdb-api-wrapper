import { BaseSectionEndpoint } from '../BaseSectionEndpoint';

const BASE_PATH = '/account';
export class Account extends BaseSectionEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  // Endpoints

  async getDetails(account_id: number): Promise<any> {
    const endpoint = `${BASE_PATH}/${account_id}`;
    return await this.http.get<any>(endpoint);
  }

  async addFavorite(account_id: number): Promise<void> {
    const endpoint = `${BASE_PATH}/favorite`;
    return await this.http.post<void>(endpoint);
  }
}
