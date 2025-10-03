import { BaseSectionEndpoint } from '@services/src/sections/endpoints/BaseSectionEndpoint';

const BASE_PATH = '/guest_session';
export class GuestSessions extends BaseSectionEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  // Endpoints
}
