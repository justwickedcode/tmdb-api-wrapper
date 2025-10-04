import HTTPClient from '../HTTPClient';

export class BaseSectionEndpoint {
  protected http: HTTPClient;

  constructor(protected readonly accessToken: string) {
    const BASE_URL = `https://api.themoviedb.org/3/`;
    this.http = new HTTPClient(accessToken, BASE_URL);
  }
}
