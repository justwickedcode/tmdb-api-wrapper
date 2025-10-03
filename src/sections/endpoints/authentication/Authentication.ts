import { BaseSectionEndpoint } from '@services/src/sections/endpoints/BaseSectionEndpoint';

const BASE_PATH = '/authentication';
export class Authentication extends BaseSectionEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  // Endpoints
}
